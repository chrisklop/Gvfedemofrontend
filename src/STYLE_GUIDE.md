# GenuVerity Style Guide

A comprehensive guide to component patterns, design conventions, and best practices for the GenuVerity platform.

---

## 📚 Related Documentation

- **[Guidelines.md](/guidelines/Guidelines.md)** - Architecture and development guide
- **[CONTRIBUTING.md](/CONTRIBUTING.md)** - Contribution workflow
- **[THEME.md](/THEME.md)** - Theme system documentation
- **[README.md](/README.md)** - Project overview

---

## 🎨 Design Philosophy

### Core Principles

1. **Minimal & Professional** - Inspired by Google and Claude.ai
2. **Truth-Focused** - Design supports fact-checking purpose
3. **Accessible First** - WCAG AA compliance minimum
4. **Responsive Always** - Mobile, tablet, desktop optimized
5. **Theme Consistent** - Works beautifully in light and dark modes

### Visual Hierarchy

```
Truth (Verdict) > Evidence (Sources) > Process (Methodology) > Actions
```

Users should immediately see:
1. What the verdict is
2. Why it's credible (sources)
3. How we reached it (methodology)
4. What they can do (actions)

---

## 🎯 Component Patterns

### 1. Result Section Components

**Location:** `/components/results/`

#### Pattern: Conditional Rendering

Every result component must gracefully handle missing data:

```typescript
/**
 * Standard pattern for result section components
 * Returns null if data doesn't exist - this is intentional!
 */
export function SectionComponent({ data }: Props) {
  // Always check data first
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return null; // Component simply doesn't render
  }

  return (
    <section className="space-y-4">
      {/* Content */}
    </section>
  );
}
```

**Why?** This allows Results.tsx to render all sections without conditional logic. Missing sections simply don't appear.

#### Pattern: Progressive Disclosure

Use collapsible sections for detailed content:

```typescript
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { ChevronDown } from 'lucide-react';

export function DetailedSection({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center gap-2">
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        <h3>Section Title</h3>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {/* Detailed content */}
      </CollapsibleContent>
    </Collapsible>
  );
}
```

#### Pattern: Show More Lists

For long lists (sources, timeline events):

```typescript
export function LongList({ items }: Props) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 5);

  return (
    <div className="space-y-4">
      {visibleItems.map((item) => (
        <div key={item.id}>{/* Item */}</div>
      ))}
      
      {items.length > 5 && (
        <Button
          variant="ghost"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : `Show ${items.length - 5} More`}
        </Button>
      )}
    </div>
  );
}
```

---

### 2. Layout Components

**Location:** `/components/layouts/`

#### Pattern: Responsive Layout

Desktop → Tablet → Mobile progression:

```typescript
// 3-column desktop, 2-column tablet, 1-column mobile
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <aside className="hidden lg:block">{/* Sidebar */}</aside>
  <main className="md:col-span-1 lg:col-span-2">{/* Content */}</main>
</div>
```

#### Pattern: Sticky Navigation

```typescript
<div className="sticky top-0 z-10 bg-background border-b border-border">
  <Navigation />
</div>
```

---

### 3. Page Components

**Location:** `/pages/`

#### Standard Page Structure

```typescript
import { Navigation } from '../components/Navigation';

export default function PageName() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - consistent across all pages */}
      <Navigation />

      {/* Hero Section (optional) */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <h1 className="mb-6">Page Title</h1>
          <p className="text-xl text-muted-foreground">
            Subtitle or description
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Page content */}
      </section>
    </div>
  );
}
```

#### Pattern: Content Width

Use consistent max-width containers:

```typescript
// Standard content width
<div className="max-w-4xl mx-auto px-6">

// Narrow content (forms, text-heavy)
<div className="max-w-2xl mx-auto px-6">

// Wide content (dashboards, tables)
<div className="max-w-6xl mx-auto px-6">

// Full width (landing pages, hero sections)
<div className="w-full px-6">
```

---

## 🎨 Visual Design

### Typography

**IMPORTANT:** Do NOT override default typography unless explicitly required.

#### Default Styles (from globals.css)

```css
/* These are already defined - DO NOT override */
h1 { /* 3xl, bold, tight line-height */ }
h2 { /* 2xl, semibold */ }
h3 { /* xl, semibold */ }
h4 { /* lg, medium */ }
p  { /* base, normal */ }
```

#### When to Override

```typescript
// ✅ Good - Uses defaults
<h2 className="mb-4">Section Title</h2>

// ✅ Good - Override for specific design need
<h2 className="text-4xl mb-4">Extra Large Hero Title</h2>

// ❌ Bad - Unnecessary override
<h2 className="text-2xl font-semibold mb-4">Section Title</h2>
```

### Color System

#### Semantic Colors (Theme Variables)

Always use semantic color variables from `globals.css`:

```typescript
// ✅ Good - Semantic, theme-aware
<div className="bg-background text-foreground">
<div className="bg-card text-card-foreground border-border">
<div className="bg-muted text-muted-foreground">
<div className="bg-primary text-primary-foreground">

// ❌ Bad - Hardcoded, breaks in dark mode
<div className="bg-white text-black">
<div className="bg-gray-100 text-gray-900">
```

#### Verdict Colors

Special colors for fact-check verdicts:

```typescript
// TRUE - Green
<Badge className="bg-[#10b981] text-white">TRUE</Badge>

// FALSE - Red
<Badge className="bg-[#ef4444] text-white">FALSE</Badge>

// MIXED - Orange
<Badge className="bg-[#f59e0b] text-white">MIXED</Badge>

// UNVERIFIABLE - Gray
<Badge className="bg-[#6b7280] text-white">UNVERIFIABLE</Badge>
```

#### Accent Color

Primary accent: Burnt orange (`#d2562d`)

```typescript
// Used for CTAs, links, important highlights
<Button className="bg-primary text-primary-foreground">
  Find the Truth
</Button>
```

### Spacing

Use consistent spacing scale:

```typescript
// Spacing hierarchy
gap-2  // 0.5rem - Tight (icon + label)
gap-4  // 1rem   - Normal (list items)
gap-6  // 1.5rem - Comfortable (sections)
gap-8  // 2rem   - Spacious (major sections)
gap-12 // 3rem   - Very spacious (page sections)

// Padding/Margin follows same pattern
p-4, p-6, p-8, p-12
mb-4, mb-6, mb-8, mb-12
```

### Border Radius

Consistent corner rounding:

```typescript
rounded-sm   // Subtle (cards, inputs)
rounded-md   // Standard (buttons, badges)
rounded-lg   // Prominent (modals, large cards)
rounded-full // Pills (tags, special buttons)
```

---

## 🧩 Common UI Patterns

### 1. Cards

```typescript
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Optional description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### 2. Badges

```typescript
import { Badge } from '../ui/badge';

// Default
<Badge>Default</Badge>

// Variants
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>

// Custom colors (for verdicts)
<Badge className="bg-[#10b981] text-white">TRUE</Badge>
```

### 3. Buttons

```typescript
import { Button } from '../ui/button';

// Primary action
<Button>Primary Action</Button>

// Secondary action
<Button variant="outline">Secondary Action</Button>

// Subtle action
<Button variant="ghost">Subtle Action</Button>

// Destructive action
<Button variant="destructive">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### 4. Icons

```typescript
import { Search, CheckCircle, AlertCircle } from 'lucide-react';

// With text
<Button>
  <Search className="h-4 w-4 mr-2" />
  Search
</Button>

// Standalone
<CheckCircle className="h-5 w-5 text-green-500" />

// In headings
<h3 className="flex items-center gap-2">
  <AlertCircle className="h-5 w-5" />
  Important Section
</h3>
```

### 5. Loading States

```typescript
import { Skeleton } from '../ui/skeleton';

// While data is loading
{isLoading ? (
  <div className="space-y-4">
    <Skeleton className="h-12 w-full" />
    <Skeleton className="h-8 w-3/4" />
    <Skeleton className="h-8 w-1/2" />
  </div>
) : (
  <RealContent />
)}
```

### 6. Empty States

```typescript
// When no data is available
{data.length === 0 ? (
  <div className="text-center py-12">
    <p className="text-muted-foreground mb-4">
      No sources found for this claim.
    </p>
    <Button variant="outline">Learn More</Button>
  </div>
) : (
  <DataList data={data} />
)}
```

---

## 📱 Responsive Design

### Breakpoints

```typescript
// Tailwind default breakpoints
sm: '640px'   // Small tablets, large phones
md: '768px'   // Tablets
lg: '1024px'  // Small laptops, large tablets
xl: '1280px'  // Laptops, desktops
2xl: '1536px' // Large desktops
```

### Mobile-First Approach

Always start with mobile, then enhance:

```typescript
// ✅ Good - Mobile-first
<div className="flex flex-col md:flex-row lg:grid lg:grid-cols-3">

// ❌ Bad - Desktop-first
<div className="grid grid-cols-3 lg:flex-row md:flex-col">
```

### Common Responsive Patterns

```typescript
// Hide on mobile, show on desktop
<div className="hidden md:block">Desktop Only</div>

// Show on mobile, hide on desktop
<div className="md:hidden">Mobile Only</div>

// Different layouts per breakpoint
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Responsive padding
<div className="p-4 md:p-6 lg:p-8">

// Responsive text size
<h1 className="text-2xl md:text-3xl lg:text-4xl">
```

### Touch Targets

Ensure minimum 44px touch targets on mobile:

```typescript
// ✅ Good - Large enough for touch
<button className="h-11 px-4 md:h-9 md:px-3">
  Tap Me
</button>

// ❌ Bad - Too small for touch
<button className="h-6 px-2">
  Tap Me
</button>
```

---

## ♿ Accessibility

### Semantic HTML

Always use semantic elements:

```typescript
// ✅ Good - Semantic
<nav>
  <ul>
    <li><a href="/mission">Mission</a></li>
  </ul>
</nav>

// ❌ Bad - Divitis
<div className="nav">
  <div className="list">
    <div className="item">
      <div onClick={() => navigate('/mission')}>Mission</div>
    </div>
  </div>
</div>
```

### ARIA Labels

Add labels for screen readers:

```typescript
// Icon-only buttons
<Button aria-label="Close dialog">
  <X className="h-4 w-4" />
</Button>

// Form inputs
<label htmlFor="claim-input" className="sr-only">
  Enter claim to verify
</label>
<Input id="claim-input" placeholder="Enter a claim..." />

// Navigation landmarks
<nav aria-label="Main navigation">
  {/* Links */}
</nav>
```

### Keyboard Navigation

Ensure all interactions work via keyboard:

```typescript
// ✅ Good - Keyboard accessible
<button onClick={handleClick} onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick();
  }
}}>
  Click Me
</button>

// ✅ Good - Built-in keyboard support
<Button onClick={handleClick}>Click Me</Button>

// ❌ Bad - Not keyboard accessible
<div onClick={handleClick}>Click Me</div>
```

### Focus States

Always show focus indicators:

```typescript
// ✅ Good - Visible focus state (Shadcn default)
<Button>Focus Visible</Button>

// ❌ Bad - Hidden focus state
<button className="focus:outline-none">
  No Focus Indicator
</button>
```

### Color Contrast

Maintain WCAG AA contrast ratios (4.5:1 for normal text):

```typescript
// ✅ Good - High contrast
<p className="text-foreground">High contrast text</p>

// ⚠️ Check - Ensure sufficient contrast
<p className="text-muted-foreground">Muted text - verify contrast</p>

// ❌ Bad - Insufficient contrast
<p className="text-gray-300 dark:text-gray-700">Low contrast</p>
```

---

## 🎭 Theme Support

### Using Theme Variables

Always use CSS variables for colors:

```typescript
// ✅ Good - Theme-aware
<div className="bg-background text-foreground border-border">

// ❌ Bad - Theme-breaking
<div className="bg-white text-black border-gray-200">
```

### Testing Both Themes

Every component must work in both light and dark modes:

```typescript
// During development
1. Build component in light mode
2. Switch to dark mode via ThemeToggle
3. Verify colors, contrast, readability
4. Adjust if necessary
```

### Common Theme Issues

```typescript
// ❌ Problem: Hardcoded shadow only works in light mode
<div className="shadow-lg bg-white">

// ✅ Solution: Use theme-aware shadow
<div className="shadow-lg bg-card">

// ❌ Problem: Image doesn't work in dark mode
<img src="logo-dark.png" />

// ✅ Solution: Use CSS filter or separate images
<img 
  src={theme === 'dark' ? 'logo-light.png' : 'logo-dark.png'}
  alt="GenuVerity"
/>
```

---

## 📊 Data Visualization

### Charts (Recharts)

```typescript
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Standard pattern for charts
<ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie
      data={chartData}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={80}
    >
      {chartData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
  </PieChart>
</ResponsiveContainer>
```

### Quality Indicators

Use progress bars for scores:

```typescript
import { Progress } from '../ui/progress';

<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Source Agreement</span>
    <span className="font-medium">95%</span>
  </div>
  <Progress value={95} className="h-2" />
</div>
```

---

## 🔧 Component Checklist

Before marking a component complete:

### Functionality
- [ ] Handles missing data gracefully (returns null)
- [ ] TypeScript interface defined
- [ ] Props have default values where appropriate
- [ ] Event handlers follow naming convention (handleClick, handleSubmit)

### Styling
- [ ] Uses Tailwind utility classes
- [ ] No hardcoded colors (uses theme variables)
- [ ] No font size/weight overrides (unless necessary)
- [ ] Responsive on all screen sizes
- [ ] Works in both light and dark themes

### Accessibility
- [ ] Semantic HTML elements
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast meets WCAG AA
- [ ] Touch targets 44px minimum (mobile)

### Documentation
- [ ] JSDoc comment for component
- [ ] Complex logic has inline comments
- [ ] Props documented with descriptions
- [ ] Example usage provided

### Performance
- [ ] No unnecessary re-renders
- [ ] Long lists use virtualization (if needed)
- [ ] Images have alt text and loading state
- [ ] Heavy computation memoized

---

## 📝 Documentation Standards

### Component Documentation

```typescript
/**
 * Displays a comprehensive verdict header with claim, verdict badge, and metadata
 * 
 * This component appears at the top of every fact-check result page and provides
 * the user with immediate context about the claim being analyzed.
 * 
 * @component
 * @example
 * ```tsx
 * <VerdictHeader
 *   claim="Vaccines cause autism"
 *   verdict="FALSE"
 *   confidence={98}
 *   analysisTime="38s"
 * />
 * ```
 * 
 * @see {@link /guidelines/Guidelines.md#result-components} for component guidelines
 */
interface VerdictHeaderProps {
  /** The claim being fact-checked */
  claim: string;
  /** The verdict (TRUE, FALSE, MIXED, or UNVERIFIABLE) */
  verdict: VerdictType;
  /** Confidence score from 0-100 */
  confidence: number;
  /** Time taken for analysis (e.g., "38s") */
  analysisTime: string;
}
```

---

## 🎯 Design Review Checklist

Before finalizing a design:

### Visual Design
- [ ] Follows minimal, professional aesthetic
- [ ] Consistent with Google/Claude.ai inspiration
- [ ] Supports truth-focused purpose
- [ ] Clean hierarchy (verdict > evidence > process > actions)

### User Experience
- [ ] Information progressive disclosure
- [ ] Clear call-to-action buttons
- [ ] Intuitive navigation
- [ ] Fast perceived performance

### Technical Quality
- [ ] Meets all component checklist items
- [ ] Cross-browser tested
- [ ] Mobile responsive
- [ ] Theme support verified

---

## 📚 Additional Resources

- **Tailwind Documentation:** https://tailwindcss.com/docs
- **Shadcn/ui Components:** https://ui.shadcn.com
- **Lucide Icons:** https://lucide.dev
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/

---

**Last Updated:** October 22, 2025  
**Maintained by:** GenuVerity Design Team
