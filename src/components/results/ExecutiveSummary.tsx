import { Lightbulb } from 'lucide-react';

interface ExecutiveSummaryProps {
  summary: string;
  bottomLine: string;
}

export function ExecutiveSummary({ summary, bottomLine }: ExecutiveSummaryProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <h3 className="mb-4">📋 TL;DR</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {summary}
      </p>
      <div className="bg-accent/50 border-l-4 border-primary pl-4 py-3 rounded">
        <div className="flex items-start gap-2">
          <Lightbulb className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-sm">Bottom Line: </span>
            <span>{bottomLine}</span>
          </div>
        </div>
      </div>
    </div>
  );
}