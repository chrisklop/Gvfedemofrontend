import { AlertTriangle } from 'lucide-react';

interface LimitationsSectionProps {
  limitations: string[];
  analyzedCount: number;
  totalCount: number;
}

export function LimitationsSection({ limitations, analyzedCount, totalCount }: LimitationsSectionProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="h-5 w-5 text-orange-500" />
        <h3>Important Context</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="mb-2">Analysis Limitations:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {limitations.map((limitation, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>{limitation}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border pt-4">
          <h4 className="mb-2">Methodology:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Source precedence system explained</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>AI model details</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Confidence calculation method</span>
            </li>
          </ul>
        </div>

        <div className="pt-4">
          <a href="#methodology" className="text-sm text-primary hover:underline">
            Read Full Methodology →
          </a>
        </div>
      </div>
    </div>
  );
}
