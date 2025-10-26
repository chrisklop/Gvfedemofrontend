import { Link } from 'react-router-dom';
import { Terminal, Code, CheckCircle, Clock, ArrowRight, Send, Database } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function ApiDocs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-32 text-center">
          <h1 className="mb-6">API Documentation</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Complete developer guide for integrating Constitutional AI fact-checking into your applications.
          </p>
        </div>
      </section>

      {/* API Flow Diagram */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <h2 className="mb-12 text-center">How It Works</h2>
          
          {/* Visual Flow */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 max-w-3xl mx-auto">
            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-sm border-2 border-border flex items-center justify-center bg-background">
                <Send className="h-9 w-9 text-foreground" />
              </div>
              <h4 className="mb-2" style={{ fontWeight: 600 }}>Send Request</h4>
              <p className="font-mono" style={{ fontSize: '0.75rem' }}>POST /fact-check-ultimate</p>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-sm border-2 border-border flex items-center justify-center bg-background">
                <Database className="h-9 w-9 text-foreground" />
              </div>
              <h4 className="mb-2" style={{ fontWeight: 600 }}>Processing</h4>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>25-45 seconds</p>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-sm border-2 border-primary flex items-center justify-center bg-background">
                <CheckCircle className="h-9 w-9 text-foreground" />
              </div>
              <h4 className="mb-2" style={{ fontWeight: 600 }}>Get Results</h4>
              <p className="font-mono" style={{ fontSize: '0.75rem' }}>JSON response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <h2 className="mb-12">Quick Start</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4">Base URL</h3>
              <div className="bg-muted p-4 rounded-sm font-mono text-sm">
                ******Coming Soon******
              </div>
            </div>

            <div>
              <h3 className="mb-4">Simple Example</h3>
              <p className="text-sm text-muted-foreground mb-4">Make your first fact-check request:</p>
              <div className="bg-muted p-4 rounded-sm overflow-x-auto">
                <pre className="text-sm font-mono">
{`curl -X POST "******Coming Soon******/fact-check-ultimate" \\
  -H "Content-Type: application/json" \\
  -d '{"claim": "The Earth is round"}'`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="mb-12">API Endpoints</h2>
          
          <div className="space-y-16">
            {/* Primary Endpoint */}
            <div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="px-3 py-1.5 font-semibold tracking-wide bg-primary text-primary-foreground rounded-sm" style={{ fontWeight: 600 }}>POST</span>
                <h3 className="font-mono" style={{ fontWeight: 600 }}>/fact-check-ultimate</h3>
              </div>
              <p className="mb-8" style={{ lineHeight: 1.7 }}>
                Comprehensive fact-checking with Constitutional AI analysis from a <span style={{ fontWeight: 600 }}>3M+ source database</span> (<span style={{ fontWeight: 600 }}>322+ sources</span> analyzed per query).
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="mb-4">Request Format</h4>
                  <div className="bg-muted p-4 rounded-sm overflow-x-auto">
                    <pre className="text-sm font-mono">
{`{
  "claim": "string"
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4" style={{ fontWeight: 600 }}>Parameters</h4>
                  <div className="space-y-2" style={{ lineHeight: 1.7 }}>
                    <p><code className="text-foreground bg-muted px-2 py-1 rounded font-mono" style={{ fontWeight: 600 }}>claim</code> <span className="text-muted-foreground">(required)</span>: The statement to fact-check (10-500 characters recommended)</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Response Time: <span style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>25-45 seconds</span> for comprehensive analysis</span>
                </div>

                <div>
                  <h4 className="mb-4">Example Response</h4>
                  <div className="bg-muted p-4 rounded-sm overflow-x-auto max-h-96">
                    <pre className="text-xs font-mono">
{`{
  "verdict": {
    "verdict": "false",
    "confidence": 0.96,
    "summary": "Comprehensive analysis summary...",
    "developer_comment": "Main verdict with confidence score"
  },
  "source_statistics": {
    "total_sources_found": 247,
    "sources_analyzed": 198,
    "sources_excluded": 49,
    "processing_time_ms": 52000
  },
  "sources": [
    {
      "id": "peer_reviewed_1_a1b2c3d4",
      "url": "https://pubmed.ncbi.nlm.nih.gov/12345678?ref=genuverity...",
      "title": "COVID-19 vaccine safety and efficacy study",
      "source_type": "peer_reviewed",
      "credibility_score": 0.95,
      "relevance_score": 0.92
    }
  ],
  "constitutional_analysis": {
    "overall_compliance": 0.91
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Health Check Endpoint */}
            <div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="px-3 py-1.5 font-semibold tracking-wide bg-secondary text-secondary-foreground rounded-sm" style={{ fontWeight: 600 }}>GET</span>
                <h3 className="font-mono" style={{ fontWeight: 600 }}>/health</h3>
              </div>
              <p className="mb-8" style={{ lineHeight: 1.7 }}>
                Service health and status verification.
              </p>
              <div className="bg-muted p-4 rounded-sm overflow-x-auto">
                <pre className="text-sm font-mono">
{`{
  "status": "healthy",
  "timestamp": 1702838400.123,
  "services": {
    "gemini_orchestrator": "operational",
    "constitutional_enforcer": "operational",
    "source_aggregators": "operational"
  }
}`}
                </pre>
              </div>
            </div>

            <Separator />

            {/* Info Endpoint */}
            <div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="px-3 py-1.5 font-semibold tracking-wide bg-secondary text-secondary-foreground rounded-sm" style={{ fontWeight: 600 }}>GET</span>
                <h3 className="font-mono" style={{ fontWeight: 600 }}>/</h3>
              </div>
              <p className="mb-8" style={{ lineHeight: 1.7 }}>
                API information and capabilities.
              </p>
              <div className="bg-muted p-4 rounded-sm overflow-x-auto">
                <pre className="text-sm font-mono">
{`{
  "message": "GenuVerity Constitutional AI Fact-Checking API",
  "status": "operational",
  "version": "1.0.0",
  "features": [
    "AI-Orchestrated Pipeline",
    "300+ Source Aggregation",
    "Constitutional AI Enforcement",
    "42+ Frontend Display Sections"
  ]
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="mb-12">Integration Examples</h2>

          <Tabs defaultValue="javascript" className="w-full">
            <TabsList>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="curl">cURL</TabsTrigger>
            </TabsList>
            
            <TabsContent value="javascript" className="mt-8">
              <h4 className="mb-4">JavaScript/Node.js</h4>
              <p className="text-sm text-muted-foreground mb-4">Using fetch API:</p>
              <div className="bg-muted p-4 rounded-sm overflow-x-auto">
                <pre className="text-sm font-mono">
{`async function factCheck(claim) {
  const response = await fetch(
    '******Coming Soon******/fact-check-ultimate',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ claim }),
    }
  );
  
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  
  return await response.json();
}

// Usage
factCheck("Climate change is caused by humans")
  .then(result => {
    console.log(\`Verdict: \${result.verdict.verdict}\`);
    console.log(\`Confidence: \${result.verdict.confidence}\`);
    console.log(\`Sources: \${result.sources.length}\`);
  })
  .catch(error => console.error('Error:', error));`}
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="python" className="mt-8">
              <h4 className="mb-4">Python</h4>
              <p className="text-sm text-muted-foreground mb-4">Using requests library:</p>
              <div className="bg-muted p-4 rounded-sm overflow-x-auto">
                <pre className="text-sm font-mono">
{`import requests
import json

def fact_check(claim):
    url = "******Coming Soon******/fact-check-ultimate"
    payload = {"claim": claim}
    
    response = requests.post(url, json=payload, timeout=120)
    response.raise_for_status()
    
    return response.json()

# Usage
try:
    result = fact_check("Vaccines are safe and effective")
    print(f"Verdict: {result['verdict']['verdict']}")
    print(f"Confidence: {result['verdict']['confidence']:.1%}")
    print(f"Sources analyzed: {len(result['sources'])}")
except requests.RequestException as e:
    print(f"Error: {e}")`}
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="curl" className="mt-8">
              <h4 className="mb-4">cURL</h4>
              <p className="text-sm text-muted-foreground mb-4">Command line usage:</p>
              <div className="bg-muted p-4 rounded-sm overflow-x-auto">
                <pre className="text-sm font-mono">
{`#!/bin/bash

CLAIM="$1"
RESPONSE_FILE="fact_check_$(date +%s).json"

curl -X POST \\
  "******Coming Soon******/fact-check-ultimate" \\
  -H "Content-Type: application/json" \\
  -d "{\\"claim\\": \\"$CLAIM\\"}" \\
  -o "$RESPONSE_FILE"

# Extract key information
echo "Verdict: $(jq -r '.verdict.verdict' $RESPONSE_FILE)"
echo "Confidence: $(jq -r '.verdict.confidence' $RESPONSE_FILE)"
echo "Sources: $(jq -r '.sources | length' $RESPONSE_FILE)"
echo "Full results saved to: $RESPONSE_FILE"`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Performance & Limits */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="mb-12">Performance & Limits</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="mb-8">Response Times</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Simple Claims</span>
                  <span>25-35s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Moderate Claims</span>
                  <span>30-40s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Complex Claims</span>
                  <span>35-45s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Highly Complex</span>
                  <span>40-50s</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-8">Rate Limits</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Anonymous Users</span>
                  <span>2 req/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Authenticated</span>
                  <span>20 req/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Enterprise</span>
                  <span>200+ req/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Client Timeout</span>
                  <span>120s recommended</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Handling */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="mb-12">Error Handling</h2>

          <div className="space-y-12">
            <div>
              <h3 className="mb-8">HTTP Status Codes</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-4">
                  <span className="px-2 py-1 font-mono border border-border rounded-sm w-12 text-center">200</span>
                  <span className="text-muted-foreground">Successful fact-check</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-2 py-1 font-mono border border-border rounded-sm w-12 text-center">400</span>
                  <span className="text-muted-foreground">Invalid input format</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-2 py-1 font-mono border border-border rounded-sm w-12 text-center">429</span>
                  <span className="text-muted-foreground">Rate limit exceeded</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-2 py-1 font-mono border border-border rounded-sm w-12 text-center">500</span>
                  <span className="text-muted-foreground">Processing failure</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-2 py-1 font-mono border border-border rounded-sm w-12 text-center">503</span>
                  <span className="text-muted-foreground">Service unavailable</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-8">Error Response Format</h3>
              <div className="bg-muted p-4 rounded-sm overflow-x-auto">
                <pre className="text-sm font-mono">
{`{
  "error": {
    "code": "INVALID_CLAIM",
    "message": "Claim must be between 10 and 500 characters",
    "details": {
      "provided_length": 5,
      "min_length": 10,
      "max_length": 500
    }
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="mb-12">Best Practices</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="mb-8">Good Claim Formats</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">COVID-19 vaccines reduce hospitalization rates</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">Climate change is primarily caused by human activities</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">Regular exercise improves mental health</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-8">Avoid These Formats</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 border border-border rounded-full mt-0.5 shrink-0" />
                  <div>
                    <span className="text-muted-foreground">Is this true?</span>
                    <p className="text-xs text-muted-foreground mt-1">Too vague</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 border border-border rounded-full mt-0.5 shrink-0" />
                  <div>
                    <span className="text-muted-foreground">What about X?</span>
                    <p className="text-xs text-muted-foreground mt-1">Not a claim</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 border border-border rounded-full mt-0.5 shrink-0" />
                  <div>
                    <span className="text-muted-foreground">I heard that...</span>
                    <p className="text-xs text-muted-foreground mt-1">Unclear statement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="mb-12">Future Enhancements</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground">
            <div className="space-y-3">
              <p>Authentication with API keys</p>
              <p>Webhooks for async processing</p>
              <p>Batch processing capabilities</p>
            </div>
            <div className="space-y-3">
              <p>Custom source preferences</p>
              <p>Historical API access</p>
              <p>Enhanced analytics dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="mb-6">Ready to integrate Constitutional AI fact-checking?</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Start with our simple examples above and build the future of truth verification.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link 
              to="/early-access" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Join the Beta
            </Link>
            <Link 
              to="/" 
              className="px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
            >
              Try It Now
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
