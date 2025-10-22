# Analysis Progress Indicator Guide

Complete documentation for the `AnalysisProgress` component - the animated progress screen shown during fact-check analysis.

---

## 📍 Location

**Component:** `/components/AnalysisProgress.tsx`  
**Used in:** `/pages/Home.tsx`  
**Integrated:** October 22, 2025

---

## 🎯 Purpose

Provides users with real-time feedback during the 25-45 second fact-check analysis process. Shows detailed processing stages aligned with Constitutional AI principles while maintaining GenuVerity's minimal, professional aesthetic.

---

## ✨ Features

### Visual Elements

1. **Animated Progress Bar**
   - Shows 0-100% completion
   - Smooth transition animations
   - Color-coded with theme support

2. **Five Processing Stages**
   - Understanding Claim (5% of time)
   - Aggregating Sources (35% of time)
   - Analyzing Evidence (40% of time)
   - Synthesizing Verdict (15% of time)
   - Validating Compliance (5% of time)

3. **Real-Time Information**
   - Current percentage complete
   - Time remaining in seconds
   - Active stage with description
   - Stage-by-stage completion checklist

4. **Claim Display**
   - Shows the claim being analyzed
   - Formatted with quotation marks
   - Muted background for readability

5. **Animated Indicators**
   - Rotating spinner on active stage
   - Pulsing dot for current activity
   - Smooth stage transitions
   - Checkmarks for completed stages

---

## 🎨 Design Principles

### Animation Philosophy

**Subtle, Professional, Purposeful**

- ✅ Smooth fade-ins and transitions
- ✅ Rotating spinner (2s loop)
- ✅ Pulsing indicator on active stage
- ✅ Scale animation on completion icons
- ❌ No flashy effects
- ❌ No distracting movements
- ❌ No excessive color changes

### Color System

**Theme-Aware Throughout**

```typescript
// Primary elements
bg-primary/10     // Accent backgrounds
border-primary    // Active stage borders
text-primary      // Active icons

// Completed stages
bg-green-500      // Success indicator
text-white        // Checkmark color

// Inactive stages
opacity-50        // Muted appearance
bg-muted          // Subtle background
```

### Responsive Behavior

- **Mobile (<768px)**: Compact padding, smaller icons
- **Tablet (768-1024px)**: Medium padding
- **Desktop (>1024px)**: Full padding and spacing

---

## 📝 Usage

### Basic Implementation

```typescript
import { AnalysisProgress } from '../components/AnalysisProgress';

function Home() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    setIsAnalyzing(true);
  };

  const handleComplete = (resultId: string) => {
    navigate(`/verify/${resultId}`);
  };

  if (isAnalyzing) {
    return (
      <AnalysisProgress
        claim={searchQuery}
        onComplete={handleComplete}
      />
    );
  }

  return <SearchInterface />;
}
```

### With API Integration

```typescript
import { AnalysisProgress } from '../components/AnalysisProgress';
import { submitFactCheck } from '../services/api';

function Home() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [resultId, setResultId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = async (claim: string) => {
    setIsAnalyzing(true);
    
    try {
      // Submit to backend API
      const response = await submitFactCheck(claim);
      setResultId(response.id);
      
      // Progress component will continue showing until onComplete is called
      // When backend responds, trigger completion
      handleComplete(response.id);
    } catch (error) {
      handleError(error.message);
    }
  };

  const handleComplete = (id: string) => {
    navigate(`/verify/${id}`);
  };

  const handleError = (error: string) => {
    setIsAnalyzing(false);
    // Show error toast or message
  };

  if (isAnalyzing) {
    return (
      <AnalysisProgress
        claim={searchQuery}
        onComplete={handleComplete}
        onError={handleError}
        estimatedDuration={38}
      />
    );
  }

  return <SearchInterface onSubmit={handleSearch} />;
}
```

### With Custom Duration

```typescript
<AnalysisProgress
  claim="Does coffee improve focus?"
  onComplete={handleComplete}
  estimatedDuration={42} // Override default 38 seconds
/>
```

---

## 🔧 Props API

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `claim` | `string` | The claim being analyzed - displayed to user |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onComplete` | `(id: string) => void` | `undefined` | Callback when analysis completes, receives result ID |
| `onError` | `(error: string) => void` | `undefined` | Callback if analysis fails, receives error message |
| `estimatedDuration` | `number` | `38` | Expected duration in seconds (25-45 range) |

---

## 🎬 Animation Details

### Timing Functions

```typescript
// Fade in on mount
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
duration: 0.5s

// Stage transitions
initial: { opacity: 0, x: -10 }
animate: { opacity: 1, x: 0 }
duration: 0.3s

// Rotating spinner
animate: { rotate: 360 }
duration: 2s
repeat: Infinity
ease: linear

// Pulsing indicator
animate: { scale: [1, 1.2, 1] }
duration: 1.5s
repeat: Infinity
```

### Performance Considerations

- Uses `requestAnimationFrame` via Motion library
- Smooth 60fps animations on modern browsers
- Graceful degradation on older browsers
- No layout shifts or repaints
- Minimal CPU usage

---

## 🧪 Testing Checklist

Before deploying changes:

### Functionality
- [ ] Progress advances from 0-100%
- [ ] Time remaining counts down correctly
- [ ] Stages update at correct percentages
- [ ] `onComplete` callback fires at 100%
- [ ] Custom duration works correctly

### Visual
- [ ] Animations are smooth, not janky
- [ ] Claim text displays correctly
- [ ] Icons render properly
- [ ] Progress bar fills completely
- [ ] Checkmarks appear on completed stages

### Responsive
- [ ] Works on mobile (320px+)
- [ ] Works on tablet (768px+)
- [ ] Works on desktop (1024px+)
- [ ] Text doesn't overflow
- [ ] Touch targets are 44px minimum

### Theme
- [ ] Works in light mode
- [ ] Works in dark mode
- [ ] No contrast issues
- [ ] Primary color shows correctly
- [ ] Muted text is readable

### Accessibility
- [ ] Keyboard accessible (if needed)
- [ ] Screen reader announces progress (if needed)
- [ ] Focus states visible
- [ ] Color contrast meets WCAG AA

---

## 🎨 Customization

### Changing Stage Durations

Edit the `PROCESSING_STAGES` array in `AnalysisProgress.tsx`:

```typescript
const PROCESSING_STAGES: ProcessingStage[] = [
  {
    id: 'understanding',
    label: 'Understanding Claim',
    description: 'Analyzing claim structure and domain',
    icon: <Search className="h-5 w-5" />,
    duration: 5, // Change this percentage
  },
  // ... other stages
];
```

**Important:** Total durations must sum to 100%.

### Adding New Stages

```typescript
const PROCESSING_STAGES: ProcessingStage[] = [
  // ... existing stages
  {
    id: 'new-stage',
    label: 'New Stage Name',
    description: 'What this stage does',
    icon: <YourIcon className="h-5 w-5" />,
    duration: 10, // Percentage of total time
  },
];
```

Remember to:
1. Add icon import from `lucide-react`
2. Adjust other stage durations to total 100%
3. Test timing feels right

### Changing Colors

Uses theme variables - to customize:

**Option 1: Use different theme variable**
```typescript
// Change from primary to secondary
<div className="bg-secondary/10 border-secondary">
```

**Option 2: Add custom color**
```css
/* In globals.css */
:root {
  --analysis-accent: 200 100% 50%;
}

.dark {
  --analysis-accent: 200 80% 40%;
}
```

```typescript
// In component
<div className="bg-analysis-accent/10">
```

### Adjusting Animation Speed

```typescript
// Slower fade-in
transition={{ duration: 1.0 }} // was 0.5

// Faster spinner
transition={{ duration: 1, repeat: Infinity }} // was 2

// Slower pulse
transition={{ duration: 3, repeat: Infinity }} // was 1.5
```

---

## 🐛 Troubleshooting

### Progress doesn't advance

**Cause:** `useEffect` dependency issue or timer cleanup

**Fix:** Ensure `estimatedDuration` is in dependency array:
```typescript
useEffect(() => {
  // timer logic
}, [estimatedDuration]); // Must include this
```

### Animations are janky

**Cause:** Too many simultaneous animations or heavy re-renders

**Fix:** 
1. Reduce animation complexity
2. Use `useMemo` for expensive calculations
3. Ensure parent components aren't re-rendering

### Stage doesn't update

**Cause:** Percentage thresholds incorrect

**Fix:** Verify `PROCESSING_STAGES` durations sum to 100%:
```typescript
// Quick check
const total = PROCESSING_STAGES.reduce((sum, s) => sum + s.duration, 0);
console.log(total); // Should be 100
```

### Time remaining shows negative

**Cause:** Timer continues after 0

**Fix:** Already handled with guard:
```typescript
setTimeRemaining((prev) => {
  if (prev <= 0) return 0; // Guard against negatives
  return prev - 1;
});
```

---

## 📊 Analytics Integration

### Tracking Progress Events

```typescript
import { AnalysisProgress } from '../components/AnalysisProgress';
import { trackEvent } from '../services/analytics';

<AnalysisProgress
  claim={claim}
  onComplete={(id) => {
    trackEvent('analysis_complete', {
      claim_length: claim.length,
      result_id: id,
    });
    navigate(`/verify/${id}`);
  }}
  onError={(error) => {
    trackEvent('analysis_error', {
      error_message: error,
      claim_length: claim.length,
    });
  }}
/>
```

### Measuring Stage Times

Add timing tracking inside the component:

```typescript
// In AnalysisProgress.tsx
useEffect(() => {
  const stageStartTime = Date.now();
  
  return () => {
    const stageDuration = Date.now() - stageStartTime;
    analytics.track('stage_duration', {
      stage: stage.id,
      duration_ms: stageDuration,
    });
  };
}, [currentStage]);
```

---

## 🔄 Future Enhancements

### Planned Features

- [ ] **Real-time backend updates** - WebSocket integration for actual progress
- [ ] **Cancellation** - Allow users to cancel analysis
- [ ] **Pause/Resume** - Pause analysis if needed
- [ ] **Source preview** - Show sources as they're found
- [ ] **Error recovery** - Automatic retry on failure
- [ ] **Progress persistence** - Resume if page reloads
- [ ] **Estimated completion** - ML-based time prediction
- [ ] **Detailed logs** - Expandable technical details

### Possible Improvements

- **Sound effects** - Subtle completion sound (optional)
- **Haptic feedback** - Mobile vibration on stage change
- **Confetti animation** - Celebration on completion
- **Progress graph** - Visual chart of processing speed
- **Comparison mode** - Show multiple claims simultaneously

---

## 📝 Code Quality

### TypeScript Coverage

- ✅ All props typed with interfaces
- ✅ State variables typed explicitly
- ✅ Event handlers typed correctly
- ✅ No `any` types used

### Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels where appropriate
- ✅ Color contrast meets WCAG AA
- ⚠️ Consider adding `role="progressbar"` and `aria-valuenow`

### Performance

- ✅ No unnecessary re-renders
- ✅ Cleanup intervals on unmount
- ✅ Efficient state updates
- ✅ Memoized calculations (if needed)

---

## 🔗 Related Documentation

- **[STYLE_GUIDE.md](/STYLE_GUIDE.md)** - Animation guidelines
- **[THEME.md](/THEME.md)** - Color system
- **[Guidelines.md](/guidelines/Guidelines.md)** - Processing specifications
- **[Motion documentation](https://motion.dev)** - Animation library
- **[Lucide Icons](https://lucide.dev)** - Icon library

---

## 📞 Support

Questions about the progress indicator?

- **Implementation:** See component code with inline comments
- **Styling:** See [STYLE_GUIDE.md](/STYLE_GUIDE.md)
- **Theming:** See [THEME.md](/THEME.md)
- **General:** Create an issue or contact dev team

---

**Created:** October 22, 2025  
**Last Updated:** October 22, 2025  
**Maintained by:** GenuVerity Development Team
