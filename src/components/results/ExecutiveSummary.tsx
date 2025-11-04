import { Lightbulb } from 'lucide-react';

interface ExecutiveSummaryProps {
  summary: string;
  bottomLine: string;
}

export function ExecutiveSummary({ summary, bottomLine }: ExecutiveSummaryProps) {
  return (
    <div className="glass-card rounded-2xl p-6 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-smooth hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] animate-fade-in-up">
      <h3 className="mb-4 text-foreground">📋 TL;DR</h3>
      <p className="text-foreground/80 mb-6 leading-relaxed text-base">
        {summary}
      </p>
      <div className="glass-card-strong border-l-4 border-primary pl-5 py-4 rounded-xl shadow-[0_4px_16px_rgba(0,102,255,0.08)]">
        <div className="flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 animate-soft-pulse" />
          <div className="text-foreground">
            <span className="text-sm font-semibold text-primary">Bottom Line: </span>
            <span className="font-medium">{bottomLine}</span>
          </div>
        </div>
      </div>
    </div>
  );
}