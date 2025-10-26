import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Separator } from '../components/ui/separator';
import { 
  AlertTriangle, 
  Clock, 
  Globe, 
  BookOpen, 
  TrendingUp, 
  MessageSquare,
  Lock,
  Brain,
  Database,
  Languages,
  Scale,
  Sparkles
} from 'lucide-react';

export default function KnownLimitations() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <div className="border-b border-border bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="h-8 w-8 text-primary shrink-0 mt-1" />
              <div>
                <h1 className="mb-4">Known Limitations</h1>
                <p className="text-muted-foreground leading-relaxed text-justify max-w-3xl">
                  In the spirit of Constitutional AI's <strong className="text-foreground">Epistemic Humility</strong> principle, we believe in radical transparency about what GenuVerity can and cannot do. This page documents the known challenges, limitations, and edge cases of our fact-checking system.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-background border border-border rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Last Updated:</strong> October 26, 2025 • We continuously update this page as we discover new limitations and develop solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
          
          {/* Category 1: Temporal Limitations */}
          <section className="space-y-8">
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">Temporal Limitations</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">1.1 Real-Time Event Lag</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Breaking news and real-time events may not be immediately verifiable. Our source aggregation requires time for credible sources to publish analysis, and our Constitutional AI checks prioritize accuracy over speed.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Typical Lag:</strong> 2-48 hours for breaking news<br />
                    <strong className="text-foreground">Why:</strong> Credible sources need time to investigate and publish
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">1.2 Cache Staleness</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Cached results display a timestamp and offer a "Refresh Analysis" option, but users must proactively refresh for rapidly evolving situations. A claim marked FALSE today might have new evidence tomorrow.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Mitigation:</strong> Always check the analysis timestamp and refresh for time-sensitive claims
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">1.3 Historical Context Gaps</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Claims about historical events may lack digitized sources, especially for events before the internet age or from regions with limited digital archiving.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Category 2: Content Complexity */}
          <section className="space-y-8">
            <div className="flex items-start gap-4">
              <MessageSquare className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">Content Complexity Challenges</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">2.1 Nuanced or Subjective Claims</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Claims involving subjective judgment, opinion, or cultural interpretation cannot be definitively "fact-checked." Examples include aesthetic judgments, ethical debates, or predictions about the future.
                </p>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Example:</strong> "Modern art is meaningless" → <span className="text-amber-600 dark:text-amber-400">UNVERIFIABLE</span> (subjective opinion)<br />
                    <strong className="text-foreground">Example:</strong> "AI will replace all jobs by 2030" → <span className="text-amber-600 dark:text-amber-400">UNVERIFIABLE</span> (future prediction)
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">2.2 Multi-Part or Compound Claims</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Claims with multiple sub-claims (e.g., "Vaccines are safe AND effective AND have no side effects") require breaking down into components. Our system may struggle with complex logical structures or return a MIXED verdict when parts conflict.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Best Practice:</strong> Submit single, focused claims for clearest results
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">2.3 Satirical or Sarcastic Content</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Detecting satire, parody, or sarcasm remains challenging for AI systems. Content from satirical sources (e.g., The Onion) may be analyzed literally unless context signals are strong.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">2.4 Context Dependency</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Claims may be true in one context but false in another. "Masks don't work" is false for surgical masks in medical settings but might be true for cloth masks against certain pathogens. We aim to clarify context, but ambiguous claims may receive MIXED verdicts.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Category 3: Source Limitations */}
          <section className="space-y-8">
            <div className="flex items-start gap-4">
              <Database className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">Source & Data Access Limitations</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">3.1 Paywalled and Restricted Sources</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Many high-quality academic journals, investigative reports, and specialized databases are behind paywalls. While we access abstracts and metadata, full-text analysis may be limited.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Impact:</strong> Reduced depth for claims requiring specialized academic research
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">3.2 Source Database Coverage Gaps</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Our 3M+ source database prioritizes English-language, Western, and publicly accessible sources. Non-English sources, regional publications, and specialized archives may be underrepresented.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">3.3 Emerging Science & Evolving Consensus</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Scientific consensus evolves. What's considered true today may be revised tomorrow. We prioritize current peer-reviewed consensus but acknowledge that frontier science involves legitimate debate among experts.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Example:</strong> Nutritional science recommendations change as new research emerges
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">3.4 Deleted or Altered Online Content</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Web pages can be deleted, modified, or taken offline. While we attempt to use archived versions (e.g., Wayback Machine), not all content is recoverable.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Category 4: AI Model Limitations */}
          <section className="space-y-8">
            <div className="flex items-start gap-4">
              <Brain className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">AI Model & Technical Limitations</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">4.1 LLM Hallucination Risk</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Large Language Models can occasionally generate plausible-sounding but incorrect information. Our Constitutional AI framework mitigates this through source verification and cross-validation, but no system is perfect.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Mitigation:</strong> All claims are grounded in cited sources; we never rely solely on LLM knowledge
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">4.2 Bias in Training Data</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  AI models reflect biases in their training data. Despite our Constitutional AI Neutrality principle (20% weight), systemic biases from training data, source selection, or algorithmic design may persist.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">4.3 Domain Categorization Errors</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Stage 2 (LLM Domain Categorization) may misclassify claims, leading to suboptimal source selection. Highly interdisciplinary claims are particularly challenging.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">4.4 Semantic Cache False Positives</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Stage 3's semantic similarity check might incorrectly match a new claim to a cached result if the phrasing is similar but the meaning differs. This is rare but possible.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Solution:</strong> Users can always request a fresh analysis using the "Refresh Analysis" button
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Category 5: Language & Cultural Limitations */}
          <section className="space-y-8">
            <div className="flex items-start gap-4">
              <Languages className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">Language & Cultural Limitations</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">5.1 Primary Language: English</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  GenuVerity currently optimizes for English-language claims and sources. While our LLMs have multilingual capabilities, non-English fact-checking may have reduced accuracy and fewer available sources.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">5.2 Cultural Context Interpretation</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Cultural idioms, region-specific references, and local context may be misinterpreted by an AI system trained primarily on Western sources. Claims deeply embedded in specific cultural contexts require human expertise.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">5.3 Regional Fact Variation</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Some "facts" vary by jurisdiction (e.g., legal claims, regulatory status). We attempt to clarify geographic scope, but ambiguous claims may receive incomplete analysis.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Category 6: System Design Limitations */}
          <section className="space-y-8">
            <div className="flex items-start gap-4">
              <Scale className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">System Design Trade-offs</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">6.1 Speed vs. Depth Trade-off</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Our 25-45 second processing time is a deliberate balance. Faster results would sacrifice source diversity and analysis depth; slower processing would harm user experience. Some complex claims might benefit from longer analysis.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">6.2 Source Filtering Exclusions</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Stage 5's credibility ranking selects only the highest-scoring sources for Stage 6 LLM analysis. While this ensures quality, potentially relevant mid-tier sources are excluded from detailed analysis.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Transparency:</strong> We show total sources found (322+) vs. sources analyzed in detail
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">6.3 Constitutional AI Compliance Threshold</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Our 87% minimum Constitutional AI compliance threshold means some legitimate fact-checks might be rejected for not meeting our ethical standards. This is intentional but may limit coverage of sensitive topics.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">6.4 Query Input Format</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Users must phrase claims as statements rather than questions for optimal results. "Do vaccines cause autism?" works less well than "Vaccines cause autism." We're working on improved query understanding.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Category 7: Specific Domain Challenges */}
          <section className="space-y-8">
            <div className="flex items-start gap-4">
              <BookOpen className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">Specific Domain Challenges</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">7.1 Medical & Health Claims</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Individual medical cases vary widely. While we can verify general medical consensus, specific health advice requires consultation with licensed professionals. We cannot account for individual medical histories or contraindications.
                </p>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-sm">
                    <strong className="text-foreground">Disclaimer:</strong> GenuVerity results are not medical advice. Always consult healthcare professionals.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">7.2 Legal Claims</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Legal "truth" varies by jurisdiction and evolves through court precedent. We can verify statutory facts but cannot provide legal advice or predict case outcomes.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">7.3 Financial & Investment Claims</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Past performance doesn't predict future results. While we can verify historical financial data, forward-looking investment claims are inherently speculative.
                </p>
              </div>

              <div className="border-l-4 border-primary/30 pl-6">
                <h3 className="mb-3">7.4 Rapidly Evolving Technology</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-3">
                  Claims about cutting-edge technology (AI, quantum computing, biotech) may lack sufficient peer-reviewed sources. Our analysis relies on available literature, which may lag actual development.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* What We're Doing About It */}
          <section className="space-y-8">
            <div className="flex items-start gap-4">
              <Sparkles className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">Continuous Improvement</h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-justify">
                We actively work to address these limitations through:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="mb-2 text-base">🔬 Research & Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuous testing of new models, source aggregation techniques, and Constitutional AI compliance methods
                  </p>
                </div>

                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="mb-2 text-base">📊 User Feedback</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitoring edge cases reported by users and incorporating them into training data
                  </p>
                </div>

                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="mb-2 text-base">🌍 Source Expansion</h3>
                  <p className="text-sm text-muted-foreground">
                    Growing our database to include more non-English, regional, and specialized sources
                  </p>
                </div>

                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="mb-2 text-base">🤝 Expert Partnerships</h3>
                  <p className="text-sm text-muted-foreground">
                    Collaborating with domain experts, fact-checking organizations, and academic institutions
                  </p>
                </div>

                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="mb-2 text-base">⚡ Performance Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Improving processing speed and source analysis depth without sacrificing quality
                  </p>
                </div>

                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="mb-2 text-base">📝 Transparency Reports</h3>
                  <p className="text-sm text-muted-foreground">
                    Regular updates to this page as we identify new limitations and deploy solutions
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Help Us Improve */}
          <section className="space-y-6">
            <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-6 md:p-8">
              <h2 className="mb-4">Help Us Improve</h2>
              <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                Found a limitation not listed here? Encountered an edge case or unexpected result? We want to hear from you.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify mb-6">
                Your feedback directly improves GenuVerity's accuracy, coverage, and transparency. Please report issues, edge cases, or suggestions to:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a 
                  href="mailto:chris@genuverity.com?subject=Known Limitations Feedback"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span style={{ fontWeight: 600 }}>Report a Limitation</span>
                </a>
                <p className="text-sm text-muted-foreground">
                  chris@genuverity.com
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Navigation */}
          <section className="pt-8">
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground mb-4">Learn more about GenuVerity:</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/mission" className="text-sm text-primary hover:underline">Our Mission & Values</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/how-it-works" className="text-sm text-primary hover:underline">How It Works</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/api-docs" className="text-sm text-primary hover:underline">API Documentation</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/privacy" className="text-sm text-primary hover:underline">Privacy Policy</Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
