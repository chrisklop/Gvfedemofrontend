import { TimelineEvent } from '../../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface EvidenceTimelineProps {
  timeline: TimelineEvent[];
}

export function EvidenceTimeline({ timeline }: EvidenceTimelineProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <h3 className="mb-6">🔍 Key Evidence</h3>
      
      <div className="space-y-6">
        {timeline.map((event, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`rounded-full p-1 ${event.isSupporting ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                {event.isSupporting ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
              {index < timeline.length - 1 && (
                <div className="w-0.5 h-full bg-border mt-2" />
              )}
            </div>
            
            <div className="flex-1 pb-6">
              <div className="text-sm bg-muted px-2 py-1 rounded inline-block mb-2">
                {event.year}
              </div>
              <p className="text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}