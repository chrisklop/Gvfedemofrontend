/**
 * VerdictHeader Component
 * 
 * Displays the primary verdict information at the top of fact-check results.
 * This is the first thing users see and provides immediate context about the claim.
 * 
 * Features:
 * - Large, prominent verdict badge (TRUE/FALSE/MIXED/UNVERIFIABLE)
 * - Confidence score with visual progress bar
 * - Analysis metadata (time and source count)
 * - Share button for social distribution
 * 
 * @component
 * @example
 * <VerdictHeader
 *   claim="Vaccines cause autism"
 *   verdict="FALSE"
 *   confidence={98}
 *   analysisTime="38s"
 *   sourceCount={327}
 * />
 * 
 * @see /guidelines/Guidelines.md#result-components for component patterns
 * @see /types/index.ts for VerdictType definition
 */

import { VerdictType } from '../../types';
import { Badge } from '../ui/badge';
import { Share2 } from 'lucide-react';
import { Button } from '../ui/button';

/**
 * Props for the VerdictHeader component
 */
interface VerdictHeaderProps {
  /** The claim being fact-checked */
  claim: string;
  /** The verdict (TRUE, FALSE, MIXED, or UNVERIFIABLE) */
  verdict: VerdictType;
  /** Confidence score from 0-100 */
  confidence: number;
  /** Time taken for analysis (e.g., "38s") - should be 25-45s range */
  analysisTime: string;
  /** Total number of sources analyzed (typically 322+) */
  sourceCount: number;
}

/**
 * Color configuration for each verdict type
 * Maps verdict to specific colors defined in style guide
 * 
 * @see /STYLE_GUIDE.md#verdict-colors for color specifications
 */
const verdictConfig = {
  TRUE: { color: 'bg-green-500', label: 'TRUE', textColor: 'text-green-500' },
  FALSE: { color: 'bg-red-500', label: 'FALSE', textColor: 'text-red-500' },
  MIXED: { color: 'bg-orange-500', label: 'MIXED', textColor: 'text-orange-500' },
  UNVERIFIABLE: { color: 'bg-gray-500', label: 'UNVERIFIABLE', textColor: 'text-gray-500' },
};

export function VerdictHeader({ claim, verdict, confidence, analysisTime, sourceCount }: VerdictHeaderProps) {
  // Get color configuration for this specific verdict
  const config = verdictConfig[verdict];

  return (
    <div className="glass-card-strong rounded-2xl p-6 md:p-8 border border-white/40 shadow-[0_12px_48px_rgba(0,0,0,0.08)] transition-smooth hover:shadow-[0_16px_64px_rgba(0,0,0,0.12)] animate-fade-in-up">
      {/* Claim text - displayed as h1 for SEO and accessibility */}
      <h1 className="mb-6 text-foreground" style={{ lineHeight: 1.3 }}>{claim}</h1>

      {/* Verdict badge and confidence score - stacks on mobile, inline on desktop */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          {/* Verdict badge with dynamic color and glow effect */}
          <Badge className={`${config.color} text-white px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:scale-105 transition-smooth`} style={{ fontWeight: 700, fontSize: '1.125rem', letterSpacing: '0.02em' }}>
            {config.label}
          </Badge>

          {/* Confidence percentage display */}
          <div>
            <div style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>Confidence</div>
            <div className={`${config.textColor}`} style={{ fontSize: '1.5rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{confidence}%</div>
          </div>
        </div>

        {/* Share button with glass effect */}
        <Button variant="glass" size="sm" className="rounded-full">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>

      {/* Enhanced confidence indicator with glass effect */}
      <div className="h-3 bg-white/40 rounded-full overflow-hidden mb-6 shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)]">
        <div
          className={`h-full ${config.color} transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(0,0,0,0.2)]`}
          style={{ width: `${confidence}%` }}
        />
      </div>

      {/* Metadata footer with enhanced styling */}
      <div className="flex flex-wrap gap-4 text-foreground/70" style={{ fontSize: '0.875rem' }}>
        <span>Analyzed in <span className="font-semibold text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>{analysisTime}</span></span>
        <span>•</span>
        <span><span className="font-semibold text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>{sourceCount}</span> sources</span>
      </div>
    </div>
  );
}