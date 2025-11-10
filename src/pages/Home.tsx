import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, TrendingUp, Database, FileText, Users, BarChart3, Shield, Info } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <div className="border-b border-border bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">Fact-Check Results Layout Preview</h1>
            <p className="text-muted-foreground">This demonstrates the structure of a GenuVerity fact-check report. Use the search bar above to analyze any claim.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
          {/* Verdict Header Section */}
          <Card className="p-6 border-2 border-primary/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Verdict Header</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Displays the overall verdict (True/False/Mixed/Unverifiable) with a confidence score and visual progress bar.
                  Includes the original claim and quick metadata like analysis time and source count.
                </p>
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge className="bg-green-500 text-white">TRUE</Badge>
                  <span className="text-sm text-muted-foreground">Confidence: 87%</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">42 sources</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Executive Summary Section */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Executive Summary (TL;DR)</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  A concise summary of the fact-check findings in plain language. Includes a "Bottom Line" callout highlighting
                  the most important takeaway for quick understanding.
                </p>
                <div className="bg-muted/50 border-l-4 border-primary p-4 rounded">
                  <p className="text-sm font-medium">Bottom Line: [Key finding explained clearly]</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Quality Indicators Section */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-amber-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Quality Indicators</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Visual progress bars showing scores for Source Quality (credibility of sources), Evidence Strength (quality of supporting evidence),
                  Consensus Level (agreement among sources), and Recency (how current the information is).
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="h-2 bg-green-500 rounded-full mb-1" style={{width: '85%'}}></div>
                    <p className="text-xs text-muted-foreground">Source Quality</p>
                  </div>
                  <div className="text-center">
                    <div className="h-2 bg-blue-500 rounded-full mb-1" style={{width: '75%'}}></div>
                    <p className="text-xs text-muted-foreground">Evidence Strength</p>
                  </div>
                  <div className="text-center">
                    <div className="h-2 bg-amber-500 rounded-full mb-1" style={{width: '90%'}}></div>
                    <p className="text-xs text-muted-foreground">Consensus</p>
                  </div>
                  <div className="text-center">
                    <div className="h-2 bg-purple-500 rounded-full mb-1" style={{width: '70%'}}></div>
                    <p className="text-xs text-muted-foreground">Recency</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Source Breakdown Section */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <Database className="h-6 w-6 text-purple-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Source Breakdown</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Pie chart visualization showing the distribution of sources across tiers: Academic (peer-reviewed research),
                  Government (official agencies), Professional Fact-Checkers, Quality Media, and Social Media. Each tier is
                  weighted differently in the analysis.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Academic: 35%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Government: 25%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span>Fact-Check: 20%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>Media: 15%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                    <span>Social: 5%</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Source List Section */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-indigo-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Detailed Source List</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Complete list of all sources used, organized by tier. Each source includes: title, publication name, date,
                  credibility score, relevance score, and a direct link. Sources support or contradict the claim with
                  color-coded indicators.
                </p>
                <div className="space-y-2">
                  <div className="border border-border rounded p-3 text-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="font-medium">[Source Title]</p>
                        <p className="text-xs text-muted-foreground">[Publication] • [Date]</p>
                      </div>
                      <Badge variant="outline" className="text-xs">Score: 9.2</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* AI Model Consensus Section */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-cyan-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">AI Model Consensus</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Shows how multiple AI models independently analyzed the same evidence. Displays agreement level,
                  individual model verdicts, and vote distribution to demonstrate transparency and reduce single-model bias.
                </p>
                <div className="flex gap-2">
                  <Badge>GPT-4: TRUE</Badge>
                  <Badge>Claude: TRUE</Badge>
                  <Badge>Gemini: MIXED</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Constitutional AI Report Section */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-emerald-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Constitutional AI Compliance</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Scores for five constitutional principles: Epistemic Humility (acknowledging uncertainty), Verifiability (traceable sources),
                  Neutrality (balanced perspective), Educational Value (teaching critical thinking), and Harmlessness (protecting from harm).
                  Must achieve 87% minimum across all principles.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">92%</div>
                    <p className="text-xs text-muted-foreground">Humility</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">95%</div>
                    <p className="text-xs text-muted-foreground">Verifiable</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">88%</div>
                    <p className="text-xs text-muted-foreground">Neutral</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">90%</div>
                    <p className="text-xs text-muted-foreground">Educational</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">94%</div>
                    <p className="text-xs text-muted-foreground">Harmless</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Evidence Timeline Section */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-rose-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Evidence Timeline</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Chronological view of when key evidence emerged. Shows how the story or claim evolved over time,
                  helping users understand context and identify whether information is current or outdated.
                </p>
                <div className="border-l-2 border-border pl-4 space-y-3 text-sm">
                  <div>
                    <p className="font-medium">[Date] - [Event/Publication]</p>
                    <p className="text-xs text-muted-foreground">Brief description of what happened</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Detailed Analysis Tabs Section */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Info className="h-6 w-6 text-orange-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Detailed Analysis Tabs</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Tabbed interface providing deep dives: Methodology (how the analysis was performed),
                  Limitations (what we couldn't verify), Context (background information), and Related Claims
                  (similar fact-checks for broader understanding).
                </p>
                <div className="flex gap-2 text-sm">
                  <Badge variant="outline">Methodology</Badge>
                  <Badge variant="outline">Limitations</Badge>
                  <Badge variant="outline">Context</Badge>
                  <Badge variant="outline">Related</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Demo Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-sm text-blue-900 mb-2">
              <strong>This is a layout preview.</strong> Use the search bar above to analyze any claim and see these sections populate with real data.
            </p>
            <p className="text-xs text-blue-700">
              GenuVerity is currently in development. All searches return sample results for demonstration purposes.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
