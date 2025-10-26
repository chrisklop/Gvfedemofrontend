/**
 * AnalysisProgress Component
 * 
 * Displays a professional, lightly animated progress indicator during fact-check analysis.
 * Shows processing stages aligned with Constitutional AI principles and provides
 * real-time feedback on the 25-45 second analysis process.
 * 
 * Features:
 * - Animated progress bar with smooth transitions
 * - Seven-stage processing visualization (Constitutional AI pipeline)
 * - Estimated time remaining
 * - Claim preview
 * - Theme-aware animations and colors
 * - Responsive design optimized for desktop, tablet, and mobile
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

import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Shield, Search, FileCheck, Scale, Lightbulb, CheckCircle2, Info, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';

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
  /** Optional estimated duration in seconds (default: 32s, range: 25-45s) */
  estimatedDuration?: number;
}

/**
 * Eight processing stages aligned with Constitutional AI pipeline (from Guidelines.md)
 * Total percentages sum to 100%
 * 
 * Based on documented average times at ~32s total:
 * 1. Query Input: ~1s (3.1%)
 * 2. LLM Domain Categorization: ~1.5s (4.7%)
 * 3. Semantic Cache Check: ~0.5s (1.6%)
 * 4. Source Aggregation: 8.8s avg (27.5%)
 * 5. Source Ranking: 3s avg (9.4%)
 * 6. LLM Source Analysis: 8-12s avg = 10s (31.3%)
 * 7. Constitutional AI Check: 4s avg (12.5%)
 * 8. Verdict: ~3.2s (10%)
 */
const PROCESSING_STAGES: ProcessingStage[] = [
  {
    id: 'input',
    label: 'Query Input',
    description: 'Processing and validating user query',
    icon: <Search className="h-5 w-5" />,
    duration: 3.1, // ~1s
  },
  {
    id: 'llm-categorization',
    label: 'LLM Domain Categorization',
    description: 'Understanding claim and creating semantic fingerprint',
    icon: <Lightbulb className="h-5 w-5" />,
    duration: 4.7, // ~1.5s (0-2s range)
  },
  {
    id: 'cache-check',
    label: 'Semantic Cache Check',
    description: 'Checking for similar cached results',
    icon: <CheckCircle2 className="h-5 w-5" />,
    duration: 1.6, // ~0.5s (<1s)
  },
  {
    id: 'aggregating',
    label: 'Source Aggregation',
    description: 'Parallel search across 3M+ sources (322+ found)',
    icon: <FileCheck className="h-5 w-5" />,
    duration: 27.5, // 8.8s avg
  },
  {
    id: 'ranking',
    label: 'Source Ranking',
    description: 'Quick credibility analysis on all 322+ sources',
    icon: <Scale className="h-5 w-5" />,
    duration: 9.4, // 3s avg
  },
  {
    id: 'llm-source-analysis',
    label: 'LLM Source Analysis',
    description: 'Evidence synthesis on highest-credibility sources',
    icon: <Lightbulb className="h-5 w-5" />,
    duration: 31.3, // 10s avg (8-12s range)
  },
  {
    id: 'constitutional-ai',
    label: 'Constitutional AI Check',
    description: 'Compliance validation across 5 principles',
    icon: <Shield className="h-5 w-5" />,
    duration: 12.5, // 4s avg
  },
  {
    id: 'verdict',
    label: 'Verdict',
    description: 'Finalizing and caching results',
    icon: <CheckCircle2 className="h-5 w-5" />,
    duration: 10.0, // ~3.2s
  },
];

export function AnalysisProgress({
  claim,
  onComplete,
  onError,
  estimatedDuration = 32,
}: AnalysisProgressProps) {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(estimatedDuration);
  const [isComplete, setIsComplete] = useState(false);
  const currentStageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Auto-scroll to keep current stage visible at the bottom
  useEffect(() => {
    if (currentStageRef.current && containerRef.current) {
      const container = containerRef.current;
      const element = currentStageRef.current;
      
      // Calculate the position to scroll to
      // We want the element to be at the bottom of the viewport
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      
      // Scroll to position the current stage near the bottom
      const scrollTop = element.offsetTop - containerRect.height + elementRect.height + 100;
      
      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  }, [currentStage]);

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
    <div 
      ref={containerRef}
      className="flex-1 overflow-y-auto bg-gradient-to-b from-background to-muted/20"
    >
      <div className="min-h-full flex items-start justify-center px-4 py-8 md:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl space-y-6"
        >
          {/* Simulation Alert */}
          <Alert className="bg-blue-500/10 border-blue-500/20 shadow-sm">
            <Info className="h-4 w-4 text-blue-500" />
            <AlertDescription className="text-sm">
              <strong className="text-foreground">Demo Mode:</strong> This is a simulation of our analysis process using a sample query. In production, this would analyze your actual claim in real-time.
            </AlertDescription>
          </Alert>

          {/* Main Progress Card */}
          <Card className="overflow-hidden shadow-lg border-2">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 md:p-8 border-b">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20"
                  >
                    <Shield className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h2 className="mb-1" style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.2 }}>Analyzing Claim</h2>
                    <p className="text-sm md:text-base text-muted-foreground" style={{ lineHeight: 1.5 }}>
                      Applying Constitutional AI fact-checking
                    </p>
                  </div>
                </div>
                
                {/* Time Remaining Badge */}
                <div className="flex items-center gap-2 self-start">
                  {isComplete ? (
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm" style={{ fontWeight: 500 }}>Complete</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm" style={{ fontWeight: 500 }}>~{timeRemaining}s</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Claim Display */}
            <div className="p-6 md:p-8 bg-background">
              <div className="p-4 md:p-5 bg-muted/50 rounded-lg border border-border">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>Your Claim</p>
                <p className="text-base md:text-lg italic" style={{ lineHeight: 1.6 }}>&ldquo;{claim}&rdquo;</p>
              </div>
            </div>

            {/* Progress Bar Section */}
            <div className="px-6 md:px-8 pb-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-base md:text-lg" style={{ fontWeight: 600 }}>
                    {isComplete ? 'Analysis Complete!' : `${Math.round(progress)}% Complete`}
                  </span>
                  <span className="text-sm text-muted-foreground" style={{ fontWeight: 500 }}>
                    Step {currentStage + 1} of {PROCESSING_STAGES.length}
                  </span>
                </div>
                <Progress value={progress} className="h-3 md:h-3.5" />
              </div>
            </div>

            {/* Current Stage Highlight */}
            <div className="px-6 md:px-8 pb-6">
              <motion.div
                key={currentStage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg" />
                <div className="relative flex items-start gap-4 p-4 md:p-5 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-2 border-primary/30">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <div className="text-primary-foreground">
                      {stage.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-1" style={{ fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.3 }}>{stage.label}</h3>
                    <p className="text-sm md:text-base text-muted-foreground" style={{ lineHeight: 1.5 }}>
                      {stage.description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 border-3 border-primary border-t-transparent rounded-full"
                  />
                </div>
              </motion.div>
            </div>

            {/* Processing Stages Timeline */}
            <div className="px-6 md:px-8 pb-8">
              <h4 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground" style={{ fontWeight: 600, letterSpacing: '0.05em' }}>
                Processing Pipeline
              </h4>
              <div className="space-y-2">
                {PROCESSING_STAGES.map((s, index) => {
                  const isActive = index === currentStage;
                  const isCompleteStage = index < currentStage || progress >= 100;
                  
                  return (
                    <motion.div
                      key={s.id}
                      ref={isActive ? currentStageRef : null}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`relative flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-primary/10 border-2 border-primary/30 shadow-md scale-[1.02]'
                          : isCompleteStage
                          ? 'bg-muted/40 border border-border/50'
                          : 'bg-background border border-border/30 opacity-60'
                      }`}
                    >
                      {/* Stage Number/Status */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isCompleteStage
                            ? 'bg-green-500 text-white shadow-md'
                            : isActive
                            ? 'bg-primary text-primary-foreground shadow-md'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {isCompleteStage ? (
                          <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" />
                        ) : (
                          <span className="text-xs md:text-sm" style={{ fontWeight: 600 }}>{index + 1}</span>
                        )}
                      </div>
                      
                      {/* Stage Label */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm md:text-base truncate ${
                          isActive ? 'text-foreground' : 'text-foreground/80'
                        }`} style={{ fontWeight: 500 }}>
                          {s.label}
                        </p>
                      </div>
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-2.5 h-2.5 bg-primary rounded-full shadow-lg"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Footer Note */}
            <div className="px-6 md:px-8 pb-6 md:pb-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <p className="text-xs md:text-sm text-muted-foreground">
                  Analysis typically completes in 25-45 seconds
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
