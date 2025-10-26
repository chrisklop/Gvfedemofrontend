import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Separator } from '../components/ui/separator';
import { Shield, Lock, Eye, Database, Users, FileText, Mail, CheckCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h1 className="mb-6">Privacy Policy</h1>
          <p style={{ fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-foreground)' }} className="max-w-3xl mx-auto">
            Transparency isn't just a value—it's how we operate. This policy explains exactly how we handle your data.
          </p>
          <p className="text-sm text-muted-foreground mt-6">
            Last Updated: October 26, 2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Introduction */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-justify">
              GenuVerity is a Constitutional AI-powered fact-checking service committed to transparency, verifiability, and epistemic humility. This Privacy Policy describes how we collect, use, and protect information when you use our service at genuverity.com (the "Service").
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              We believe privacy and transparency go hand in hand. We've designed our service to collect the minimum data necessary to provide accurate fact-checking while maintaining the highest standards of data protection.
            </p>
            <div className="bg-muted/50 border border-border rounded-sm p-4 md:p-6">
              <p className="text-foreground mb-3">Our Core Commitment</p>
              <p className="text-sm text-muted-foreground text-justify">
                We do not sell, rent, or trade your personal information. We do not use your queries for advertising. We exist to serve truth, not commercial interests.
              </p>
            </div>
          </div>

          <Separator />

          {/* Section 1: Information We Collect */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Database className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">1. Information We Collect</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3">1.1 Fact-Check Queries</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                  When you submit a claim for fact-checking, we collect and store:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">The claim text:</strong> The statement you submit for verification
                  </li>
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">Analysis results:</strong> Our system's verdict, sources, and Constitutional AI compliance scores
                  </li>
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">Semantic fingerprint:</strong> A cryptographic representation used for intelligent caching
                  </li>
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">Timestamp:</strong> When the analysis was performed
                  </li>
                </ul>
              </div>

              <div className="bg-muted/50 border border-border rounded-sm p-4 md:p-6">
                <div className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground mb-2">Public Knowledge Base</p>
                    <p className="text-sm text-muted-foreground text-justify">
                      Fact-check results are cached and made publicly accessible via clean URLs (e.g., /verify/vaccines-autism). This creates a Wikipedia-like knowledge base where anyone can view cached analyses. We believe verified information should be a public good.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3">1.2 Technical Information</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                  To provide and improve our service, we automatically collect:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">Usage data:</strong> Pages visited, features used, time spent on site
                  </li>
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">Device information:</strong> Browser type, operating system, screen resolution
                  </li>
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">IP address:</strong> For security, fraud prevention, and geographic analytics (not linked to individual queries)
                  </li>
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">Theme preference:</strong> Your light/dark mode choice (stored locally in your browser)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3">1.3 Early Access & API Access</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                  If you sign up for early access or API access, we collect:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">Contact information:</strong> Email address, name (optional)
                  </li>
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">Organization details:</strong> Company name, use case (optional)
                  </li>
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">API usage metrics:</strong> Number of requests, endpoints accessed, rate limit compliance
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3">1.4 Cookies and Local Storage</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  We use minimal cookies and browser storage for essential functionality:
                </p>
                <ul className="space-y-2 pl-6 mt-4">
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">Theme preference cookie:</strong> Remembers your light/dark mode choice
                  </li>
                  <li className="text-sm text-muted-foreground text-justify">
                    <strong className="text-foreground">Session identifier:</strong> For maintaining your session (if logged in to beta features)
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground text-justify mt-4">
                  We do not use third-party advertising cookies or tracking pixels.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Section 2: How We Use Your Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">2. How We Use Your Information</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3">2.1 Providing Fact-Checking Services</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  We process your queries through our 8-stage Constitutional AI pipeline to deliver accurate, verifiable fact-checks. This includes analyzing 322+ sources from our 3M+ source database, applying credibility rankings, and validating Constitutional AI compliance across five core principles.
                </p>
              </div>

              <div>
                <h3 className="mb-3">2.2 Intelligent Caching & Knowledge Building</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Queries and results are cached with semantic fingerprints to provide instant responses for similar claims. This creates a growing public knowledge base of verified information. Cached results display timestamps and offer "Refresh Analysis" options to get updated information.
                </p>
              </div>

              <div>
                <h3 className="mb-3">2.3 Service Improvement & AI Training</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                  We analyze aggregated, anonymized usage patterns to:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="text-sm text-muted-foreground text-justify">Improve our Constitutional AI algorithms</li>
                  <li className="text-sm text-muted-foreground text-justify">Expand our source database and credibility rankings</li>
                  <li className="text-sm text-muted-foreground text-justify">Enhance semantic cache accuracy</li>
                  <li className="text-sm text-muted-foreground text-justify">Identify emerging misinformation trends</li>
                  <li className="text-sm text-muted-foreground text-justify">Optimize processing speed and quality</li>
                </ul>
                <p className="text-sm text-muted-foreground text-justify mt-4">
                  Individual queries are not used to train AI models on personal preferences or behaviors. We focus on improving factual accuracy and methodology, not user profiling.
                </p>
              </div>

              <div>
                <h3 className="mb-3">2.4 Security & Fraud Prevention</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  We monitor for malicious activity, automated abuse, and API misuse to protect the integrity of our service and ensure fair access for all users.
                </p>
              </div>

              <div>
                <h3 className="mb-3">2.5 Communications</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  If you provide your email for early access or API access, we may contact you with service updates, security notices, or feature announcements. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Section 3: Data Sharing */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Users className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">3. Data Sharing and Disclosure</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary/5 border border-primary/20 rounded-sm p-4 md:p-6">
                <p className="text-foreground mb-3">Zero Commercial Data Sharing</p>
                <p className="text-sm text-muted-foreground text-justify">
                  We do not sell, rent, lease, or trade your information to third parties for marketing, advertising, or any commercial purpose. Period.
                </p>
              </div>

              <div>
                <h3 className="mb-3">3.1 Service Providers</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  We may share limited data with trusted service providers who help us operate the service, including cloud hosting, database management, and analytics platforms. These providers are contractually obligated to protect your data and use it only for providing services to us.
                </p>
              </div>

              <div>
                <h3 className="mb-3">3.2 Legal Requirements</h3>
                <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                  We may disclose information if required by law or in response to valid legal requests, such as:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="text-sm text-muted-foreground text-justify">Compliance with court orders or subpoenas</li>
                  <li className="text-sm text-muted-foreground text-justify">Protection of our legal rights or those of others</li>
                  <li className="text-sm text-muted-foreground text-justify">Prevention of fraud or security threats</li>
                  <li className="text-sm text-muted-foreground text-justify">Enforcement of our Terms of Service</li>
                </ul>
                <p className="text-sm text-muted-foreground text-justify mt-4">
                  Where legally permitted, we will notify affected users before disclosing their information in response to legal requests.
                </p>
              </div>

              <div>
                <h3 className="mb-3">3.3 Public Fact-Check Results</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  All fact-check results are publicly accessible via URL slugs. If you submit a claim, the resulting analysis may be viewed by anyone who accesses that URL. This is intentional—we believe verified information should be freely accessible as a public good.
                </p>
              </div>

              <div>
                <h3 className="mb-3">3.4 Academic Research</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  We may share aggregated, anonymized datasets with academic researchers studying misinformation, AI ethics, or media literacy. No personally identifiable information is included in such datasets.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Section 4: Data Retention */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Database className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">4. Data Retention</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3">4.1 Cached Fact-Check Results</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Fact-check results are retained indefinitely as part of our public knowledge base. This enables instant retrieval of previously analyzed claims and creates a growing repository of verified information. Users can always request a "Refresh Analysis" to get updated information.
                </p>
              </div>

              <div>
                <h3 className="mb-3">4.2 Technical and Usage Data</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Technical logs and usage analytics are retained for 90 days for security and service improvement purposes, then aggregated and anonymized.
                </p>
              </div>

              <div>
                <h3 className="mb-3">4.3 Account Information</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  If you create an account for early access or API usage, your account information is retained until you request deletion. You may delete your account at any time, though previously generated public fact-check results will remain accessible.
                </p>
              </div>

              <div>
                <h3 className="mb-3">4.4 Data Deletion Requests</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  You may request deletion of your account data by contacting us at chris@genuverity.com. We will comply within 30 days. Note that cached fact-check results are considered public knowledge and will remain accessible after deletion.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Section 5: Your Rights */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">5. Your Rights and Choices</h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-justify">
                Depending on your location, you may have the following rights:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-border rounded-sm p-4">
                  <h4 className="mb-2">Access</h4>
                  <p className="text-sm text-muted-foreground text-justify">
                    Request a copy of the personal information we hold about you.
                  </p>
                </div>
                <div className="border border-border rounded-sm p-4">
                  <h4 className="mb-2">Correction</h4>
                  <p className="text-sm text-muted-foreground text-justify">
                    Update or correct inaccurate information in your account.
                  </p>
                </div>
                <div className="border border-border rounded-sm p-4">
                  <h4 className="mb-2">Deletion</h4>
                  <p className="text-sm text-muted-foreground text-justify">
                    Request deletion of your account and associated personal data.
                  </p>
                </div>
                <div className="border border-border rounded-sm p-4">
                  <h4 className="mb-2">Portability</h4>
                  <p className="text-sm text-muted-foreground text-justify">
                    Receive your data in a structured, machine-readable format.
                  </p>
                </div>
                <div className="border border-border rounded-sm p-4">
                  <h4 className="mb-2">Opt-Out</h4>
                  <p className="text-sm text-muted-foreground text-justify">
                    Unsubscribe from marketing communications at any time.
                  </p>
                </div>
                <div className="border border-border rounded-sm p-4">
                  <h4 className="mb-2">Object</h4>
                  <p className="text-sm text-muted-foreground text-justify">
                    Object to processing of your information for certain purposes.
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-justify">
                To exercise any of these rights, contact us at chris@genuverity.com. We will respond within 30 days.
              </p>
            </div>
          </div>

          <Separator />

          {/* Section 6: Security */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Lock className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">6. Data Security</h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-justify">
                We implement industry-standard security measures to protect your information:
              </p>

              <ul className="space-y-2 pl-6">
                <li className="text-sm text-muted-foreground text-justify">
                  <strong className="text-foreground">Encryption:</strong> All data transmitted to and from our service is encrypted using TLS/SSL
                </li>
                <li className="text-sm text-muted-foreground text-justify">
                  <strong className="text-foreground">Access controls:</strong> Strict internal access policies limit who can view user data
                </li>
                <li className="text-sm text-muted-foreground text-justify">
                  <strong className="text-foreground">Security monitoring:</strong> Continuous monitoring for unauthorized access or suspicious activity
                </li>
                <li className="text-sm text-muted-foreground text-justify">
                  <strong className="text-foreground">Regular audits:</strong> Periodic security assessments and vulnerability testing
                </li>
                <li className="text-sm text-muted-foreground text-justify">
                  <strong className="text-foreground">Data minimization:</strong> We collect only what's necessary to provide our service
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-justify">
                While we implement robust security measures, no system is completely secure. If you believe your information has been compromised, contact us immediately at chris@genuverity.com.
              </p>
            </div>
          </div>

          <Separator />

          {/* Section 7: International Users */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Users className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">7. International Data Transfers</h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-justify">
                GenuVerity operates globally. If you access our service from outside the United States, your information may be transferred to, stored in, and processed in the United States and other countries where our service providers operate.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                We ensure adequate protection for international data transfers through standard contractual clauses and compliance with applicable data protection laws, including GDPR and CCPA where applicable.
              </p>
            </div>
          </div>

          <Separator />

          {/* Section 8: Children's Privacy */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">8. Children's Privacy</h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-justify">
                Our service is designed for general audiences and does not knowingly collect personal information from children under 13 years of age. If we learn that we have inadvertently collected information from a child under 13, we will delete it promptly.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Parents and guardians who believe their child has provided personal information to us should contact chris@genuverity.com.
              </p>
            </div>
          </div>

          <Separator />

          {/* Section 9: Changes to Policy */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FileText className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">9. Changes to This Privacy Policy</h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-justify">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="text-sm text-muted-foreground text-justify">Update the "Last Updated" date at the top of this policy</li>
                <li className="text-sm text-muted-foreground text-justify">Notify users via email if they have provided contact information</li>
                <li className="text-sm text-muted-foreground text-justify">Display a prominent notice on our homepage</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Continued use of the service after changes indicates acceptance of the updated policy.
              </p>
            </div>
          </div>

          <Separator />

          {/* Section 10: Contact Us */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-foreground shrink-0 mt-1" />
              <div>
                <h2 className="mb-4">10. Contact Information</h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-justify">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>

              <div className="border border-border rounded-sm p-6 bg-muted/30">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email:</p>
                    <p className="text-foreground">chris@genuverity.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">For privacy inquiries, security issues, and general support</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-justify">
                We aim to respond to all privacy-related inquiries within 30 days.
              </p>
            </div>
          </div>

          <Separator />

          {/* Final Statement */}
          <div className="bg-primary/5 border border-primary/20 rounded-sm p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div className="space-y-4">
                <h3 className="text-foreground">Our Privacy Commitment</h3>
                <p className="text-sm text-muted-foreground text-justify">
                  Privacy and transparency are core to our Constitutional AI framework. We believe you have the right to know exactly how your data is used, who has access to it, and how it's protected. This policy reflects our commitment to operating with the same epistemic humility and verifiability we demand from our fact-checking algorithms.
                </p>
                <p className="text-sm text-muted-foreground text-justify">
                  If something in this policy is unclear, or if you believe we can improve our privacy practices, please let us know. We're building this service for you, and your trust matters more than anything.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
