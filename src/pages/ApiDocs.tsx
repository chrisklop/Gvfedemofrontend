import { Link } from 'react-router-dom';
import { Terminal, Code, CheckCircle, Clock, ArrowRight, Send, Database } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function ApiDocs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky Navigation */}
      <Navigation />

      <main className="flex-1">

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
                  <h4 className="mb-4">Full Example Response</h4>
                  <p className="text-sm text-muted-foreground mb-4">Complete JSON response for: <span style={{ fontWeight: 600 }}>"vaccines cause autism"</span></p>
                  <div className="bg-muted p-4 rounded-sm overflow-x-auto max-h-[600px] overflow-y-auto">
                    <pre className="text-xs font-mono whitespace-pre">
{`{
  "id": "vaccines-autism-2024",
  "claim": "vaccines cause autism",
  "verdict": {
    "verdict": "FALSE",
    "confidence": 98,
    "summary": "Extensive scientific evidence from multiple large-scale studies shows no causal link between vaccines and autism. The original 1998 study claiming this connection was fraudulent, has been retracted, and its author lost his medical license. Subsequent research involving over 1.2 million children has conclusively debunked this claim.",
    "timestamp": "2024-10-26T14:32:18Z"
  },
  "analysis_time": "32s",
  "cache_status": "cached",
  "cached_at": "2024-10-20T09:15:42Z",
  
  "source_statistics": {
    "total_sources_found": 327,
    "sources_analyzed_by_llm": 48,
    "tier_breakdown": {
      "genuverified": 12,
      "fact_check_orgs": 8,
      "academic": 156,
      "government": 89,
      "media": 52,
      "social_media": 10
    },
    "processing_time_ms": 32000
  },
  
  "quality_metrics": {
    "source_agreement": 97,
    "evidence_strength": 99,
    "temporal_consistency": 98,
    "cross_verification": 96
  },
  
  "constitutional_ai": {
    "overall_score": 94,
    "truthfulness": 96,
    "helpfulness": 92,
    "harmlessness": 95,
    "neutrality": 93,
    "verifiability": 94,
    "compliance_status": "PASS",
    "minimum_threshold": 87
  },
  
  "sources": [
    {
      "id": "src_001",
      "title": "Autism Occurrence by MMR Vaccine Status Among US Children With Older Siblings",
      "url": "https://pubmed.ncbi.nlm.nih.gov/25898051/",
      "domain": "pubmed.ncbi.nlm.nih.gov",
      "tier": "academic",
      "credibility_score": 98,
      "relevance_score": 99,
      "publication_date": "2015-04-21",
      "author": "Jain A, Marshall J, Buikema A, et al.",
      "excerpt": "Study of 95,727 children found no association between MMR vaccination and increased ASD risk, even among children with older siblings with ASD.",
      "supporting_verdict": true,
      "analysis": "Large-scale cohort study directly addressing the MMR-autism hypothesis with robust methodology"
    },
    {
      "id": "src_002",
      "title": "Measles-Mumps-Rubella Vaccination and Autism: A Nationwide Cohort Study",
      "url": "https://pubmed.ncbi.nlm.nih.gov/30831578/",
      "domain": "pubmed.ncbi.nlm.nih.gov",
      "tier": "academic",
      "credibility_score": 99,
      "relevance_score": 99,
      "publication_date": "2019-03-01",
      "author": "Hviid A, Hansen JV, Frisch M, Melbye M",
      "excerpt": "Danish cohort study of 657,461 children found no association between MMR vaccine and autism, even in subgroups at higher risk.",
      "supporting_verdict": true,
      "analysis": "One of the largest epidemiological studies on vaccines and autism"
    },
    {
      "id": "src_003",
      "title": "Retraction of Wakefield et al. Lancet Paper",
      "url": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(10)60175-4/fulltext",
      "domain": "thelancet.com",
      "tier": "academic",
      "credibility_score": 100,
      "relevance_score": 98,
      "publication_date": "2010-02-02",
      "author": "The Lancet Editors",
      "excerpt": "Full retraction of 1998 Wakefield paper due to fraudulent research, ethical violations, and false data.",
      "supporting_verdict": true,
      "analysis": "Official retraction of the original fraudulent study that started the vaccine-autism myth"
    },
    {
      "id": "src_004",
      "title": "CDC Statement on Vaccines and Autism",
      "url": "https://www.cdc.gov/vaccinesafety/concerns/autism.html",
      "domain": "cdc.gov",
      "tier": "government",
      "credibility_score": 95,
      "relevance_score": 97,
      "publication_date": "2023-08-15",
      "author": "Centers for Disease Control and Prevention",
      "excerpt": "CDC confirms vaccines do not cause autism based on comprehensive research and monitoring.",
      "supporting_verdict": true,
      "analysis": "Official US government health authority position"
    },
    {
      "id": "src_005",
      "title": "Vaccines are not associated with autism: An evidence-based meta-analysis",
      "url": "https://pubmed.ncbi.nlm.nih.gov/24814559/",
      "domain": "pubmed.ncbi.nlm.nih.gov",
      "tier": "academic",
      "credibility_score": 97,
      "relevance_score": 98,
      "publication_date": "2014-06-17",
      "author": "Taylor LE, Swerdfeger AL, Eslick GD",
      "excerpt": "Meta-analysis of 1.25 million children found no relationship between vaccination and autism.",
      "supporting_verdict": true,
      "analysis": "Comprehensive systematic review synthesizing multiple studies"
    },
    {
      "id": "src_006",
      "title": "Andrew Wakefield Struck Off Medical Register",
      "url": "https://www.bmj.com/content/340/bmj.c2803",
      "domain": "bmj.com",
      "tier": "academic",
      "credibility_score": 98,
      "relevance_score": 96,
      "publication_date": "2010-05-24",
      "author": "Dyer C",
      "excerpt": "GMC strikes Wakefield off UK medical register for fraudulent autism research and ethical violations.",
      "supporting_verdict": true,
      "analysis": "Documentation of professional consequences for fraudulent research"
    },
    {
      "id": "src_007",
      "title": "No Effect of MMR Withdrawal on Autism Incidence",
      "url": "https://pubmed.ncbi.nlm.nih.gov/15753267/",
      "domain": "pubmed.ncbi.nlm.nih.gov",
      "tier": "academic",
      "credibility_score": 96,
      "relevance_score": 95,
      "publication_date": "2005-03-01",
      "author": "Honda H, Shimizu Y, Rutter M",
      "excerpt": "Japanese study showed autism rates continued to rise even after MMR vaccine was withdrawn.",
      "supporting_verdict": true,
      "analysis": "Natural experiment demonstrating no causal relationship"
    },
    {
      "id": "src_008",
      "title": "WHO Position: Vaccines and Autism",
      "url": "https://www.who.int/news-room/feature-stories/detail/autism-spectrum-disorders",
      "domain": "who.int",
      "tier": "government",
      "credibility_score": 97,
      "relevance_score": 96,
      "publication_date": "2023-03-29",
      "author": "World Health Organization",
      "excerpt": "WHO confirms no scientific evidence linking vaccines to autism spectrum disorders.",
      "supporting_verdict": true,
      "analysis": "Global health authority consensus"
    },
    {
      "id": "src_009",
      "title": "Thimerosal and Autism: Multiple Studies Show No Link",
      "url": "https://pubmed.ncbi.nlm.nih.gov/14595043/",
      "domain": "pubmed.ncbi.nlm.nih.gov",
      "tier": "academic",
      "credibility_score": 95,
      "relevance_score": 94,
      "publication_date": "2003-11-01",
      "author": "Heron J, Golding J, ALSPAC Study Team",
      "excerpt": "Large UK cohort study found no link between thimerosal-containing vaccines and autism.",
      "supporting_verdict": true,
      "analysis": "Addresses specific vaccine ingredient concern"
    },
    {
      "id": "src_010",
      "title": "Snopes Fact Check: Vaccines and Autism Link",
      "url": "https://www.snopes.com/fact-check/bad-medicine/",
      "domain": "snopes.com",
      "tier": "fact_check_orgs",
      "credibility_score": 92,
      "relevance_score": 93,
      "publication_date": "2024-01-15",
      "author": "Snopes Editorial Team",
      "excerpt": "Rated FALSE: No credible scientific evidence supports a link between vaccines and autism.",
      "supporting_verdict": true,
      "analysis": "Professional fact-checking organization assessment"
    },
    {
      "id": "src_011",
      "title": "FactCheck.org: The Vaccine-Autism Myth",
      "url": "https://www.factcheck.org/2008/10/vaccines-and-autism/",
      "domain": "factcheck.org",
      "tier": "fact_check_orgs",
      "credibility_score": 93,
      "relevance_score": 94,
      "publication_date": "2023-09-12",
      "author": "FactCheck.org",
      "excerpt": "Comprehensive debunking of vaccine-autism claims with scientific evidence review.",
      "supporting_verdict": true,
      "analysis": "IFCN-certified fact-checking organization conclusion"
    },
    {
      "id": "src_012",
      "title": "American Academy of Pediatrics: Vaccine Safety",
      "url": "https://www.aap.org/en/patient-care/immunizations/vaccine-safety/",
      "domain": "aap.org",
      "tier": "genuverified",
      "credibility_score": 96,
      "relevance_score": 95,
      "publication_date": "2024-02-20",
      "author": "American Academy of Pediatrics",
      "excerpt": "AAP states vaccines do not cause autism based on extensive research and clinical evidence.",
      "supporting_verdict": true,
      "analysis": "Leading pediatric medical authority position"
    }
  ],
  
  "sources_excluded": [
    {
      "id": "exc_001",
      "url": "https://example-blog.com/vaccines-dangerous",
      "reason": "Low credibility score (12/100)",
      "tier": "social_media"
    },
    {
      "id": "exc_002",
      "url": "https://conspiracy-site.net/autism-coverup",
      "reason": "Violates constitutional AI harmlessness principle",
      "tier": "social_media"
    }
  ],
  
  "additional_context": {
    "related_topics": [
      "MMR vaccine safety",
      "Thimerosal in vaccines",
      "Autism spectrum disorder causes",
      "Wakefield fraud case",
      "Vaccine hesitancy"
    ],
    "key_dates": {
      "1998": "Fraudulent Wakefield study published",
      "2004": "Wakefield conflicts of interest revealed",
      "2010": "Lancet retracts paper, Wakefield struck off",
      "2011-2019": "Multiple large-scale studies confirm no link"
    },
    "scientific_consensus": "No causal link between vaccines and autism (99.8% agreement among peer-reviewed studies)"
  },
  
  "limitations": {
    "temporal_scope": "Analysis current as of cache date 2024-10-20",
    "source_language": "Primarily English-language sources",
    "regional_focus": "Emphasis on US/UK/European research",
    "note": "While comprehensive, no fact-check can analyze every source ever published"
  },
  
  "recommended_actions": [
    "Consult with pediatrician about vaccine schedule",
    "Review CDC immunization guidelines",
    "Report vaccine misinformation when encountered",
    "Share evidence-based information with concerned parents"
  ],
  
  "metadata": {
    "api_version": "1.0.0",
    "model_version": "constitutional-ai-v2.1",
    "processing_pipeline": "8-stage",
    "cache_ttl_days": 30,
    "refresh_available": true
  }
}`}
                    </pre>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    <strong>Note:</strong> Full response includes 327 sources. This example shows 12 representative sources for brevity. 
                    Production API returns complete source list with all {`{credibility_score, relevance_score, tier, analysis}`} fields.
                  </p>
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
      </main>
      
      <Footer />
    </div>
  );
}
