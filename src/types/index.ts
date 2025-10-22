/**
 * Type definitions for GenuVerity fact-check results
 * 
 * This file defines all TypeScript interfaces used throughout the application.
 * 
 * @see /guidelines/Guidelines.md#type-safety for usage guidelines
 * @see /data/mockResults.ts for example data structures
 * @see /README.md#tech-stack for architecture overview
 * 
 * Key Constraints:
 * - Verdict must be one of: TRUE, FALSE, MIXED, UNVERIFIABLE
 * - Source tiers range from 1-6 (1 = highest credibility)
 * - Analysis times should be within 25-45 second range
 * - Constitutional AI compliance scores must meet 87% minimum
 */

export type VerdictType = 'TRUE' | 'FALSE' | 'MIXED' | 'UNVERIFIABLE';

export interface Source {
  id: string;
  title: string;
  url: string;
  domain: string;
  credibilityScore: number;
  publishDate?: string;
  excerpt: string;
  keyFinding?: string;
  tier: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  type: 'primary' | 'fact-check' | 'academic' | 'government' | 'media' | 'social' | 'other';
  // For social media sources
  platform?: 'youtube' | 'tiktok' | 'instagram' | 'twitter';
  creatorName?: string;
  viewCount?: number;
  thumbnail?: string;
  isVerified?: boolean;
}

export interface AIModelAnalysis {
  modelName: string;
  verdict: VerdictType;
  confidence: number;
  reasoning: string;
}

export interface QualityMetrics {
  sourceAgreement: number;
  evidenceQuality: number;
  sourceCoverage: number;
  reliability: number;
}

export interface TimelineEvent {
  year: number;
  description: string;
  isSupporting: boolean; // true = supports claim, false = refutes
}

export interface SourceDistribution {
  tier: number;
  tierName: string;
  count: number;
  weightContribution: number;
  icon: string;
}

export interface ConstitutionalAIScore {
  overall: number;
  truthfulness: number;
  helpfulness: number;
  harmlessness: number;
  neutrality: number;
  verifiability: number;
}

export interface FactCheckResult {
  id: string;
  claim: string;
  verdict: VerdictType;
  confidence: number;
  analysisTime: string; // e.g., "1m 7s"
  summary: string;
  bottomLine: string;
  qualityMetrics: QualityMetrics;
  sourceDistribution: SourceDistribution[];
  sources: Source[];
  totalSourceCount: number;
  analyzedSourceCount: number;
  aiModels: AIModelAnalysis[];
  timeline?: TimelineEvent[];
  constitutionalAI?: ConstitutionalAIScore;
  limitations?: string[];
  fullAnalysis?: string;
  relatedClaims?: string[];
  createdAt: string;
}