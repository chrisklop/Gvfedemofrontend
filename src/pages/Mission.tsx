import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Globe, Target, TrendingUp, CheckCircle, Zap, BookOpen, Scale, GraduationCap, Heart, ExternalLink, AlertCircle, Lightbulb } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../components/ui/hover-card';

// Citation component with hover preview
function Citation({ number, source, date, title, url }: { number: number; source: string; date?: string; title?: string; url: string }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <sup className="ml-0.5">
          <a 
            href={`#ref-${number}`}
            className="text-primary hover:underline cursor-pointer text-xs"
          >
            [{number}]
          </a>
        </sup>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 text-sm">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">{source}{date && `, ${date}`}</p>
          {title && <p className="line-clamp-2">{title}</p>}
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline flex items-center gap-1"
          >
            View source <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

// References data
const references = [
  { number: 1, source: "Gallup", date: "October 2, 2025", title: "Trust in Media at New Low of 28% in U.S.", url: "https://news.gallup.com/poll/695762/trust-media-new-low.aspx" },
  { number: 2, source: "Axios", date: "October 15, 2024", title: "Media trust hits another historic low", url: "https://www.axios.com/2024/10/15/media-trust-gallup-survey" },
  { number: 3, source: "World Economic Forum", date: "July 21, 2025", title: "Media and information literacy in the disinformation age", url: "https://www.weforum.org/stories/2025/07/disinformation-media-and-information-literacy/" },
  { number: 4, source: "North Carolina Cooperative Extension", date: "March 2025", title: "Digital Literacy for the Age of Deepfakes: Recognizing Misinformation in AI-Generated Media", url: "https://bertie.ces.ncsu.edu/2025/03/digital-literacy-for-the-age-of-deepfakes-recognizing-misinformation-in-ai-generated-media/" },
  { number: 5, source: "Monmouth University LibGuides", title: "Media Literacy & Misinformation", url: "https://guides.monmouth.edu/media_literacy" },
  { number: 6, source: "Post University", date: "February 5, 2021", title: "Media Literacy in The Age of Misinformation and Disinformation", url: "https://post.edu/blog/media-literacy-in-the-age-of-misinformation/" },
  { number: 7, source: "SAGE Journals", date: "2025", title: "Artificial Intelligence and Political Deepfakes: Shaping Citizen Perceptions Through Misinformation", url: "https://journals.sagepub.com/doi/10.1177/09732586241277335" },
  { number: 8, source: "ISC2", date: "February 20, 2025", title: "Cybersecurity and the Deepfake, Disinformation and Misinformation Challenge", url: "https://www.isc2.org/Insights/2025/02/Deepfakes-Disinformation-Misinformation" },
  { number: 9, source: "Johns Hopkins Center for Health Equity", date: "February 12, 2025", title: "Restoring Trust in Our Institutions and Each Other", url: "https://publichealth.jhu.edu/center-for-health-equity/2025/restoring-trust-in-our-institutions-and-each-other" },
  { number: 10, source: "Roosevelt Institute", date: "October 2025", title: "Americans' Trust in Media Hit a Record Low This Week. Only Public Media Can Restore It", url: "https://rooseveltinstitute.org/blog/trust-in-media-hits-record-low/" },
  { number: 11, source: "Boston University College of Communication", date: "January 24, 2024", title: "Media literacy skills important to counter disinformation, survey says", url: "https://www.bu.edu/com/articles/media-literacy-skills-important-to-counter-disinformation-survey-says/" },
  { number: 12, source: "PNAS", date: "June 22, 2020", title: "A digital media literacy intervention increases discernment between mainstream and false news in the United States and India", url: "https://www.pnas.org/doi/10.1073/pnas.1920498117" },
  { number: 13, source: "World Economic Forum", date: "July 21, 2025", title: "Media and information literacy in the disinformation age", url: "https://www.weforum.org/stories/2025/07/disinformation-media-and-information-literacy/" },
  { number: 14, source: "Boston University College of Communication", date: "January 24, 2024", title: "Media literacy skills important to counter disinformation, survey says", url: "https://www.bu.edu/com/articles/media-literacy-skills-important-to-counter-disinformation-survey-says/" },
  { number: 15, source: "EDMO", title: "The Importance of Media Literacy In Countering Disinformation", url: "https://edmo.eu/areas-of-activities/media-literacy/the-importance-of-media-literacy-in-countering-disinformation/" },
  { number: 16, source: "World Economic Forum", date: "July 21, 2025", title: "Media and information literacy in the disinformation age", url: "https://www.weforum.org/stories/2025/07/disinformation-media-and-information-literacy/" },
  { number: 17, source: "Post University", date: "February 5, 2021", title: "Media Literacy in The Age of Misinformation and Disinformation", url: "https://post.edu/blog/media-literacy-in-the-age-of-misinformation/" },
  { number: 18, source: "Axios", date: "October 2, 2025", title: "Media trust hits new low across the political spectrum", url: "https://www.axios.com/2025/10/02/media-trust-new-low" },
  { number: 19, source: "EDMO", title: "The Importance of Media Literacy In Countering Disinformation", url: "https://edmo.eu/areas-of-activities/media-literacy/the-importance-of-media-literacy-in-countering-disinformation/" },
  { number: 20, source: "New York State Bar Association", date: "April 14, 2025", title: "Judging the Credibility of What You Read", url: "https://nysba.org/why-media-literacy-education-is-crucial-for-u-s-students/" },
  { number: 21, source: "World Economic Forum", date: "July 21, 2025", title: "Media and information literacy in the disinformation age", url: "https://www.weforum.org/stories/2025/07/disinformation-media-and-information-literacy/" },
];

export default function Mission() {
  const [activeTab, setActiveTab] = useState("why");

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-32 text-center">
          <h1 className="mb-6">Our Mission</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.7, color: 'var(--muted-foreground)' }} className="max-w-3xl mx-auto">
            Empowering truth in an age of information chaos through Constitutional AI-powered fact-checking
          </p>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 gap-1 p-1">
              <TabsTrigger value="why" className="px-1 text-xs md:px-2 md:text-sm">Why We Exist</TabsTrigger>
              <TabsTrigger value="values" className="px-1 text-xs md:px-2 md:text-sm">Our Values</TabsTrigger>
              <TabsTrigger value="commitments" className="px-1 text-xs md:px-2 md:text-sm">Our Commitments</TabsTrigger>
            </TabsList>

            {/* TAB 1: WHY WE EXIST */}
            <TabsContent value="why" className="space-y-16 mt-0">
              {/* Manifesto Header */}
              <div className="text-center max-w-3xl mx-auto">
                <p className="mb-4" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>A Founder's Manifesto</p>
                <h2 className="mb-6" style={{ fontWeight: 300, fontSize: '1.875rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>We live in the most connected era in human history, and the most confused.</h2>
              </div>

              {/* The Crisis */}
              <div className="space-y-8">
                <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                  Every day, billions of people carry the sum of human knowledge in their pockets. We can access any fact, any perspective, any story within seconds. And yet, trust in media has plummeted to just <span style={{ fontWeight: 700, color: 'var(--foreground)', fontVariantNumeric: 'tabular-nums' }}>28%</span> in the United States, the lowest in 50 years.<Citation {...references[0]} /> Media is now the least-trusted civic and political institution, ranking below Congress, the Supreme Court, and the executive branch.<Citation {...references[1]} />
                </p>
                
                <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                  This isn't just a crisis of institutions. <strong style={{ color: 'var(--foreground)', fontWeight: 600 }}>It's a crisis of truth itself.</strong>
                </p>
              </div>

              <Separator />

              {/* The Problem We Face */}
              <div className="space-y-8">
                <h3>The Problem We Face</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  The information landscape has fundamentally transformed. Disinformation has become more complex than ever, amplified by technologies like generative AI, with viral falsehoods, deepfakes, and emotionally manipulative content designed to mislead or divide becoming increasingly common.<Citation {...references[2]} /> According to a 2023 survey, only 42% of Americans can recognize a deepfake image when they see it.<Citation {...references[3]} /> Katy Perry's own mother was fooled by an AI-generated photo of her daughter at the Met Gala.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We exist in a "post-truth" world where the lines blur between entertainment, information, and persuasion.<Citation {...references[4]} /> Social media algorithms curate our reality based on what keeps us engaged, not what keeps us informed. We are both consumers and producers in our media experiences, yet most of us lack the tools to critically evaluate what we encounter.<Citation {...references[5]} />
                </p>

                <div className="bg-muted/50 border border-border rounded-sm p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-foreground mt-0.5 shrink-0" />
                    <div className="space-y-3 text-sm">
                      <p className="text-foreground">The stakes are enormous:</p>
                      <p className="text-muted-foreground">
                        Deepfakes increasingly threaten democratic practices by impacting and undermining electoral processes, with malicious individuals able to influence public opinions and votes by generating fake audio or video files.<Citation {...references[6]} />
                      </p>
                      <p className="text-muted-foreground">
                        Beyond politics, 25.9% of executives reported their companies experienced at least one deepfake attack, with projections suggesting AI could enable as much as $40 billion in fraud in the U.S. alone by 2027.<Citation {...references[7]} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* The Human Cost */}
              <div className="space-y-8">
                <h3>The Human Cost</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  But statistics don't capture the human toll. Trust is eroding everywhere. Between neighbors, between communities, between citizens and the institutions meant to serve them. Interpersonal trust in the US declined from 46.3% in 1972 to 31.9% in 2018, while trust in government plummeted from 77% in 1964 to 20% in 2022.<Citation {...references[8]} />
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border border-border rounded-sm">
                    <p className="text-3xl mb-2">28%</p>
                    <p className="text-sm text-muted-foreground">Trust in media (2025)</p>
                  </div>
                  <div className="text-center p-6 border border-border rounded-sm">
                    <p className="text-3xl mb-2">20%</p>
                    <p className="text-sm text-muted-foreground">Trust in government (2022)</p>
                  </div>
                  <div className="text-center p-6 border border-border rounded-sm">
                    <p className="text-3xl mb-2">42%</p>
                    <p className="text-sm text-muted-foreground">Can recognize deepfakes</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  When we can't agree on basic facts, we can't have productive conversations. When we can't distinguish truth from fiction, democracy itself becomes fragile. When we lose trust in everything, we become vulnerable to manipulation by anyone.
                </p>
              </div>

              <Separator />

              {/* The Fact-Checking Maze */}
              <div className="space-y-8">
                <h3>The Fact-Checking Maze</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Here's what trying to find the truth looks like today:
                </p>

                <div className="space-y-4 pl-6 border-l-2 border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    You see a claim online. It seems important, maybe alarming. So you do what you're supposed to do: you try to verify it.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You open Google. You type in the claim. You get thousands of results. The first page shows you three articles that confirm the claim, two that debunk it, and one that says "it's complicated." Which do you trust?
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You click on the first article. It's from a website you've never heard of. The design looks professional. The writing sounds authoritative. But who runs this site? Who funds it? You have no idea.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    So you try another source. This one you recognize, but you've heard people say it's biased. Are they right? How biased? Biased compared to what?
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Maybe you try an AI chatbot instead. You ask it directly. It gives you a confident answer with a handful of links. But when you check those links, one is dead, another doesn't quite say what the AI claimed it said, and a third is from 2019. Is the answer still right? You're not sure.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  You see someone in the comments say "do your own research." So you are. But how do you research the researchers? How do you fact-check the fact-checkers? A greater proportion of Americans believe that news organizations are more influenced by corporate or financial interests than government or political interests.<Citation {...references[9]} /> So who can you trust?
                </p>

                <div className="bg-muted/50 border border-border rounded-sm p-6">
                  <p className="text-foreground mb-3">This is the daily reality for people trying to be informed citizens.</p>
                  <p className="text-sm text-muted-foreground">
                    The tools exist to find truth, but the process is exhausting, confusing, and often leads nowhere. Only 42% of Americans report knowing how to access quality media literacy training online.<Citation {...references[10]} /> We're told to be critical thinkers, but we're not given a reliable method for doing it.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Our Solution */}
              <div className="space-y-8">
                <h3>Our Solution: Constitutional AI</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  We built something different. Something that does the exhausting work for you, but does it right.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When you submit a claim to our system, here's what happens in about 25-45 seconds:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center shrink-0 mt-1">
                      <span className="text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="mb-2">LLM Analysis</h4>
                      <p className="text-sm text-muted-foreground">
                        Not just keyword matching. Real understanding. What domain is this? Medical? Political? Scientific? How controversial is it? What kind of evidence will actually settle this question?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center shrink-0 mt-1">
                      <span className="text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="mb-2">Simultaneous Source Aggregation (3M+ Sources)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Five specialized aggregators run at the same time, each with a specific mission:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-2 pl-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                          <span>Academic sources scanning peer-reviewed research on PubMed, arXiv, and institutional repositories</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                          <span>Government sources checking CDC, FDA, NIH, EPA, WHO, and official health guidelines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                          <span>Professional fact-checkers at PolitiFact, Snopes, Reuters Fact Check, FactCheck.org, and AP Fact Check</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                          <span>Quality journalism from Reuters, AP, BBC, NPR, and other outlets with strong editorial standards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                          <span>Social media from verified accounts and authoritative channels (weighted carefully, because context matters)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center shrink-0 mt-1">
                      <span className="text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="mb-2">Source Ranking</h4>
                      <p className="text-sm text-muted-foreground">
                        Each source gets a credibility score based on tier ranking, publication authority, methodology quality, and relevance. We prioritize which sources will inform the verdict.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center shrink-0 mt-1">
                      <span className="text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="mb-2">LLM Source Analysis</h4>
                      <p className="text-sm text-muted-foreground">
                        Using the highest-ranked sources, we synthesize evidence through cross-source validation and build consensus with advanced AI analysis.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center shrink-0 mt-1">
                      <span className="text-sm">5</span>
                    </div>
                    <div>
                      <h4 className="mb-2">Constitutional AI Adherence Check</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Before we give you an answer, we run it through Constitutional AI enforcement. Five principles that every response must satisfy:
                      </p>
                      
                      <div className="space-y-4 mt-4">
                        <div className="bg-background border border-border rounded-sm p-4">
                          <div className="flex items-start gap-3 mb-2">
                            <BookOpen className="h-5 w-5 text-foreground shrink-0" />
                            <div>
                              <h4 className="mb-1">Epistemic Humility (20%)</h4>
                              <p className="text-xs text-muted-foreground">We acknowledge what we don't know. If the evidence is unclear, we say so. No false confidence.</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-background border border-border rounded-sm p-4">
                          <div className="flex items-start gap-3 mb-2">
                            <CheckCircle className="h-5 w-5 text-foreground shrink-0" />
                            <div>
                              <h4 className="mb-1">Verifiability (25%)</h4>
                              <p className="text-xs text-muted-foreground">Every single claim we make links back to a specific, traceable source. You can verify our work.</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-background border border-border rounded-sm p-4">
                          <div className="flex items-start gap-3 mb-2">
                            <Scale className="h-5 w-5 text-foreground shrink-0" />
                            <div>
                              <h4 className="mb-1">Neutrality (20%)</h4>
                              <p className="text-xs text-muted-foreground">We analyze our own language for bias. We present multiple perspectives. Evidence speaks, not preferences.</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-background border border-border rounded-sm p-4">
                          <div className="flex items-start gap-3 mb-2">
                            <GraduationCap className="h-5 w-5 text-foreground shrink-0" />
                            <div>
                              <h4 className="mb-1">Educational Value (15%)</h4>
                              <p className="text-xs text-muted-foreground">We explain the context and help you understand how to evaluate similar claims in the future.</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-background border border-border rounded-sm p-4">
                          <div className="flex items-start gap-3 mb-2">
                            <Heart className="h-5 w-5 text-foreground shrink-0" />
                            <div>
                              <h4 className="mb-1">Harmlessness (20%)</h4>
                              <p className="text-xs text-muted-foreground">We protect vulnerable populations and don't amplify content that could cause real-world harm.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mt-4">
                        Each principle is scored. If our AI-generated response doesn't meet these standards, it gets revised automatically until it does.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary border border-primary flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="mb-2">Verdict</h4>
                      <p className="text-sm text-muted-foreground">
                        A clear verdict (true, false, mixed, or unverified). A confidence score based on actual quality and consensus. A summary you can understand. And the sources themselves, ranked by credibility, so you can verify our work.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 border border-border rounded-sm p-6">
                  <p className="text-foreground mb-3">The whole process takes less time than you'd spend scrolling through unreliable search results.</p>
                  <p className="text-sm text-muted-foreground">
                    And unlike that exhausting Google spiral, you end up more informed, not more confused.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Why This Approach Works */}
              <div className="space-y-8">
                <h3>Why This Approach Works</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Research shows that even simple, scalable media literacy interventions can decrease the perceived accuracy of false news content and help people better distinguish it from factual mainstream news, with these improvements not depending on whether claims align with people's political predispositions.<Citation {...references[11]} />
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our system is that intervention, scaled and automated. But we don't stop there.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Media and information literacy equips individuals with the tools to access, analyze, evaluate and create information responsibly, empowering them to navigate a digital ecosystem shaped by algorithmic curation and commercial incentives.<Citation {...references[12]} /> Our constitutional AI approach does this by showing you our work. Every source. Every reasoning step. Every uncertainty.
                </p>

                <div className="bg-muted/50 border border-border rounded-sm p-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-foreground mt-0.5 shrink-0" />
                    <div className="space-y-3">
                      <p className="text-foreground">It's not about replacing your judgment. It's about giving you a reliable foundation to build your judgment on.</p>
                      <p className="text-sm text-muted-foreground">
                        61% of Americans agree that media literacy education teaches people how to think more critically, not what to think.<Citation {...references[13]} /> That's exactly what we're doing.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  The demand is there. Just 9% of Europeans have participated in training about how to distinguish between true and false information online, though 58% are interested in doing so.<Citation {...references[14]} /> People want these skills. They want reliable tools. They're tired of feeling manipulated and confused.
                </p>
              </div>

              <Separator />

              {/* Final Vision */}
              <div className="space-y-8">
                <h3>What Comes Next</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  A whole-of-society approach is needed, one that integrates media and information literacy into education systems, workplace training, public service messaging and digital platform design.<Citation {...references[20]} /> This work is bigger than any one organization, any one approach, any one solution.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  But it starts with a simple commitment: to help people see clearly in a world designed to keep them confused.
                </p>

                <div className="border-l-4 border-primary pl-6 py-4">
                  <p className="text-lg mb-4">We built the system. We proved it works. Now we're opening it up.</p>
                  <p className="text-muted-foreground">
                    Truth matters. Critical thinking matters. You matter.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  In a world where lies travel at the speed of light, we're not asking you to slow down. We're building the infrastructure that lets you move fast and stay accurate. Constitutional AI that checks itself. Sources that trace back to reality. Answers you can actually trust.
                </p>

                <div className="text-center py-8">
                  <p className="text-xl mb-2">This is why we exist.</p>
                  <p className="text-muted-foreground">Because the alternative is unacceptable.</p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-8 border-t border-border">
                <p className="text-lg text-muted-foreground mb-8">Ready to see how it works?</p>
                <Link 
                  to="/" 
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors inline-block"
                >
                  Try It Yourself
                </Link>
              </div>
            </TabsContent>

            {/* TAB 2: OUR VALUES */}
            <TabsContent value="values" className="space-y-16 mt-0">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="mb-6">What We Stand For</h2>
                <p className="text-muted-foreground">
                  Our values aren't aspirations. They're requirements enforced by our Constitutional AI framework.
                </p>
              </div>

              {/* Core Values Grid */}
              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <div className="mb-6">
                    <Shield className="h-6 w-6 text-foreground mb-4" />
                    <h3 className="mb-3">Truth Without Agenda</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    We are committed to providing fact-checking that serves truth, not ideology. 
                    Our Constitutional AI framework ensures every analysis is unbiased, transparent, 
                    and accountable.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Free from political or commercial influence</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Complete methodology disclosure</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Verifiable and credible evidence</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <Users className="h-6 w-6 text-foreground mb-4" />
                    <h3 className="mb-3">Accessibility for All</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Information verification should not be a privilege reserved for institutions 
                    with vast resources. We provide professional-grade analysis accessible to everyone.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">3M+ sources available</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Research-grade rigor</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Clear, understandable communication</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <Globe className="h-6 w-6 text-foreground mb-4" />
                    <h3 className="mb-3">Constitutional Principles</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Our AI system is built on five fundamental principles that guide every 
                    fact-check we produce.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Epistemic Humility</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Verifiability</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Neutrality</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Educational Value</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Harmlessness</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Constitutional AI Principles Diagram */}
              <div>
                <h2 className="mb-12 text-center">Five Constitutional AI Principles</h2>
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                  Every fact-check passes through these five ethical filters to ensure truthful, 
                  helpful, and harmless analysis.
                </p>
                
                {/* Principle Pentagon */}
                <div className="grid md:grid-cols-5 gap-6 mb-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full border-2 border-border bg-background flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-foreground" />
                    </div>
                    <h4 className="mb-2">Epistemic Humility</h4>
                    <p className="text-xs text-muted-foreground">Acknowledge uncertainty</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full border-2 border-border bg-background flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-foreground" />
                    </div>
                    <h4 className="mb-2">Verifiability</h4>
                    <p className="text-xs text-muted-foreground">Traceable sources</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full border-2 border-border bg-background flex items-center justify-center mb-4">
                      <Scale className="h-8 w-8 text-foreground" />
                    </div>
                    <h4 className="mb-2">Neutrality</h4>
                    <p className="text-xs text-muted-foreground">Balanced perspectives</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full border-2 border-border bg-background flex items-center justify-center mb-4">
                      <GraduationCap className="h-8 w-8 text-foreground" />
                    </div>
                    <h4 className="mb-2">Educational Value</h4>
                    <p className="text-xs text-muted-foreground">Enhance understanding</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full border-2 border-border bg-background flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-foreground" />
                    </div>
                    <h4 className="mb-2">Harmlessness</h4>
                    <p className="text-xs text-muted-foreground">Protect from harm</p>
                  </div>
                </div>

                {/* Compliance Threshold */}
                <div className="border border-border rounded-sm p-6 md:p-8 text-center">
                  <p className="text-sm text-muted-foreground mb-4">Minimum Compliance Threshold</p>
                  <p className="text-4xl mb-2">87%</p>
                  <p className="text-xs text-muted-foreground">
                    Every fact-check must achieve at least 87% compliance across all five principles
                  </p>
                </div>
              </div>

              <Separator />

              {/* What We Stand Against */}
              <div className="space-y-8">
                <h3>What We Stand Against</h3>
                <p className="text-muted-foreground mb-8">
                  Trust in media has fallen among Democrats by 19 percentage points in recent years and by 6 points among Republicans.<Citation {...references[17]} /> Our constitutional AI principles don't care about your politics. Neutrality is measured and enforced.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-border rounded-sm p-6">
                    <h4 className="mb-3">Manipulation</h4>
                    <p className="text-sm text-muted-foreground">
                      We will never manipulate, simplify beyond honesty, or let ideology trump evidence. Our constitutional AI enforces this automatically.
                    </p>
                  </div>
                  <div className="border border-border rounded-sm p-6">
                    <h4 className="mb-3">False Certainty</h4>
                    <p className="text-sm text-muted-foreground">
                      We acknowledge limitations and uncertainties. If experts disagree, we tell you. No pretending uncertainty doesn't exist.
                    </p>
                  </div>
                  <div className="border border-border rounded-sm p-6">
                    <h4 className="mb-3">Hidden Influence</h4>
                    <p className="text-sm text-muted-foreground">
                      Free from political or commercial pressure. We resist any attempts to shape our fact-checking for external agendas.
                    </p>
                  </div>
                  <div className="border border-border rounded-sm p-6">
                    <h4 className="mb-3">Opacity</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete transparency in sources, methodology, and reasoning. You can verify everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* TAB 3: OUR COMMITMENTS */}
            <TabsContent value="commitments" className="space-y-16 mt-0">
              {/* Letter from Chris */}
              <div className="max-w-2xl mx-auto">
                <div className="border-l-4 border-primary/30 pl-6 md:pl-8 py-6">
                  <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    I built GenuVerity because I believe we deserve better than the information chaos we're living through. Not as a business opportunity, but as a necessity. The erosion of shared truth isn't just a political problem or a media problem. It's an existential threat to everything we care about.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    Every line of code, every Constitutional AI principle, every design decision reflects a simple belief: that truth matters, that people are capable of critical thinking when given the right tools, and that technology can be a force for clarity instead of confusion.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    This isn't perfect. It never will be. But it's honest, it's transparent, and it's built on the radical idea that we owe people the truth even when it's complicated, even when it's uncomfortable, and especially when it challenges what we want to believe.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8">
                    If you believe that truth still matters, I hope you'll join us in building something that actually serves it.
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <p className="text-foreground" style={{ fontWeight: 500 }}>Chris Klopfenstein</p>
                    <p className="text-sm text-muted-foreground">Founder, GenuVerity</p>
                    <p className="text-sm text-muted-foreground">October 2025</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="mb-6">Our Commitments</h2>
                <p className="text-muted-foreground">
                  These aren't aspirations. They're binding promises that guide every decision we make.
                </p>
              </div>

              {/* Commitment 1 */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-3">Transparency in Everything</h3>
                    <p className="text-muted-foreground mb-4">
                      Our system isn't a black box. We show you every source, every score, every decision point. If you disagree with our verdict, you can see exactly where we got it and challenge our reasoning with the same evidence we used.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">Complete source lists for every fact-check</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">Full methodology disclosure</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">Credibility scores explained</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">Constitutional AI compliance metrics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Commitment 2 */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                    <TrendingUp className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-3">Continuous Adaptation</h3>
                    <p className="text-muted-foreground mb-4">
                      As generative AI and other technologies blur the lines between fact and fiction, the need for robust media and information literacy has never been greater.<Citation {...references[15]} /> We update our methods as manipulation techniques evolve.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">Regular algorithm improvements</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">New source integration</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">Deepfake detection updates</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">Constitutional principles refinement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Commitment 3 */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-3">Empowerment, Not Dependency</h3>
                    <p className="text-muted-foreground mb-4">
                      The media literacy movement has evolved from a protectionist stance to an empowerment perspective, viewing consumers as active agents and creative producers in the mass media process.<Citation {...references[16]} /> Our tool does the heavy lifting, but it teaches you the process.
                    </p>
                    <div className="bg-muted/50 border border-border rounded-sm p-6">
                      <p className="text-sm text-muted-foreground">
                        Media literacy education is not just an academic subject but a life skill essential for thriving in today's digital age.<Citation {...references[19]} /> Over time, you become better at evaluation even without us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Commitment 4 */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                    <Globe className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-3">Service Across All Divides</h3>
                    <p className="text-muted-foreground mb-4">
                      This works for everyone because it's designed to serve truth, not tribe. Our constitutional AI principles are measured and enforced automatically—no human bias can interfere.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center p-4 border border-border rounded-sm">
                        <p className="text-2xl mb-2">87%</p>
                        <p className="text-xs text-muted-foreground">Neutrality threshold</p>
                      </div>
                      <div className="text-center p-4 border border-border rounded-sm">
                        <p className="text-2xl mb-2">100%</p>
                        <p className="text-xs text-muted-foreground">Fact-checks reviewed</p>
                      </div>
                      <div className="text-center p-4 border border-border rounded-sm">
                        <p className="text-2xl mb-2">0</p>
                        <p className="text-xs text-muted-foreground">Political affiliation</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We bridge divides rather than deepen them. Every community deserves access to reliable information.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Commitment 5 */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                    <Target className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-3">Systemic, Sustained Change</h3>
                    <p className="text-muted-foreground mb-4">
                      What is needed is long-term planning and funding, with a timeline of a decade or more, rather than short-term thinking focused on solving particular problems.<Citation {...references[18]} /> We're building infrastructure for truth.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-6 py-3">
                        <p className="text-sm">This isn't a product that gets abandoned in two years.</p>
                        <p className="text-sm text-muted-foreground mt-2">It's a commitment for as long as misinformation exists.</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        We're committed to continuous investment in research, infrastructure, and community education. This is a multi-generational challenge that requires multi-generational solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Vision Forward */}
              <div className="bg-muted/30 border border-border rounded-sm p-8 md:p-12">
                <h3 className="mb-6 text-center">What We're Building Toward</h3>
                <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                  Picture what's possible. People approaching information with healthy skepticism but not cynicism. Citizens engaging in productive dialogue because they share a common foundation of verifiable facts. Democracies strengthened because their citizens can't be easily manipulated. Trust rebuilt because it's earned through transparency and actual truth.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-foreground mx-auto mb-3" />
                    <h4 className="mb-2">For Individuals</h4>
                    <p className="text-sm text-muted-foreground">Confident decision-making with reliable information</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-8 w-8 text-foreground mx-auto mb-3" />
                    <h4 className="mb-2">For Organizations</h4>
                    <p className="text-sm text-muted-foreground">Newsroom excellence with rapid verification</p>
                  </div>
                  <div className="text-center">
                    <Globe className="h-8 w-8 text-foreground mx-auto mb-3" />
                    <h4 className="mb-2">For Society</h4>
                    <p className="text-sm text-muted-foreground">Shared foundation of factual understanding</p>
                  </div>
                </div>
              </div>

              {/* Final Statement */}
              <div className="text-center pt-8">
                <h3 className="mb-4">This world is possible.</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  The technology exists right now. Constitutional AI is working. The question is whether we'll use it.
                </p>
                <Link 
                  to="/early-access" 
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors inline-block"
                >
                  Join Our Mission
                </Link>
              </div>

            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Sources & Citations */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="mb-12">Sources & Citations</h2>
          <div className="space-y-4 text-sm">
            {references.map((ref) => (
              <div key={ref.number} id={`ref-${ref.number}`} className="flex gap-4">
                <span className="text-muted-foreground shrink-0">[{ref.number}]</span>
                <div>
                  <p className="text-foreground mb-1">
                    {ref.source}{ref.date && `, ${ref.date}`}
                    {ref.title && `. "${ref.title}"`}
                  </p>
                  <a 
                    href={ref.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1 break-all"
                  >
                    {ref.url} <ExternalLink className="h-3 w-3 shrink-0" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section>
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="text-sm text-muted-foreground italic mb-4">
            At GenuVerity, we don't just fact-check claims—we fact-check the future.
          </p>
          <p className="text-sm text-muted-foreground">
            Truth. Transparency. Trust.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
