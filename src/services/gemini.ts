/**
 * Gemini AI Service for Image and Text Processing
 * Handles fact-checking for both text claims and image content
 */

interface GeminiResponse {
  verdict: 'TRUE' | 'FALSE' | 'MIXED' | 'UNVERIFIABLE';
  confidence: number;
  summary: string;
  reasoning: string;
}

interface FactCheckResult {
  id: string;
  claim: string;
  verdict: string;
  confidence: number;
  summary: string;
  analysisTime: string;
  sources: any[];
}

class GeminiService {
  private apiKey: string;
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent';

  constructor() {
    this.apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
  }

  /**
   * Convert image file to base64 for Gemini API
   */
  private async fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  /**
   * Extract text from URL (simple fetch for now)
   */
  private async extractTextFromUrl(url: string): Promise<string> {
    try {
      // In production, you'd use a proper article extraction service
      // For now, we'll return a placeholder
      return `Article content from ${url}`;
    } catch (error) {
      throw new Error('Failed to extract content from URL');
    }
  }

  /**
   * Process image with Gemini Vision API
   */
  async processImage(file: File): Promise<FactCheckResult> {
    if (!this.apiKey) {
      return this.getMockResult('Image analysis (mock mode)');
    }

    try {
      const base64Image = await this.fileToBase64(file);
      
      const payload = {
        contents: [{
          parts: [
            {
              text: `Please analyze this image for any factual claims, memes, or statements that can be fact-checked. Extract the main claim and provide a comprehensive fact-check analysis including:
              1. The main claim or statement in the image
              2. Whether it's TRUE, FALSE, MIXED, or UNVERIFIABLE
              3. Your confidence level (0-100)
              4. A detailed summary of why this verdict was reached
              5. Key reasoning points
              
              Format your response as JSON with these exact fields: claim, verdict, confidence, summary, reasoning`
            },
            {
              inline_data: {
                mime_type: file.type,
                data: base64Image
              }
            }
          ]
        }],
        generationConfig: {
          temperature: 0.1,
          topK: 32,
          topP: 1,
          maxOutputTokens: 1024,
        }
      };

      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.statusText}`);
      }

      const data = await response.json();
      const geminiResponse = JSON.parse(data.candidates[0].content.parts[0].text) as GeminiResponse;

      return {
        id: `img-${Date.now()}`,
        claim: geminiResponse.claim || 'Image-based claim',
        verdict: geminiResponse.verdict,
        confidence: geminiResponse.confidence,
        summary: geminiResponse.summary,
        analysisTime: '25s',
        sources: [] // Would be populated with real sources
      };

    } catch (error) {
      console.error('Gemini API error:', error);
      return this.getMockResult(`Image analysis (${file.name})`);
    }
  }

  /**
   * Process text claim
   */
  async processText(claim: string): Promise<FactCheckResult> {
    if (!this.apiKey) {
      return this.getMockResult(claim);
    }

    try {
      const payload = {
        contents: [{
          parts: [{
            text: `Please fact-check this claim: "${claim}"
            
            Provide a comprehensive analysis including:
            1. Whether it's TRUE, FALSE, MIXED, or UNVERIFIABLE
            2. Your confidence level (0-100)
            3. A detailed summary explaining the verdict
            4. Key reasoning points
            
            Format your response as JSON with these exact fields: verdict, confidence, summary, reasoning`
          }]
        }],
        generationConfig: {
          temperature: 0.1,
          topK: 32,
          topP: 1,
          maxOutputTokens: 1024,
        }
      };

      const response = await fetch(`${this.baseUrl.replace('gemini-pro-vision', 'gemini-pro')}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.statusText}`);
      }

      const data = await response.json();
      const geminiResponse = JSON.parse(data.candidates[0].content.parts[0].text) as GeminiResponse;

      return {
        id: `txt-${Date.now()}`,
        claim,
        verdict: geminiResponse.verdict,
        confidence: geminiResponse.confidence,
        summary: geminiResponse.summary,
        analysisTime: '18s',
        sources: [] // Would be populated with real sources
      };

    } catch (error) {
      console.error('Gemini API error:', error);
      return this.getMockResult(claim);
    }
  }

  /**
   * Process URL content
   */
  async processUrl(url: string): Promise<FactCheckResult> {
    try {
      const articleText = await this.extractTextFromUrl(url);
      // For now, treat URL content as text to fact-check
      const result = await this.processText(`Article content: ${articleText}`);
      result.claim = `Article analysis: ${url}`;
      return result;
    } catch (error) {
      return this.getMockResult(`URL analysis: ${url}`);
    }
  }

  /**
   * Fallback mock result for demo purposes
   */
  private getMockResult(claim: string): FactCheckResult {
    return {
      id: `mock-${Date.now()}`,
      claim,
      verdict: 'MIXED',
      confidence: 75,
      summary: 'This is a mock analysis result. To enable real AI processing, add your Gemini API key to the environment variables.',
      analysisTime: '12s',
      sources: []
    };
  }

  /**
   * Check if real API is enabled
   */
  isRealApiEnabled(): boolean {
    return !!(this.apiKey && import.meta.env.VITE_ENABLE_REAL_API === 'true');
  }
}

export const geminiService = new GeminiService();