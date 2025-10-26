import { Link } from 'react-router-dom';
import { Search, Database, Brain, Shield, CheckCircle, Clock, ArrowRight, Star, HardDrive, RefreshCw, ChevronDown } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Separator } from '../components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-32 text-center">
          <h1 className="mb-6">How GenuVerity Works</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-foreground)' }}>
            Constitutional AI and a sophisticated 8-stage processing pipeline deliver accurate, 
            transparent fact-checking in <span style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>25-45 seconds</span> for new queries, 
            or <span style={{ fontWeight: 600 }}>instantly</span> for cached results.
          </p>
        </div>
      </section>

      {/* Integrated Processing Pipeline & Timeline */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="mb-3">Processing Pipeline</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
              8-Stage Verification Process • Instant for cached results • 25-45s for new analysis
            </p>
          </div>
          
          {/* Integrated Pipeline Visualization */}
          <div className="space-y-12">
            {/* Stage Cards with Integrated Timing and Details */}
            {[
              { 
                icon: Search, 
                name: 'Query Input', 
                time: '<1s', 
                detail: 'User submits claim for verification',
                stage: 1,
                expanded: "User submits a claim through the GenuVerity search interface. This initiates the 8-stage fact-checking pipeline, beginning with domain categorization to understand the nature and context of the claim.",
                example: "Sample query: \"Vaccines cause autism\""
              },
              { 
                icon: Brain, 
                name: 'LLM Domain Categorization', 
                time: '0-2s', 
                detail: 'Claim understanding and domain classification',
                stage: 2,
                expanded: "Advanced language model analyzes the claim to determine its domain (Medical, Political, Scientific, etc.) and complexity level. This creates a semantic fingerprint used for caching and guides optimal source selection strategies.",
                bullets: [
                  "Domain classification (Medical, Political, Scientific, etc.)",
                  "Complexity assessment (Simple to Highly Complex)",
                  "Normalized claims with standardized formatting",
                  "Priority matrix for source type weighting",
                  "Evidence requirements specification"
                ]
              },
              { 
                icon: HardDrive, 
                name: 'Semantic Cache Check', 
                time: '<1s', 
                detail: 'Check for semantically similar cached results',
                stage: 3, 
                note: 'Returns instantly if match found',
                expanded: "Using the semantic fingerprint from Stage 2, GenuVerity checks if a semantically similar query has already been analyzed. This creates a Wikipedia-like knowledge base that grows over time, providing instant results for common claims.",
                bullets: [
                  "Compares fingerprint using cosine similarity (0.85+ threshold)",
                  "Returns cached results with timestamp if match found",
                  "Displays 'Refresh Analysis' button for updated data",
                  "Instant results (<1s) instead of 25-45s for new queries"
                ]
              },
              { 
                icon: Database, 
                name: 'Source Aggregation', 
                time: '8.8s', 
                detail: 'Parallel search across 3M+ sources',
                stage: 4, 
                highlight: true,
                expanded: "Simultaneous search across our 3M+ source database using specialized aggregators. Returns 322+ candidate sources including peer-reviewed research, government sources, professional fact-checkers, and quality media.",
                bullets: [
                  "Simultaneous query execution across all source types",
                  "Quality filtering with relevance scoring",
                  "Duplicate removal and deduplication",
                  "322+ candidate sources returned for ranking"
                ],
                stats: "145 peer-reviewed • 73 government • 52 fact-checkers • 52 media"
              },
              { 
                icon: Star, 
                name: 'Source Ranking', 
                time: '3s', 
                detail: 'Quick credibility analysis and filtering',
                stage: 5,
                expanded: "Rapid credibility scoring on all 322+ candidate sources to identify and select the highest-credibility sources for in-depth LLM analysis. This two-tier approach ensures comprehensive discovery with efficient processing.",
                bullets: [
                  "Source tier weight (35%) - GenuVerified, fact-checkers, academic, etc.",
                  "Publication authority (25%) - Reputation, peer-review status, citations",
                  "Methodology quality (20%) - Sample size, study design, rigor",
                  "Relevance score (15%) - How directly source addresses claim",
                  "Recency & updates (5%) - Publication date, superseded findings"
                ],
                note: "Sources below 60/100 credibility threshold are excluded from verdict"
              },
              { 
                icon: Brain, 
                name: 'LLM Source Analysis', 
                time: '8-12s', 
                detail: 'Evidence synthesis on selected high-credibility sources',
                stage: 6, 
                highlight: true,
                expanded: "Deep analysis and cross-source validation on the selected highest-credibility sources. Builds coherent synthesis with clear conclusions, uncertainty quantification, and confidence scoring.",
                bullets: [
                  "Cross-source validation and evidence triangulation",
                  "Consensus calculation across source types",
                  "Confidence score: High (0.85-1.0), Moderate (0.65-0.84), Low (0.40-0.64)",
                  "Identifies areas of agreement and disagreement",
                  "Flags conflicting evidence and gaps in research"
                ]
              },
              { 
                icon: Shield, 
                name: 'Constitutional AI Check', 
                time: '4s', 
                detail: 'Compliance validation across 5 core principles',
                stage: 7,
                expanded: "Final compliance check ensures the fact-check meets ethical standards for truthfulness, helpfulness, and harmlessness. Must achieve 87% overall compliance across all five Constitutional AI principles.",
                bullets: [
                  "Epistemic Humility - Acknowledge limitations and uncertainties",
                  "Verifiability - All claims traceable to specific sources",
                  "Neutrality - Balanced perspectives, bias detection",
                  "Educational Value - Enhance understanding and critical thinking",
                  "Harmlessness - Protect vulnerable populations from harm"
                ],
                note: "Minimum threshold: 0.87 overall, with individual principle scores ≥ 0.85-0.90"
              },
              { 
                icon: CheckCircle, 
                name: 'Verdict', 
                time: '<1s', 
                detail: 'Final result delivered and cached for future queries',
                stage: 8, 
                final: true,
                expanded: "Final verdict is delivered to the user with full transparency, including confidence scores, source breakdowns, and Constitutional AI compliance scores. The result is cached with its semantic fingerprint for instant retrieval on similar future queries.",
                note: "Accessible via clean URL slugs (e.g., /verify/vaccines-autism)"
              },
            ].map((stage, index) => {
              const Icon = stage.icon;
              const timeValue = stage.time === '<1s' ? 0.5 : 
                               stage.time === '0-2s' ? 1 : 
                               stage.time === '8.8s' ? 8.8 :
                               stage.time === '3s' ? 3 :
                               stage.time === '8-12s' ? 10 :
                               stage.time === '4s' ? 4 : 0.2;
              const maxTime = 12;
              const widthPercent = (timeValue / maxTime) * 100;

              return (
                <div key={index} className="relative">
                  <Collapsible>
                    <div className={`border rounded-lg bg-background transition-all ${
                      stage.highlight ? 'border-primary/30 shadow-sm' : 'border-border'
                    } ${stage.final ? 'border-primary' : ''}`}>
                      <div className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                            stage.final ? 'bg-primary/10 border-2 border-primary' : 'bg-muted border-2 border-border'
                          }`}>
                            <Icon className={`h-6 w-6 ${stage.final ? 'text-primary' : 'text-foreground'}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-3 mb-1">
                              <h3 style={{ fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.3 }}>{stage.name}</h3>
                              <span className="font-mono shrink-0" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted-foreground)', fontVariantNumeric: 'tabular-nums' }}>
                                {stage.time}
                              </span>
                            </div>
                            <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', lineHeight: 1.4 }}>
                              {stage.detail}
                            </p>
                            {stage.stats && (
                              <p className="mt-2" style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--foreground)' }}>
                                {stage.stats}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Visual Time Bar */}
                        <div className="space-y-1 mb-4">
                          <div className="flex items-center justify-between" style={{ fontSize: '0.65rem', color: 'var(--muted-foreground)', fontVariantNumeric: 'tabular-nums' }}>
                            <span>Stage {stage.stage}</span>
                            <span>{timeValue}s</span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all ${
                                stage.final ? 'bg-primary' : 
                                stage.highlight ? 'bg-foreground' : 
                                'bg-muted-foreground'
                              }`}
                              style={{ width: `${widthPercent}%` }}
                            />
                          </div>
                        </div>

                        {/* Collapsible Details */}
                        {stage.expanded && (
                          <>
                            <Separator className="my-4" />
                            <CollapsibleTrigger className="flex items-center gap-2 w-full group">
                              <span style={{ fontSize: '0.75rem', fontWeight: 600 }} className="text-foreground">
                                Learn More
                              </span>
                              <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <div className="pt-4 space-y-4">
                                <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'var(--muted-foreground)' }}>
                                  {stage.expanded}
                                </p>
                                
                                {stage.example && (
                                  <p className="italic" style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
                                    {stage.example}
                                  </p>
                                )}

                                {stage.bullets && stage.bullets.length > 0 && (
                                  <div className="space-y-2">
                                    {stage.bullets.map((bullet, bIndex) => (
                                      <div key={bIndex} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
                                        <p style={{ fontSize: '0.75rem', lineHeight: 1.5, color: 'var(--muted-foreground)' }}>
                                          {bullet}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {stage.note && (
                                  <div className="pt-2 mt-2 border-t border-border">
                                    <p className="italic" style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)' }}>
                                      ℹ️ {stage.note}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </CollapsibleContent>
                          </>
                        )}
                      </div>
                    </div>
                  </Collapsible>
                  
                  {/* Arrow Connector */}
                  {index < 7 && (
                    <div className="flex justify-center my-2">
                      <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Summary Stats */}
            <div className="mt-8 p-6 border border-border rounded-lg bg-muted/30">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="font-mono mb-1" style={{ fontSize: '1.5rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{"<1s"}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>Cached Results</p>
                </div>
                <div>
                  <p className="font-mono mb-1" style={{ fontSize: '1.5rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>~27s</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>Average Analysis Time</p>
                </div>
                <div>
                  <p className="font-mono mb-1" style={{ fontSize: '1.5rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>25-45s</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>Full Range</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="mb-16 text-center">Performance & Quality Metrics</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="mb-8">Processing Performance</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Processing Time</span>
                  <span>25-45s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Query Analysis</span>
                  <span>≤ 3s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Source Aggregation</span>
                  <span>≤ 10s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Evidence Synthesis</span>
                  <span>≤ 12s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Constitutional Review</span>
                  <span>≤ 6s</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-8">Quality Assurance</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Source Success Rate</span>
                  <span>95%+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Credibility Threshold</span>
                  <span>0.70+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Link Functionality</span>
                  <span>99%+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Principle Compliance</span>
                  <span>87%+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sources Above Threshold</span>
                  <span>94%+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="mb-6">Experience Constitutional AI Fact-Checking</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            See our comprehensive methodology in action with transparent, trustworthy fact-checking results.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link 
              to="/" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Try It Now
            </Link>
            <Link 
              to="/early-access" 
              className="px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
            >
              Join the Beta
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
