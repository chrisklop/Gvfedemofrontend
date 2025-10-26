/**
 * ConstitutionalAIReport Component
 * 
 * Displays Constitutional AI safety assessment scores for the fact-check analysis.
 * This component shows how well the analysis adheres to Constitutional AI principles,
 * ensuring ethical, unbiased, and transparent fact-checking.
 * 
 * Constitutional AI ensures every fact-check meets ethical standards:
 * - Truthfulness: Accuracy of claims and sources
 * - Helpfulness: Provides actionable, educational information
 * - Harmlessness: Avoids amplifying misinformation or harm
 * - Neutrality: Balanced perspective without bias
 * - Verifiability: All claims traceable to sources
 * 
 * Minimum threshold: 87% overall compliance required
 * 
 * @component
 * @example
 * <ConstitutionalAIReport
 *   score={{
 *     overall: 94,
 *     truthfulness: 96,
 *     helpfulness: 92,
 *     harmlessness: 95,
 *     neutrality: 93,
 *     verifiability: 94
 *   }}
 * />
 * 
 * @see /pages/Mission.tsx for detailed Constitutional AI principles
 * @see /guidelines/Guidelines.md#constitutional-ai-framework
 */

import { ConstitutionalAIScore } from '../../types';
import { Shield } from 'lucide-react';

/**
 * Props for the ConstitutionalAIReport component
 */
interface ConstitutionalAIReportProps {
  /** Constitutional AI compliance scores across all principles */
  score: ConstitutionalAIScore;
}

/**
 * Determines text color based on score thresholds
 * 
 * @param score - Compliance score (0-100)
 * @returns Tailwind text color class
 */
const getScoreColor = (score: number): string => {
  if (score >= 80) return 'text-green-500';  // Passing
  if (score >= 60) return 'text-yellow-500'; // Warning
  return 'text-red-500';                     // Failing
};

/**
 * Determines progress bar color based on score thresholds
 * 
 * @param score - Compliance score (0-100)
 * @returns Tailwind background color class
 */
const getBarColor = (score: number): string => {
  if (score >= 80) return 'bg-green-500';  // Passing
  if (score >= 60) return 'bg-yellow-500'; // Warning
  return 'bg-red-500';                     // Failing
};

export function ConstitutionalAIReport({ score }: ConstitutionalAIReportProps) {
  // Define the five Constitutional AI principles to display
  // Order matches importance and official documentation
  const metrics = [
    { label: 'Truthfulness', value: score.truthfulness },
    { label: 'Helpfulness', value: score.helpfulness },
    { label: 'Harmlessness', value: score.harmlessness },
    { label: 'Neutrality', value: score.neutrality },
    { label: 'Verifiability', value: score.verifiability },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="h-5 w-5 text-primary" />
        <h3 style={{ fontWeight: 600 }}>AI Safety Assessment</h3>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--muted-foreground)' }}>Overall Safety Score</span>
          <span className={getScoreColor(score.overall)} style={{ fontSize: '1.5rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
            {score.overall}%
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={`h-full ${getBarColor(score.overall)} transition-all duration-500`}
            style={{ width: `${score.overall}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        <p style={{ fontSize: '0.875rem', fontWeight: 600 }} className="mb-3">Principles Evaluated:</p>
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="flex justify-between mb-1.5" style={{ fontSize: '0.875rem' }}>
              <span style={{ fontWeight: 600 }}>{metric.label}</span>
              <span className={getScoreColor(metric.value)} style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{metric.value}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full ${getBarColor(metric.value)} transition-all duration-500`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <a href="#methodology" className="text-sm text-primary hover:underline">
          View Safety Methodology →
        </a>
      </div>
    </div>
  );
}
