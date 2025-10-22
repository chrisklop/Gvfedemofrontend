import { Link } from 'react-router-dom';
import { Search, Database, Brain, Shield, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Separator } from '../components/ui/separator';
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
          <p className="text-xl text-muted-foreground leading-relaxed">
            Constitutional AI and a sophisticated 4-phase methodology deliver accurate, 
            transparent fact-checking in 25-45 seconds.
          </p>
        </div>
      </section>

      {/* Process Flow Diagram */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h2 className="mb-12 text-center">Processing Pipeline</h2>
          
          {/* Visual Flow */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-2 mb-12">
            <div className="flex-1 flex flex-col items-center">
              <div className="h-24 md:h-28 flex items-start justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-border flex items-center justify-center bg-background">
                  <Search className="h-7 w-7 md:h-9 md:w-9 text-foreground" />
                </div>
              </div>
              <div className="min-h-[40px] text-center">
                <p className="text-sm text-muted-foreground">Query Input</p>
              </div>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28">
              <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="h-24 md:h-28 flex items-start justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-border flex items-center justify-center bg-background">
                  <Brain className="h-7 w-7 md:h-9 md:w-9 text-foreground" />
                </div>
              </div>
              <div className="min-h-[40px] text-center">
                <p className="text-sm text-muted-foreground">LLM Analysis</p>
              </div>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28">
              <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="h-24 md:h-28 flex items-start justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-border flex items-center justify-center bg-background">
                  <Database className="h-7 w-7 md:h-9 md:w-9 text-foreground" />
                </div>
              </div>
              <div className="min-h-[40px] text-center">
                <p className="text-sm text-muted-foreground">Simultaneous Source Aggregation</p>
                <p className="text-xs text-muted-foreground mt-1">3M+ Sources</p>
              </div>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28">
              <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="h-24 md:h-28 flex items-start justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-border flex items-center justify-center bg-background">
                  <Brain className="h-7 w-7 md:h-9 md:w-9 text-foreground" />
                </div>
              </div>
              <div className="min-h-[40px] text-center">
                <p className="text-sm text-muted-foreground">LLM Source Analysis</p>
              </div>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28">
              <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="h-24 md:h-28 flex items-start justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-border flex items-center justify-center bg-background">
                  <Shield className="h-7 w-7 md:h-9 md:w-9 text-foreground" />
                </div>
              </div>
              <div className="min-h-[40px] text-center">
                <p className="text-sm text-muted-foreground">Constitutional AI Adherence Check</p>
              </div>
            </div>
            <div className="flex items-center justify-center h-24 md:h-28">
              <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="h-24 md:h-28 flex items-start justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary flex items-center justify-center bg-background">
                  <CheckCircle className="h-7 w-7 md:h-9 md:w-9 text-foreground" />
                </div>
              </div>
              <div className="min-h-[40px] text-center">
                <p className="text-sm text-muted-foreground">Verdict</p>
              </div>
            </div>
          </div>

          {/* Timing Chart */}
          <div className="max-w-2xl mx-auto mt-16">
            <h3 className="mb-8 text-center text-sm text-muted-foreground">Processing Time Breakdown</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart 
                data={[
                  { name: 'Query\nAnalysis', time: 2, label: '2s' },
                  { name: 'Source\nAggregation', time: 8.8, label: '8.8s' },
                  { name: 'Evidence\nSynthesis', time: 10, label: '10s' },
                  { name: 'Constitutional\nAI', time: 5, label: '5s' },
                ]}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  tickLine={false}
                  label={{ value: 'Seconds', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                />
                <Bar dataKey="time" radius={[4, 4, 0, 0]}>
                  {[0, 1, 2, 3].map((index) => (
                    <Cell key={`cell-${index}`} fill="hsl(var(--muted-foreground))" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-muted-foreground mt-4">Total: 25-45 seconds</p>
          </div>
        </div>
      </section>

      {/* Four Phases Overview */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h2 className="mb-16 text-center">The Four Phases</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Phase 1</span>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mb-2">Query Analysis</h3>
                <p className="text-sm text-muted-foreground">~2 seconds</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Domain classification, complexity assessment, and evidence requirements
              </p>
            </div>

            <div>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Phase 2</span>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mb-2">Source Aggregation</h3>
                <p className="text-sm text-muted-foreground">~8.8 seconds</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Simultaneous processing of 3M+ sources with quality filtering (sample query: 322 sources)
              </p>
            </div>

            <div>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Phase 3</span>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mb-2">Evidence Synthesis</h3>
                <p className="text-sm text-muted-foreground">~10 seconds</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Cross-source validation and consensus building (sample query)
              </p>
            </div>

            <div>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Phase 4</span>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mb-2">Constitutional AI</h3>
                <p className="text-sm text-muted-foreground">~5 seconds</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Ethical compliance and quality assurance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1: Query Analysis */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="mb-12">
            <Search className="h-6 w-6 text-foreground mb-6" />
            <h2 className="mb-4">Phase 1: Intelligent Query Analysis</h2>
            <p className="text-muted-foreground mb-4">
              Transform user input into structured analysis parameters that guide optimal 
              source selection and processing strategies.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Sample query: "Vaccines cause autism"
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="mb-6">Domain Classification</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="mb-4">Medical Claims</h4>
                  <div className="space-y-2 text-sm text-muted-foreground pl-4 border-l border-border">
                    <p>Clinical Research Priority: CRITICAL</p>
                    <p>Government Health Priority: HIGH</p>
                    <p>News Priority: MEDIUM</p>
                  </div>
                </div>
                <div>
                  <h4 className="mb-4">Political Claims</h4>
                  <div className="space-y-2 text-sm text-muted-foreground pl-4 border-l border-border">
                    <p>Government Priority: HIGH</p>
                    <p>Fact-Checker Priority: CRITICAL</p>
                    <p>News Priority: HIGH</p>
                  </div>
                </div>
                <div>
                  <h4 className="mb-4">Scientific Claims</h4>
                  <div className="space-y-2 text-sm text-muted-foreground pl-4 border-l border-border">
                    <p>Peer-Review Priority: CRITICAL</p>
                    <p>Academic Priority: HIGH</p>
                    <p>Government Priority: MEDIUM</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-6">Complexity Assessment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-2">Simple</h4>
                  <p className="text-sm text-muted-foreground">Single, verifiable facts</p>
                </div>
                <div>
                  <h4 className="mb-2">Moderate</h4>
                  <p className="text-sm text-muted-foreground">Claims requiring context</p>
                </div>
                <div>
                  <h4 className="mb-2">Complex</h4>
                  <p className="text-sm text-muted-foreground">Multi-faceted issues</p>
                </div>
                <div>
                  <h4 className="mb-2">Highly Complex</h4>
                  <p className="text-sm text-muted-foreground">Interdisciplinary analysis required</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-6">Output Deliverables</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">Normalized claims with standardized formatting</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">Priority matrix for source type weighting</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">Evidence requirements specification</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">Risk flags for potential harms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Source Aggregation */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="mb-12">
            <Database className="h-6 w-6 text-foreground mb-6" />
            <h2 className="mb-4">Phase 2: Strategic Multi-Source Aggregation</h2>
            <p className="text-muted-foreground mb-4">
              Systematically gather evidence from up to 3 million diverse sources using parallel 
              processing and intelligent filtering.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Sample query: "Vaccines cause autism" — Medical/health claim
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="mb-8">Source Architecture (Sample Query)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="mb-4">Peer-Reviewed Research</h4>
                  <p className="text-sm text-muted-foreground mb-4">145 sources including:</p>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>PubMed/MEDLINE</p>
                    <p>Google Scholar</p>
                    <p>Nature, Science, NEJM</p>
                    <p>JAMA Network, The Lancet</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4">Government Sources</h4>
                  <p className="text-sm text-muted-foreground mb-4">73 sources including:</p>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>CDC, FDA, WHO, NIH</p>
                    <p>European Medicines Agency</p>
                    <p>National Science Foundation</p>
                    <p>Congressional Research Service</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4">Professional Fact-Checkers</h4>
                  <p className="text-sm text-muted-foreground mb-4">52 IFCN-certified organizations:</p>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>Snopes (Credibility: 0.95)</p>
                    <p>FactCheck.org (0.94)</p>
                    <p>PolitiFact (0.92)</p>
                    <p>AP & Reuters Fact Check</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4">News & Media</h4>
                  <p className="text-sm text-muted-foreground mb-4">52 quality sources:</p>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>Reuters Health (0.82)</p>
                    <p>BBC Health (0.85)</p>
                    <p>NPR Health (0.83)</p>
                    <p>Associated Press (0.84)</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Source Distribution Visualization */}
            <div>
              <h3 className="mb-8 text-center">Source Distribution (Sample)</h3>
              <div className="max-w-lg mx-auto">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Peer-Reviewed - 45%', value: 145 },
                        { name: 'Government - 23%', value: 73 },
                        { name: 'Fact-Checkers - 16%', value: 52 },
                        { name: 'News & Media - 16%', value: 52 },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      <Cell fill="hsl(var(--muted-foreground))" />
                      <Cell fill="hsl(var(--foreground))" opacity={0.7} />
                      <Cell fill="hsl(var(--muted-foreground))" opacity={0.5} />
                      <Cell fill="hsl(var(--foreground))" opacity={0.4} />
                    </Pie>
                    <Legend 
                      verticalAlign="bottom" 
                      height={36}
                      iconType="circle"
                      formatter={(value) => <span className="text-xs text-muted-foreground">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Diverse source types ensure comprehensive coverage (varies by claim domain)
                </p>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-6">Parallel Processing Pipeline</h3>
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="mb-1">Simultaneous Query Execution</h4>
                    <p className="text-muted-foreground">All source types queried in parallel for maximum efficiency (~5s)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="mb-1">Quality Filtering</h4>
                    <p className="text-muted-foreground">Relevance scoring, credibility assessment, and recency evaluation (~2s)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="mb-1">Duplicate Removal</h4>
                    <p className="text-muted-foreground">URL deduplication and content similarity detection (~1.8s)</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-6">Quality Metrics (Sample Query)</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl mb-2">322</p>
                  <p className="text-sm text-muted-foreground">Sources Analyzed</p>
                </div>
                <div>
                  <p className="text-3xl mb-2">95%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div>
                  <p className="text-3xl mb-2">0.70+</p>
                  <p className="text-sm text-muted-foreground">Credibility Threshold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: Evidence Synthesis */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="mb-12">
            <Brain className="h-6 w-6 text-foreground mb-6" />
            <h2 className="mb-4">Phase 3: Evidence Synthesis & Analysis</h2>
            <p className="text-muted-foreground mb-4">
              Transform disparate sources into coherent analysis with clear conclusions 
              and appropriate uncertainty quantification.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Sample query: "Vaccines cause autism" — Results from 322 sources
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="mb-6">Cross-Source Validation (Sample Query)</h3>
              <p className="text-sm text-muted-foreground mb-8">Evidence Triangulation Process:</p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 border border-border rounded-sm">
                  <h4 className="mb-2">Peer-Review</h4>
                  <p className="text-2xl mb-1">85%</p>
                  <p className="text-sm text-muted-foreground">Agreement</p>
                </div>
                <div className="text-center p-6 border border-border rounded-sm">
                  <h4 className="mb-2">Government</h4>
                  <p className="text-2xl mb-1">92%</p>
                  <p className="text-sm text-muted-foreground">Agreement</p>
                </div>
                <div className="text-center p-6 border border-border rounded-sm">
                  <h4 className="mb-2">Fact-Checkers</h4>
                  <p className="text-2xl mb-1">89%</p>
                  <p className="text-sm text-muted-foreground">Agreement</p>
                </div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-sm">
                <h4 className="mb-2">Consensus Confidence</h4>
                <p className="text-3xl">88%</p>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-8">Confidence Score Calculation</h3>
              
              {/* Visual Confidence Scale */}
              <div className="mb-12">
                <div className="relative h-3 bg-muted rounded-full overflow-hidden mb-8">
                  <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-muted-foreground/30 to-muted-foreground/40"></div>
                  <div className="absolute inset-y-0 left-[15%] w-[25%] bg-gradient-to-r from-muted-foreground/40 to-muted-foreground/60"></div>
                  <div className="absolute inset-y-0 left-[40%] w-[25%] bg-gradient-to-r from-muted-foreground/60 to-muted-foreground/80"></div>
                  <div className="absolute inset-y-0 left-[65%] w-[35%] bg-gradient-to-r from-muted-foreground/80 to-foreground"></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground px-1">
                  <span>0.0</span>
                  <span>0.40</span>
                  <span>0.65</span>
                  <span>0.85</span>
                  <span>1.0</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4>High Confidence</h4>
                    <span className="text-sm text-muted-foreground">0.85-1.0</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>Strong consensus across source types</p>
                    <p>Multiple high-quality studies</p>
                    <p>Consistent findings over time</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4>Moderate Confidence</h4>
                    <span className="text-sm text-muted-foreground">0.65-0.84</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>Some disagreement among sources</p>
                    <p>Limited but quality evidence available</p>
                    <p>Emerging consensus forming</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4>Low Confidence</h4>
                    <span className="text-sm text-muted-foreground">0.40-0.64</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>Significant disagreement among sources</p>
                    <p>Limited or conflicting evidence</p>
                    <p>Preliminary research only</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4>Insufficient Evidence</h4>
                    <span className="text-sm text-muted-foreground">{'<'}0.40</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>Minimal relevant sources found</p>
                    <p>Poor quality evidence available</p>
                    <p>Claim too new for adequate study</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 4: Constitutional AI */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="mb-12">
            <Shield className="h-6 w-6 text-foreground mb-6" />
            <h2 className="mb-4">Phase 4: Constitutional AI Enforcement</h2>
            <p className="text-muted-foreground mb-4">
              Apply Constitutional AI principles to ensure the fact-check meets ethical 
              standards for truthfulness, helpfulness, and harmlessness.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Sample query: "Vaccines cause autism" — Final compliance check
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="mb-8">Five Core Principles</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="mb-4">Epistemic Humility</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Acknowledge limitations and uncertainties:
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>Replace absolutes with qualified statements</p>
                    <p>Add uncertainty language where appropriate</p>
                    <p>Highlight areas needing more research</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4">Verifiability</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    All claims must be traceable:
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>Source link verification</p>
                    <p>Citation accuracy checks</p>
                    <p>Attribution completeness</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4">Neutrality</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Balanced, unbiased presentation:
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>Emotional language detection</p>
                    <p>Perspective balance assessment</p>
                    <p>Ideological diversity confirmation</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4">Educational Value</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Enhance understanding:
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>Context and background information</p>
                    <p>Process explanation transparency</p>
                    <p>Connections to broader topics</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4">Harmlessness</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Protect against potential harms:
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1 pl-4 border-l border-border">
                    <p>Medical misinformation safeguards</p>
                    <p>Vulnerable population protection</p>
                    <p>Amplification prevention strategies</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-6">Quality Assurance Gates</h3>
              <p className="text-sm text-muted-foreground mb-6">Minimum Compliance Thresholds:</p>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between p-3 border border-border rounded-sm">
                  <span className="text-muted-foreground">Epistemic Humility</span>
                  <span>≥ 0.85</span>
                </div>
                <div className="flex justify-between p-3 border border-border rounded-sm">
                  <span className="text-muted-foreground">Verifiability</span>
                  <span>≥ 0.90</span>
                </div>
                <div className="flex justify-between p-3 border border-border rounded-sm">
                  <span className="text-muted-foreground">Neutrality</span>
                  <span>≥ 0.85</span>
                </div>
                <div className="flex justify-between p-3 border border-border rounded-sm">
                  <span className="text-muted-foreground">Educational Value</span>
                  <span>≥ 0.85</span>
                </div>
                <div className="flex justify-between p-3 border border-border rounded-sm">
                  <span className="text-muted-foreground">Harmlessness</span>
                  <span>≥ 0.85</span>
                </div>
                <div className="flex justify-between p-3 bg-muted/50 rounded-sm">
                  <span className="text-foreground">Overall Required</span>
                  <span>≥ 0.87</span>
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
    </div>
  );
}
