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
    <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
      {/* Claim text - displayed as h1 for SEO and accessibility */}
      <h1 className="mb-6">{claim}</h1>
      
      {/* Verdict badge and confidence score - stacks on mobile, inline on desktop */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          {/* Verdict badge with dynamic color based on verdict type */}
          <Badge className={`${config.color} text-white px-4 py-2`}>
            {config.label}
          </Badge>
          
          {/* Confidence percentage display */}
          <div>
            <div className="text-sm text-muted-foreground">Confidence</div>
            <div className={`${config.textColor}`}>{confidence}%</div>
          </div>
        </div>
        
        {/* Share button - positioned to right on desktop, stacks on mobile */}
        <Button variant="outline" size="sm">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>

      {/* Visual confidence indicator - progress bar fills based on confidence % */}
      <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
        <div 
          className={`h-full ${config.color}`}
          style={{ width: `${confidence}%` }}
        />
      </div>

      {/* Metadata footer - analysis time and source count */}
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <span>Analyzed in {analysisTime}</span>
        <span>•</span>
        <span>{sourceCount} sources</span>
      </div>
    </div>
  );
}