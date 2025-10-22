/**
 * AnalysisProgress Component
 * 
 * Displays a professional, lightly animated progress indicator during fact-check analysis.
 * Shows processing stages aligned with Constitutional AI principles and provides
 * real-time feedback on the 25-45 second analysis process.
 * 
 * Features:
 * - Animated progress bar with smooth transitions
 * - Five-stage processing visualization (Constitutional AI principles)
 * - Estimated time remaining
 * - Claim preview
 * - Theme-aware animations and colors
 * - Responsive design
 * 
 * @component
 * @example
 * <AnalysisProgress
 *   claim="Vaccines cause autism"
 *   onComplete={(resultId) => navigate(`/verify/${resultId}`)}
 * />
 * 
 * @see /guidelines/Guidelines.md#system-specifications for processing times
 * @see /STYLE_GUIDE.md for animation guidelines
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Search, FileCheck, Scale, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

/**
 * Processing stage definition
 */
interface ProcessingStage {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  duration: number; // Percentage of total time
}

/**
 * Props for AnalysisProgress component
 */
interface AnalysisProgressProps {
  /** The claim being analyzed */
  claim: string;
  /** Callback when analysis completes (receives result ID) */
  onComplete?: (resultId: string) => void;
  /** Callback if analysis fails */
  onError?: (error: string) => void;
  /** Optional estimated duration in seconds (default: 38) */
  estimatedDuration?: number;
}

/**
 * Five processing stages aligned with Constitutional AI principles
 * Total percentages should sum to 100%
 */
const PROCESSING_STAGES: ProcessingStage[] = [
  {
    id: 'understanding',
    label: 'Understanding Claim',
    description: 'Analyzing claim structure and domain',
    icon: <Search className="h-5 w-5" />,
    duration: 5, // 0-5%
  },
  {
    id: 'aggregating',
    label: 'Aggregating Sources',
    description: 'Searching 3M+ sources across 5 aggregators',
    icon: <FileCheck className="h-5 w-5" />,
    duration: 35, // 5-40%
  },
  {
    id: 'analyzing',
    label: 'Analyzing Evidence',
    description: 'Evaluating credibility and relevance',
    icon: <Scale className="h-5 w-5" />,
    duration: 40, // 40-80%
  },
  {
    id: 'synthesizing',
    label: 'Synthesizing Verdict',
    description: 'Applying Constitutional AI principles',
    icon: <Lightbulb className="h-5 w-5" />,
    duration: 15, // 80-95%
  },
  {
    id: 'validating',
    label: 'Validating Compliance',
    description: 'Ensuring 87% minimum CAI compliance',
    icon: <Shield className="h-5 w-5" />,
    duration: 5, // 95-100%
  },
];

export function AnalysisProgress({
  claim,
  onComplete,
  onError,
  estimatedDuration = 38,
}: AnalysisProgressProps) {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(estimatedDuration);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate progress over estimated duration
    const totalSteps = 100;
    const intervalDuration = (estimatedDuration * 1000) / totalSteps;
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          return 100;
        }
        return prev + 1;
      });
    }, intervalDuration);

    // Update time remaining
    const timeInterval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timeInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(timeInterval);
    };
  }, [estimatedDuration]);

  // Update current stage based on progress
  useEffect(() => {
    let cumulativePercentage = 0;
    for (let i = 0; i < PROCESSING_STAGES.length; i++) {
      cumulativePercentage += PROCESSING_STAGES[i].duration;
      if (progress < cumulativePercentage) {
        setCurrentStage(i);
        break;
      }
    }
    if (progress >= 100) {
      setCurrentStage(PROCESSING_STAGES.length - 1);
    }
  }, [progress]);

  // Trigger completion callback
  useEffect(() => {
    if (isComplete && onComplete) {
      // In real implementation, this would be the actual result ID from the API
      setTimeout(() => {
        onComplete('demo-result-id');
      }, 500);
    }
  }, [isComplete, onComplete]);

  const stage = PROCESSING_STAGES[currentStage];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
            >
              <Shield className="h-8 w-8 text-primary" />
            </motion.div>
            <h2 className="mb-2">Analyzing Claim</h2>
            <p className="text-muted-foreground">
              Applying Constitutional AI fact-checking
            </p>
          </div>

          {/* Claim Display */}
          <div className="mb-8 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-1">Claim:</p>
            <p className="italic">&ldquo;{claim}&rdquo;</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                {isComplete ? 'Complete!' : `${Math.round(progress)}%`}
              </span>
              <span className="text-sm text-muted-foreground">
                {isComplete ? (
                  <span className="flex items-center gap-1 text-green-500">
                    <CheckCircle2 className="h-4 w-4" />
                    Done
                  </span>
                ) : (
                  `~${timeRemaining}s remaining`
                )}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Current Stage */}
          <motion.div
            key={currentStage}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-start gap-3 p-4 bg-accent/50 rounded-lg border-l-2 border-primary">
              <div className="mt-0.5 text-primary">
                {stage.icon}
              </div>
              <div className="flex-1">
                <h4 className="mb-1">{stage.label}</h4>
                <p className="text-sm text-muted-foreground">
                  {stage.description}
                </p>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
              />
            </div>
          </motion.div>

          {/* Processing Stages Timeline */}
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground mb-4">Processing Stages:</p>
            {PROCESSING_STAGES.map((s, index) => {
              const isActive = index === currentStage;
              const isComplete = index < currentStage || progress >= 100;
              
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary/10 border border-primary/20'
                      : isComplete
                      ? 'bg-muted/30'
                      : 'opacity-50'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isComplete
                        ? 'bg-green-500 text-white'
                        : isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {isComplete ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <span className="text-xs font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{s.label}</p>
                  </div>
                  {isActive && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              Analysis typically completes in 25-45 seconds
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
