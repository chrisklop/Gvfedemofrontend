/**
 * Mock data for GenuVerity fact-check results
 * 
 * This file contains sample fact-check data used during development and demonstrations.
 * In production, this will be replaced by real API responses.
 * 
 * @see /guidelines/Guidelines.md#data-flow for integration details
 * @see /types/index.ts for type definitions
 * @see /pages/ApiDocs.tsx for real API specifications
 * 
 * Data Standards:
 * - analysisTime must be within 25-45 second range (e.g., '38s', '42s')
 * - totalSourceCount should be around 322 per query
 * - verdict must be: TRUE, FALSE, MIXED, or UNVERIFIABLE
 * - confidence scores range from 0-100
 * - Constitutional AI compliance must meet 87% minimum
 */

import { FactCheckResult } from '../types';

// Mock data for testing - represents a comprehensive result
export const mockFactCheckResult: FactCheckResult = {
  id: 'vaccines-autism-2024',
  claim: 'Vaccines cause autism',
  verdict: 'FALSE',
  confidence: 98,
  analysisTime: '38s',
  summary: 'No credible scientific evidence supports a link between vaccines and autism. Multiple large-scale studies involving hundreds of thousands of children have found no correlation. The original 1998 study was retracted due to fraud.',
  bottomLine: 'Vaccines do not cause autism',
  qualityMetrics: {
    sourceAgreement: 95,
    evidenceQuality: 92,
    sourceCoverage: 98,
    reliability: 96,
  },
  sourceDistribution: [
    { tier: 1, tierName: 'GenuVerified', count: 3, weightContribution: 35, icon: '🔬' },
    { tier: 2, tierName: 'Fact-Check Orgs', count: 9, weightContribution: 30, icon: '✓' },
    { tier: 3, tierName: 'Academic', count: 42, weightContribution: 25, icon: '🎓' },
    { tier: 4, tierName: 'Government', count: 12, weightContribution: 7, icon: '🏛️' },
    { tier: 5, tierName: 'Media', count: 15, weightContribution: 2.5, icon: '📰' },
    { tier: 6, tierName: 'Social Media', count: 5, weightContribution: 0.5, icon: '📱' },
  ],
  sources: [
    {
      id: '1',
      title: 'MMR Vaccine Safety: Large-Scale Study',
      url: 'https://thelancet.com/example',
      domain: 'The Lancet',
      credibilityScore: 99,
      publishDate: '2019',
      excerpt: 'Study of 657,000 children found no correlation between MMR vaccine and autism diagnosis',
      keyFinding: '657,000 children studied, no correlation found between MMR vaccine and autism diagnosis',
      tier: 1,
      type: 'primary',
    },
    {
      id: '2',
      title: 'Comprehensive Meta-Analysis of Vaccine Safety',
      url: 'https://pubmed.ncbi.nlm.nih.gov/example',
      domain: 'PubMed',
      credibilityScore: 97,
      publishDate: '2014',
      excerpt: 'Meta-analysis of 1.2 million children confirms no link between vaccines and autism',
      tier: 1,
      type: 'primary',
    },
    {
      id: '3',
      title: 'Denmark Population Study',
      url: 'https://nejm.org/example',
      domain: 'New England Journal of Medicine',
      credibilityScore: 98,
      publishDate: '2002',
      excerpt: 'Population study of 537,000 children in Denmark found no association',
      tier: 1,
      type: 'primary',
    },
    {
      id: '4',
      title: 'Vaccine-Autism Claim Debunked',
      url: 'https://factcheck.org/example',
      domain: 'FactCheck.org',
      credibilityScore: 97,
      publishDate: '2024',
      excerpt: 'Multiple studies have found no link between vaccines and autism. The original study claiming a link was retracted.',
      tier: 2,
      type: 'fact-check',
    },
    {
      id: '5',
      title: 'Snopes: MMR Vaccine Does Not Cause Autism',
      url: 'https://snopes.com/example',
      domain: 'Snopes',
      credibilityScore: 95,
      publishDate: '2023',
      excerpt: 'Decades of research have definitively shown no causal relationship',
      tier: 2,
      type: 'fact-check',
    },
    {
      id: '6',
      title: 'Dr. Mike Explains Vaccines',
      url: 'https://youtube.com/watch?v=example',
      domain: 'YouTube',
      credibilityScore: 95,
      publishDate: '2023',
      excerpt: 'Medical doctor explains the science behind vaccine safety',
      tier: 6,
      type: 'social',
      platform: 'youtube',
      creatorName: 'Dr. Mike',
      viewCount: 2300000,
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
      isVerified: true,
    },
  ],
  totalSourceCount: 327,
  analyzedSourceCount: 84,
  aiModels: [
    {
      modelName: 'Gemini 2.5 Pro',
      verdict: 'FALSE',
      confidence: 97,
      reasoning: 'No scientific evidence supports this claim. Extensive research across multiple countries and populations has consistently found no causal link.',
    },
    {
      modelName: 'GPT-5',
      verdict: 'FALSE',
      confidence: 98,
      reasoning: 'Multiple large-scale studies demonstrate vaccine safety. The original fraudulent study has been thoroughly discredited.',
    },
    {
      modelName: 'Claude Sonnet 4.5',
      verdict: 'FALSE',
      confidence: 99,
      reasoning: 'Comprehensive research including meta-analyses and population studies refutes any link between vaccines and autism.',
    },
  ],
  timeline: [
    {
      year: 1998,
      description: 'Wakefield study published (Later retracted for fraud)',
      isSupporting: false,
    },
    {
      year: 2002,
      description: 'Denmark study (537k children) - No correlation found',
      isSupporting: false,
    },
    {
      year: 2014,
      description: 'Meta-analysis (1.2M children) - Confirms no link',
      isSupporting: false,
    },
    {
      year: 2019,
      description: 'Largest study (657k children) - Further evidence of safety',
      isSupporting: false,
    },
    {
      year: 2024,
      description: 'Scientific consensus maintained - No credible evidence for link',
      isSupporting: false,
    },
  ],
  constitutionalAI: {
    overall: 98,
    truthfulness: 98,
    helpfulness: 85,
    harmlessness: 30,
    neutrality: 80,
    verifiability: 90,
  },
  limitations: [
    'Analyzed 84 of 327 sources (smart filtering)',
    'Medical claims require consultation with healthcare professionals',
    'Science evolves - results current as of October 2025',
  ],
  fullAnalysis: 'The claim that vaccines cause autism has been thoroughly investigated and debunked by the scientific community. The original 1998 study by Andrew Wakefield, which suggested a link between the MMR vaccine and autism, was found to be fraudulent and was retracted. Since then, numerous large-scale studies involving hundreds of thousands of children across multiple countries have found no evidence of a causal relationship between vaccines and autism spectrum disorders.\n\nKey studies include a 2019 Danish study of 657,000 children, a 2014 meta-analysis covering 1.2 million children, and a 2002 population study in Denmark of 537,000 children. All of these studies consistently found no increased risk of autism in vaccinated children compared to unvaccinated children.\n\nMajor health organizations worldwide, including the CDC, WHO, and leading pediatric associations, maintain that vaccines are safe and do not cause autism. The scientific consensus is clear and overwhelming.',
  relatedClaims: [
    'MMR vaccine is dangerous',
    'Vaccine ingredients are toxic',
    'Natural immunity is better than vaccines',
  ],
  createdAt: '2024-10-04T12:00:00Z',
};

// Simpler result with fewer sections (to demonstrate modularity)
export const mockSimpleResult: FactCheckResult = {
  id: 'coffee-health-2024',
  claim: 'Coffee is bad for your health',
  verdict: 'MIXED',
  confidence: 72,
  analysisTime: '45s',
  summary: 'The health effects of coffee are complex and depend on individual factors. Moderate consumption (3-4 cups/day) is generally associated with health benefits, but excessive intake or certain health conditions may warrant caution.',
  bottomLine: 'Moderate coffee consumption is generally beneficial for most people',
  qualityMetrics: {
    sourceAgreement: 68,
    evidenceQuality: 75,
    sourceCoverage: 80,
    reliability: 70,
  },
  sourceDistribution: [
    { tier: 3, tierName: 'Academic', count: 18, weightContribution: 45, icon: '🎓' },
    { tier: 4, tierName: 'Government', count: 5, weightContribution: 30, icon: '🏛️' },
    { tier: 5, tierName: 'Media', count: 12, weightContribution: 25, icon: '📰' },
  ],
  sources: [
    {
      id: '1',
      title: 'Coffee Consumption and Health Outcomes',
      url: 'https://pubmed.example.com',
      domain: 'PubMed',
      credibilityScore: 89,
      publishDate: '2022',
      excerpt: 'Systematic review shows moderate coffee intake associated with reduced mortality risk',
      tier: 3,
      type: 'academic',
    },
  ],
  totalSourceCount: 35,
  analyzedSourceCount: 35,
  aiModels: [
    {
      modelName: 'Gemini 2.5 Pro',
      verdict: 'MIXED',
      confidence: 70,
      reasoning: 'Evidence shows both benefits and potential risks depending on consumption levels and individual health status.',
    },
    {
      modelName: 'GPT-5',
      verdict: 'MIXED',
      confidence: 75,
      reasoning: 'Health effects vary by individual. Moderate consumption generally beneficial, but not universal.',
    },
  ],
  createdAt: '2024-10-04T13:00:00Z',
};

// Great Wall of China visibility from space
export const mockGreatWallResult: FactCheckResult = {
  id: 'great-wall-space-2024',
  claim: 'The Great Wall of China is visible from space',
  verdict: 'FALSE',
  confidence: 92,
  analysisTime: '3.4s',
  summary: 'The claim that the Great Wall of China is visible from space with the naked eye is a persistent myth that has been definitively debunked by astronauts and space agencies. While the wall is an impressive structure at 21,196 km long, it is only 4-5 meters wide on average, making it impossible to see from the International Space Station (400km altitude) without optical aid.',
  bottomLine: 'The Great Wall is not visible from space with the naked eye',
  qualityMetrics: {
    sourceAgreement: 95,
    evidenceQuality: 94,
    sourceCoverage: 92,
    reliability: 96,
  },
  sourceDistribution: [
    { tier: 1, tierName: 'GenuVerified', count: 2, weightContribution: 30, icon: '🔬' },
    { tier: 2, tierName: 'Fact-Check Orgs', count: 4, weightContribution: 28, icon: '✓' },
    { tier: 3, tierName: 'Academic', count: 8, weightContribution: 25, icon: '🎓' },
    { tier: 4, tierName: 'Government', count: 3, weightContribution: 15, icon: '🏛️' },
    { tier: 6, tierName: 'Social Media', count: 2, weightContribution: 2, icon: '📱' },
  ],
  sources: [
    {
      id: '1',
      title: 'NASA - Great Wall of China Not Visible from Space',
      url: 'https://www.nasa.gov/vision/space/workinginspace/great_wall.html',
      domain: 'nasa.gov',
      credibilityScore: 99,
      publishDate: '2024-03-15',
      excerpt: 'The Great Wall of China frequently is cited as the only human-made object visible from space. It\'s not. The wall is narrow and irregular, and follows the natural contours and colors of the landscape.',
      keyFinding: 'The Great Wall can barely be seen from the Shuttle, so it would not be possible to see it from the Moon',
      tier: 4,
      type: 'government',
    },
    {
      id: '2',
      title: 'Is China\'s Great Wall Visible from Space?',
      url: 'https://www.scientificamerican.com/article/is-chinas-great-wall-visible-from-space/',
      domain: 'scientificamerican.com',
      credibilityScore: 96,
      publishDate: '2023-11-20',
      excerpt: 'Based on the wall\'s width and the resolving power of the human eye, it is impossible to see from space',
      keyFinding: 'Scientific analysis shows the wall\'s 4-5m width is below the resolving power threshold from ISS altitude',
      tier: 3,
      type: 'academic',
    },
    {
      id: '3',
      title: 'FACT CHECK: Is the Great Wall of China Visible from Space?',
      url: 'https://www.snopes.com/fact-check/great-wall-of-china-moon/',
      domain: 'snopes.com',
      credibilityScore: 94,
      publishDate: '2024-01-10',
      excerpt: 'FALSE: The Great Wall of China is not visible from space with the naked eye',
      keyFinding: 'Comprehensive fact-check confirms astronaut testimonies that the wall cannot be seen without magnification',
      tier: 2,
      type: 'fact-check',
    },
    {
      id: '4',
      title: 'Common Space Myths and Misconceptions',
      url: 'https://www.nature.com/articles/space-myths',
      domain: 'nature.com',
      credibilityScore: 98,
      publishDate: '2023-08-05',
      excerpt: 'Academic analysis of persistent space-related myths, including Great Wall visibility',
      tier: 1,
      type: 'primary',
    },
    {
      id: '5',
      title: 'Limits of Human Vision from Orbital Distances',
      url: 'https://journals.optical.org/vision-limits',
      domain: 'journals.optical.org',
      credibilityScore: 97,
      publishDate: '2023-05-12',
      excerpt: 'Optical physics analysis of human vision limitations from low Earth orbit altitudes',
      tier: 1,
      type: 'primary',
    },
    {
      id: '6',
      title: 'ESA - What Can Be Seen from Space',
      url: 'https://www.esa.int/space-observations/earth-structures',
      domain: 'esa.int',
      credibilityScore: 98,
      publishDate: '2023-09-22',
      excerpt: 'European Space Agency documentation on visible Earth structures from orbit',
      keyFinding: 'City lights and major highways are more visible than the Great Wall due to contrast and width',
      tier: 4,
      type: 'government',
    },
  ],
  totalSourceCount: 47,
  analyzedSourceCount: 42,
  aiModels: [
    {
      modelName: 'Gemini 2.0 Pro',
      verdict: 'FALSE',
      confidence: 93,
      reasoning: 'Multiple astronauts including Chris Hadfield have confirmed they cannot see the wall from the ISS. The wall\'s width (4-5m) and color similarity to surrounding terrain make it indistinguishable from space.',
    },
    {
      modelName: 'GPT-5',
      verdict: 'FALSE',
      confidence: 91,
      reasoning: 'NASA officially debunked this myth. The wall\'s dimensions and contrast with surroundings fall below the resolution threshold of human vision from orbital altitudes.',
    },
    {
      modelName: 'Claude Sonnet 4.5',
      verdict: 'FALSE',
      confidence: 92,
      reasoning: 'Scientific consensus based on optical physics, satellite imagery analysis, and direct astronaut observations confirms the Great Wall is not visible from space without magnification.',
    },
  ],
  timeline: [
    {
      year: 1932,
      description: 'Myth originates in Ripley\'s Believe It or Not publication',
      isSupporting: false,
    },
    {
      year: 1961,
      description: 'Yuri Gagarin\'s flight - no report of seeing the wall',
      isSupporting: false,
    },
    {
      year: 2003,
      description: 'Yang Liwei (Chinese astronaut) confirms wall is invisible from orbit',
      isSupporting: false,
    },
    {
      year: 2004,
      description: 'NASA releases official statement debunking the myth',
      isSupporting: false,
    },
    {
      year: 2024,
      description: 'Latest ISS crew reconfirms wall cannot be seen without optical aid',
      isSupporting: false,
    },
  ],
  constitutionalAI: {
    overall: 95,
    truthfulness: 96,
    helpfulness: 95,
    harmlessness: 94,
    neutrality: 90,
    verifiability: 95,
  },
  limitations: [
    'Limited to visible light spectrum observations',
    'Does not account for potential future observation technologies',
    'Focused on current ISS altitude (400km)',
    'Analysis considers naked eye visibility only, not telescopic observations',
  ],
  fullAnalysis: 'The claim that the Great Wall of China is visible from space has been thoroughly investigated by space agencies, astronauts, and scientists. The physical dimensions of the Great Wall (average width 4-5 meters) combined with the resolution limits of human vision make it impossible to distinguish from the International Space Station\'s altitude (approximately 400km).\n\nKey findings from the analysis:\n\n• NASA officially debunked this myth, stating the Great Wall is not visible from low Earth orbit without magnification\n• Multiple astronauts including Chris Hadfield, Yang Liwei (China), and others have confirmed they cannot see the wall from the ISS\n• The wall\'s width (4-5m) and color similarity to surrounding terrain make it indistinguishable from space\n• City lights and major highways are actually more visible from space than the Great Wall due to better contrast and width\n\nThe myth originated in the 1930s, before space travel was possible, in a Ripley\'s Believe It or Not publication. Despite clear evidence to the contrary from astronauts who have actually been to space, the myth has persisted in popular culture, textbooks, and tourist materials.\n\nScientific analysis shows that the angular resolution of the human eye (approximately 1 arcminute) combined with atmospheric interference makes it impossible to resolve structures as narrow as the Great Wall from orbital altitudes. While the wall is an impressive engineering feat spanning over 21,000 kilometers, its visibility from space is a myth that has been definitively debunked by those who have actually observed Earth from orbit.',
  relatedClaims: [
    'The Great Wall is the only man-made structure visible from the Moon',
    'The Great Wall is thousands of years old',
    'The Great Wall was built to keep out Mongolian invasions',
  ],
  createdAt: '2024-10-04T14:30:00Z',
};