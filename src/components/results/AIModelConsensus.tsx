import { AIModelAnalysis, VerdictType } from '../../types';
import { Badge } from '../ui/badge';
import { CheckCircle2, XCircle, AlertCircle, HelpCircle } from 'lucide-react';

interface AIModelConsensusProps {
  models: AIModelAnalysis[];
}

const verdictIcons = {
  TRUE: CheckCircle2,
  FALSE: XCircle,
  MIXED: AlertCircle,
  UNVERIFIABLE: HelpCircle,
};

const verdictColors = {
  TRUE: 'text-green-500 bg-green-500/10',
  FALSE: 'text-red-500 bg-red-500/10',
  MIXED: 'text-orange-500 bg-orange-500/10',
  UNVERIFIABLE: 'text-gray-500 bg-gray-500/10',
};

export function AIModelConsensus({ models }: AIModelConsensusProps) {
  // Calculate agreement
  const verdicts = models.map(m => m.verdict);
  const uniqueVerdicts = new Set(verdicts);
  const isUnanimous = uniqueVerdicts.size === 1;
  const isMajority = verdicts.filter(v => v === verdicts[0]).length > models.length / 2;
  
  const agreementLabel = isUnanimous ? 'Unanimous' : isMajority ? 'Majority Agreement' : 'Split Decision';
  const agreementColor = isUnanimous ? 'text-green-500' : isMajority ? 'text-blue-500' : 'text-orange-500';

  // Count votes
  const voteCounts: Record<VerdictType, number> = {
    TRUE: 0,
    FALSE: 0,
    MIXED: 0,
    UNVERIFIABLE: 0,
  };
  
  verdicts.forEach(v => {
    voteCounts[v]++;
  });

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <h3 className="mb-4">🤖 AI Model Analysis</h3>
      
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-muted-foreground">Agreement Level:</span>
          <span className={agreementColor}>
            {isUnanimous && '✅'} {agreementLabel}
          </span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {models.map((model, index) => {
          const Icon = verdictIcons[model.verdict];
          return (
            <div key={index} className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4>{model.modelName}</h4>
                <Badge className={verdictColors[model.verdict]}>
                  <Icon className="h-3 w-3 mr-1" />
                  {model.verdict}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                Confidence: {model.confidence}%
              </div>
              <p className="text-sm text-muted-foreground italic">
                "{model.reasoning}"
              </p>
            </div>
          );
        })}
      </div>

      <div className="border-t border-border pt-4">
        <div className="text-sm">
          <span className="text-muted-foreground">Model Votes: </span>
          {Object.entries(voteCounts)
            .filter(([_, count]) => count > 0)
            .map(([verdict, count]) => (
              <span key={verdict} className="mr-3">
                {verdict} ({count})
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}