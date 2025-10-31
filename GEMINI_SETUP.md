# Gemini AI Integration Setup Guide

## Overview
This guide explains how to enable real AI-powered fact-checking using Google's Gemini API for both text claims and image analysis.

## Current Status
- ✅ **Image Upload**: Paperclip icon allows image attachment
- ✅ **URL Detection**: Automatically detects and processes URLs
- ✅ **Gemini Integration**: Service layer ready for API integration
- ⚠️ **Demo Mode**: Currently runs in mock mode (set `VITE_ENABLE_REAL_API=false`)

## Features
### 📷 **Image Processing**
- Upload images via paperclip icon
- Gemini Vision API extracts text/claims from memes, screenshots, documents
- Full fact-check analysis of image content

### 🔗 **URL Processing** 
- Paste any article URL in search box
- Extracts article content for fact-checking
- Analyzes entire articles, not just headlines

### 📝 **Text Claims**
- Direct text input for fact-checking
- Enhanced with Gemini's reasoning capabilities

## Setup Instructions

### 1. Get Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key

### 2. Configure Environment
Update `.env.local`:
```bash
# Gemini API Configuration
VITE_GEMINI_API_KEY=your_actual_api_key_here
VITE_ENABLE_REAL_API=true
```

### 3. Deploy
Deploy to Vercel as normal. The Gemini integration will work automatically.

## Usage Examples

### Image Analysis
1. Click paperclip icon in search bar
2. Upload image (JPG, PNG, GIF, WebP up to 10MB)
3. Click search - Gemini will:
   - Extract text/claims from the image
   - Fact-check the content
   - Provide detailed analysis

### URL Processing  
1. Paste article URL: `https://example.com/article`
2. Click search - System will:
   - Extract article content
   - Analyze key claims
   - Provide comprehensive fact-check

### Text Claims
1. Type claim: "The Earth is flat"
2. Click search - Gemini provides:
   - Verdict (TRUE/FALSE/MIXED/UNVERIFIABLE)
   - Confidence score
   - Detailed reasoning

## API Costs
- **Free Tier**: 60 requests per minute, 1,500 requests per day
- **Pay-as-you-go**: $0.00025 per 1K characters (text), $0.0025 per image
- **Typical costs**: ~$0.01-0.05 per fact-check

## Mock Mode vs Real API
- **Mock Mode** (`VITE_ENABLE_REAL_API=false`): Returns demo results, no API calls
- **Real API** (`VITE_ENABLE_REAL_API=true`): Uses actual Gemini for analysis

## Security Notes
- API key is only used client-side for demo purposes
- For production, implement server-side API proxy
- Never commit real API keys to version control

## Troubleshooting

### Images Not Processing
- Check file format (JPG, PNG, GIF, WebP only)
- Verify file size under 10MB
- Ensure API key is valid

### URLs Not Working
- Verify URL is publicly accessible
- Check for CORS restrictions
- Some sites may block automated access

### API Errors
- Check API key validity
- Verify quota not exceeded
- Check network connectivity