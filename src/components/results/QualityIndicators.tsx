import { QualityMetrics } from '../../types';
import { Progress } from '../ui/progress';

interface QualityIndicatorsProps {
  metrics: QualityMetrics;
}

const qualityLabels = {
  sourceAgreement: 'Source Agreement',
  evidenceQuality: 'Evidence Quality',
  sourceCoverage: 'Source Coverage',
  reliability: 'Reliability',
};

const getQualityLabel = (score: number): string => {
  if (score >= 90) return 'Very High';
  if (score >= 75) return 'Strong';
  if (score >= 60) return 'Moderate';
  return 'Limited';
};

const getQualityColor = (score: number): string => {
  if (score >= 90) return 'bg-green-500';
  if (score >= 75) return 'bg-blue-500';
  if (score >= 60) return 'bg-yellow-500';
  return 'bg-red-500';
};

export function QualityIndicators({ metrics }: QualityIndicatorsProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <h3 className="mb-4" style={{ fontWeight: 600 }}>Analysis Quality</h3>
      <div className="space-y-4">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key}>
            <div className="flex justify-between mb-2">
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{qualityLabels[key as keyof QualityMetrics]}</span>
              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{getQualityLabel(value)}</span>
            </div>
            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full ${getQualityColor(value)} transition-all duration-500`}
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}