import { useParams } from 'react-router-dom';
import { ResultsLayout } from '../components/layouts/ResultsLayout';
import { VerdictHeader } from '../components/results/VerdictHeader';
import { ExecutiveSummary } from '../components/results/ExecutiveSummary';
import { QualityIndicators } from '../components/results/QualityIndicators';
import { SourceBreakdown } from '../components/results/SourceBreakdown';
import { SourceList } from '../components/results/SourceList';
import { AIModelConsensus } from '../components/results/AIModelConsensus';
import { EvidenceTimeline } from '../components/results/EvidenceTimeline';
import { ConstitutionalAIReport } from '../components/results/ConstitutionalAIReport';
import { LimitationsSection } from '../components/results/LimitationsSection';
import { DetailedAnalysisTabs } from '../components/results/DetailedAnalysisTabs';
import { ActionButtons } from '../components/results/ActionButtons';
import { mockFactCheckResult, mockSimpleResult, mockGreatWallResult } from '../data/mockResults';
import { Skeleton } from '../components/ui/skeleton';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Info } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FactCheckResult } from '../types';

export default function Results() {
  const { id } = useParams<{ id: string }>();
  const [result, setResult] = useState<FactCheckResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchResult = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock: Return different results based on ID
      if (id === 'vaccines-autism-2024') {
        setResult(mockFactCheckResult);
      } else if (id === 'coffee-health-2024') {
        setResult(mockSimpleResult);
      } else if (id === 'great-wall-space-2024') {
        setResult(mockGreatWallResult);
      } else {
        // Default to comprehensive result
        setResult(mockFactCheckResult);
      }
      
      setLoading(false);
    };

    fetchResult();
  }, [id]);

  if (loading || !result) {
    return (
      <ResultsLayout sections={[]}>
        <div className="space-y-6">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </ResultsLayout>
    );
  }

  // Generate table of contents based on available sections
  const sections = [
    { id: 'verdict', label: 'Verdict', available: true },
    { id: 'summary', label: 'Summary', available: !!result.summary },
    { id: 'quality', label: 'Quality Metrics', available: !!result.qualityMetrics },
    { id: 'source-distribution', label: 'Source Distribution', available: result.sourceDistribution.length > 0 },
    { id: 'sources', label: 'Sources by Tier', available: result.sources.length > 0 },
    { id: 'ai-consensus', label: 'AI Model Consensus', available: result.aiModels.length > 0 },
    { id: 'timeline', label: 'Evidence Timeline', available: !!result.timeline && result.timeline.length > 0 },
    { id: 'constitutional-ai', label: 'AI Safety', available: !!result.constitutionalAI },
    { id: 'detailed-analysis', label: 'Detailed Analysis', available: !!result.fullAnalysis || result.sources.length > 0 },
    { id: 'limitations', label: 'Limitations', available: !!result.limitations && result.limitations.length > 0 },
    { id: 'actions', label: 'Actions', available: true },
  ];

  return (
    <ResultsLayout sections={sections}>
      <div className="space-y-6">
        {/* Sample Query Notice */}
        <Alert className="bg-blue-500/10 border-blue-500/20">
          <Info className="h-4 w-4 text-blue-500" />
          <AlertDescription className="text-sm">
            <strong className="text-foreground">Demo Result:</strong> This is a sample query result demonstrating the power of the GenuVerity proprietary pipeline. Some links and interactive features may not be fully functional in this preview.
          </AlertDescription>
        </Alert>

        {/* Verdict Header */}
        <div id="verdict">
          <VerdictHeader
            claim={result.claim}
            verdict={result.verdict}
            confidence={result.confidence}
            analysisTime={result.analysisTime}
            sourceCount={result.totalSourceCount}
          />
        </div>

        {/* Executive Summary */}
        {result.summary && (
          <div id="summary">
            <ExecutiveSummary
              summary={result.summary}
              bottomLine={result.bottomLine}
            />
          </div>
        )}

        {/* Quality Indicators */}
        {result.qualityMetrics && (
          <div id="quality">
            <QualityIndicators metrics={result.qualityMetrics} />
          </div>
        )}

        {/* Source Distribution */}
        {result.sourceDistribution.length > 0 && (
          <div id="source-distribution">
            <SourceBreakdown
              distribution={result.sourceDistribution}
              totalCount={result.totalSourceCount}
            />
          </div>
        )}

        {/* Sources by Tier */}
        {result.sources.length > 0 && (
          <div id="sources">
            <div className="space-y-4">
              <h2>Sources by Tier</h2>
              {result.sourceDistribution.map((dist) => (
                <SourceList
                  key={dist.tier}
                  sources={result.sources}
                  tier={dist.tier}
                  tierName={dist.tierName}
                  icon={dist.icon}
                  weightContribution={dist.weightContribution}
                />
              ))}
            </div>
          </div>
        )}

        {/* AI Model Consensus */}
        {result.aiModels.length > 0 && (
          <div id="ai-consensus">
            <AIModelConsensus models={result.aiModels} />
          </div>
        )}

        {/* Evidence Timeline */}
        {result.timeline && result.timeline.length > 0 && (
          <div id="timeline">
            <EvidenceTimeline timeline={result.timeline} />
          </div>
        )}

        {/* Constitutional AI Safety */}
        {result.constitutionalAI && (
          <div id="constitutional-ai">
            <ConstitutionalAIReport score={result.constitutionalAI} />
          </div>
        )}

        {/* Detailed Analysis Tabs */}
        {(result.fullAnalysis || result.sources.length > 0) && (
          <div id="detailed-analysis">
            <DetailedAnalysisTabs
              fullAnalysis={result.fullAnalysis}
              sources={result.sources}
              relatedClaims={result.relatedClaims}
            />
          </div>
        )}

        {/* Limitations */}
        {result.limitations && result.limitations.length > 0 && (
          <div id="limitations">
            <LimitationsSection
              limitations={result.limitations}
              analyzedCount={result.analyzedSourceCount}
              totalCount={result.totalSourceCount}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div id="actions">
          <ActionButtons claim={result.claim} resultId={result.id} />
        </div>
      </div>
    </ResultsLayout>
  );
}
