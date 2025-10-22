# Contributing to GenuVerity

Thank you for your interest in contributing to GenuVerity! This guide will help you understand our development workflow, coding standards, and best practices.

---

## 📚 Required Reading

Before contributing, please familiarize yourself with:

- **[README.md](/README.md)** - Project overview and quick start
- **[Guidelines.md](/guidelines/Guidelines.md)** - Complete architecture guide
- **[STYLE_GUIDE.md](/STYLE_GUIDE.md)** - Component patterns and conventions
- **[THEME.md](/THEME.md)** - Theme system documentation
- **[CHANGELOG.md](/CHANGELOG.md)** - Recent changes and updates

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- TypeScript knowledge
- React 18 experience
- Familiarity with Tailwind CSS
- Understanding of Constitutional AI principles (see [Mission.tsx](/pages/Mission.tsx))

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/genuverity/platform.git
   cd platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Review the codebase**
   - Read through `/guidelines/Guidelines.md`
   - Explore `/types/index.ts` for data structures
   - Check `/data/mockResults.ts` for example data

---

## 🎯 Development Workflow

### Branch Naming

Use descriptive branch names following this pattern:

```
<type>/<short-description>

Examples:
- feature/add-pdf-export
- fix/verdict-color-bug
- docs/update-api-guide
- refactor/source-list-component
```

**Types:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/updates
- `chore/` - Maintenance tasks

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

Examples:
- feat(results): add PDF export functionality
- fix(theme): correct dark mode contrast ratios
- docs(api): update endpoint specifications
- refactor(sources): simplify tier logic
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting (no code change)
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance

---

## 📝 Code Standards

### TypeScript

#### Always Use Strict Types

```typescript
// ✅ Good
interface SourceListProps {
  sources: Source[];
  maxVisible?: number;
}

// ❌ Bad
interface SourceListProps {
  sources: any;
  maxVisible: number | undefined;
}
```

#### Prefer Interfaces Over Types for Objects

```typescript
// ✅ Good
interface User {
  id: string;
  name: string;
}

// ⚠️ Acceptable for unions/primitives
type VerdictType = 'TRUE' | 'FALSE' | 'MIXED' | 'UNVERIFIABLE';
```

#### Use JSDoc for Complex Functions

```typescript
/**
 * Calculates Constitutional AI compliance score
 * 
 * @param principles - Array of principle scores (0-100)
 * @returns Overall compliance percentage (0-100)
 * @throws {Error} If principles array is empty
 * 
 * @example
 * calculateCompliance([95, 87, 92, 88, 90]) // Returns 90.4
 */
function calculateCompliance(principles: number[]): number {
  // Implementation
}
```

### React Components

#### Component Structure

Follow this order for component organization:

```typescript
// 1. Imports
import { useState } from 'react';
import { Button } from '../ui/button';
import { Source } from '../../types';

// 2. Type definitions
interface ComponentProps {
  data: Source[];
  onSelect?: (id: string) => void;
}

// 3. Component
export function Component({ data, onSelect }: ComponentProps) {
  // 4. Hooks
  const [selected, setSelected] = useState<string | null>(null);

  // 5. Event handlers
  const handleClick = (id: string) => {
    setSelected(id);
    onSelect?.(id);
  };

  // 6. Early returns
  if (!data || data.length === 0) return null;

  // 7. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

#### Always Return Null for Missing Data

```typescript
// ✅ Good - Modular component pattern
export function SourceList({ sources }: SourceListProps) {
  if (!sources || sources.length === 0) return null;
  return <div>{/* Content */}</div>;
}

// ❌ Bad - Renders empty div
export function SourceList({ sources }: SourceListProps) {
  return <div>{sources?.map(...)}</div>;
}
```

#### Use Meaningful Prop Names

```typescript
// ✅ Good
interface VerdictHeaderProps {
  claim: string;
  verdict: VerdictType;
  confidence: number;
  analysisTime: string;
}

// ❌ Bad
interface VerdictHeaderProps {
  text: string;
  result: string;
  score: number;
  time: string;
}
```

### Tailwind CSS

#### Follow the Typography Guidelines

**IMPORTANT:** Do NOT override default typography unless explicitly needed.

```typescript
// ✅ Good - Uses default h2 styling
<h2 className="mb-4">Section Title</h2>

// ❌ Bad - Overrides default typography
<h2 className="text-2xl font-bold mb-4">Section Title</h2>
```

#### Use Semantic Spacing

```typescript
// ✅ Good - Consistent spacing scale
<div className="space-y-6">
  <section className="mb-8">
  </section>
</div>

// ❌ Bad - Arbitrary values
<div className="mb-[23px]">
  <section className="mt-[47px]">
  </section>
</div>
```

#### Follow Color System

Use CSS variables from `globals.css`:

```typescript
// ✅ Good - Uses theme variables
<div className="bg-background text-foreground border-border">

// ❌ Bad - Hardcoded colors
<div className="bg-white text-black border-gray-200">
```

---

## 🧩 Component Guidelines

### Result Components (`/components/results/`)

All result components must follow these rules:

1. **Import types from `/types/index.ts`**
2. **Define clear prop interfaces with JSDoc**
3. **Return null if data is missing**
4. **Use consistent Tailwind classes**
5. **Follow accessibility standards**

#### Template

```typescript
import { Source } from '../../types';

/**
 * Displays a list of sources organized by credibility tier
 * 
 * @component
 * @example
 * <SourceList sources={factCheckResult.sources} maxVisible={5} />
 */
interface SourceListProps {
  /** Array of source objects to display */
  sources?: Source[];
  /** Maximum number of sources to show initially (optional) */
  maxVisible?: number;
}

export function SourceList({ sources, maxVisible = 10 }: SourceListProps) {
  // Early return for missing data
  if (!sources || sources.length === 0) return null;
  
  return (
    <div className="space-y-4">
      {/* Component implementation */}
    </div>
  );
}
```

### UI Components (`/components/ui/`)

**Do NOT modify Shadcn components** unless absolutely necessary.

If customization is needed:
1. Wrap the component instead of editing
2. Document why the change is necessary
3. Maintain accessibility features

```typescript
// ✅ Good - Wrapper component
export function CustomButton({ children, ...props }: ButtonProps) {
  return (
    <Button className="custom-class" {...props}>
      {children}
    </Button>
  );
}

// ❌ Bad - Modifying Shadcn component directly
// Editing /components/ui/button.tsx
```

---

## 🎨 Styling Conventions

### Color Usage

Follow the verdict color system:

```typescript
// Verdict colors (defined in globals.css)
const verdictColors = {
  TRUE: '#10b981',    // Green
  FALSE: '#ef4444',   // Red
  MIXED: '#f59e0b',   // Orange
  UNVERIFIABLE: '#6b7280' // Gray
};
```

### Responsive Design

Use mobile-first approach:

```typescript
// ✅ Good - Mobile-first
<div className="flex flex-col md:flex-row lg:grid lg:grid-cols-3">

// ❌ Bad - Desktop-first
<div className="grid grid-cols-3 lg:flex-row md:flex-col">
```

### Dark Mode Support

Always test both themes:

```typescript
// ✅ Good - Uses theme variables
<div className="bg-card text-card-foreground">

// ❌ Bad - Only works in light mode
<div className="bg-white text-black">
```

---

## 📊 Data Standards

### Mock Data (`/data/mockResults.ts`)

When creating mock data:

```typescript
// Required standards
{
  analysisTime: '38s',        // Must be 25-45 seconds
  totalSourceCount: 327,      // Should be around 322
  verdict: 'FALSE',           // Must be: TRUE, FALSE, MIXED, UNVERIFIABLE
  confidence: 98,             // Range: 0-100
  constitutionalAI: {
    overallScore: 94,         // Must meet 87% minimum
    // Individual scores...
  }
}
```

### API Response Format

Follow the structure in `/pages/ApiDocs.tsx`:

```typescript
// See ApiDocs.tsx for complete specification
{
  verdict: { verdict, confidence, summary },
  source_statistics: { total_sources_found, processing_time_ms },
  sources: [...],
  constitutional_ai_compliance: {...}
}
```

---

## ✅ Quality Checklist

Before submitting a PR, verify:

### Code Quality
- [ ] TypeScript strict mode passes (no `any` types)
- [ ] No console.log statements in production code
- [ ] All imports are used
- [ ] No unused variables
- [ ] Functions have clear, descriptive names
- [ ] Complex logic has inline comments

### Component Quality
- [ ] Component returns null for missing data
- [ ] Props have TypeScript interfaces
- [ ] JSDoc comments for public components
- [ ] Accessibility attributes (ARIA labels)
- [ ] Keyboard navigation works
- [ ] Focus states visible

### Styling Quality
- [ ] Uses Tailwind utility classes
- [ ] Follows color system from globals.css
- [ ] No font-size/weight/line-height overrides (unless needed)
- [ ] Responsive on mobile, tablet, desktop
- [ ] Works in both light and dark themes
- [ ] No hardcoded colors

### Documentation Quality
- [ ] README.md updated (if needed)
- [ ] Guidelines.md updated (if architectural change)
- [ ] CHANGELOG.md entry added
- [ ] Inline comments for complex logic
- [ ] Cross-references added where relevant

### Testing Quality
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Tested on mobile devices
- [ ] Tested with screen reader (basic)
- [ ] Tested keyboard navigation
- [ ] Theme toggle works correctly
- [ ] No console errors

---

## 🐛 Bug Reports

### Required Information

When reporting bugs, include:

1. **Description** - Clear description of the issue
2. **Steps to Reproduce** - Exact steps to trigger the bug
3. **Expected Behavior** - What should happen
4. **Actual Behavior** - What actually happens
5. **Screenshots** - Visual evidence if applicable
6. **Environment** - Browser, OS, screen size
7. **Console Logs** - Any error messages

### Example Bug Report

```markdown
**Description:**
Theme toggle doesn't persist after page refresh

**Steps to Reproduce:**
1. Open GenuVerity homepage
2. Click theme toggle to switch to dark mode
3. Refresh the page
4. Observe theme resets to light mode

**Expected Behavior:**
Theme should persist across page refreshes using localStorage

**Actual Behavior:**
Theme resets to light mode

**Environment:**
- Browser: Chrome 119
- OS: macOS 14.1
- Screen: 1920x1080

**Console Logs:**
localStorage is not defined (server-side)
```

---

## 💡 Feature Requests

### Template

```markdown
**Feature Name:**
PDF Export for Results

**Problem Statement:**
Users want to save fact-check results for offline reference

**Proposed Solution:**
Add "Download PDF" button to ActionButtons component that generates
a formatted PDF with verdict, sources, and Constitutional AI scores

**Alternatives Considered:**
- Browser print (less control over formatting)
- Export to JSON (not user-friendly)

**Implementation Notes:**
- Use jsPDF or similar library
- Include GenuVerity branding
- Maintain accessibility in generated PDF

**References:**
- Similar feature in: [competitor example]
- User request: [link to discussion]
```

---

## 📖 Documentation Standards

### Inline Comments

Use comments to explain **why**, not **what**:

```typescript
// ✅ Good - Explains reasoning
// Sort by tier first, then by credibility score within each tier
// This ensures Tier 1 sources always appear first regardless of score
sources.sort((a, b) => a.tier - b.tier || b.credibilityScore - a.credibilityScore);

// ❌ Bad - States the obvious
// This sorts the sources
sources.sort((a, b) => a.tier - b.tier);
```

### JSDoc Format

Use consistent JSDoc formatting:

```typescript
/**
 * One-line summary of what the function does
 * 
 * More detailed explanation if needed. Can span multiple lines.
 * Explain complex logic, edge cases, or important considerations.
 * 
 * @param paramName - Description of parameter
 * @param optionalParam - Description (optional)
 * @returns Description of return value
 * @throws {ErrorType} Description of when error is thrown
 * 
 * @example
 * // Example usage
 * const result = functionName(arg1, arg2);
 * 
 * @see {@link RelatedFunction} for related functionality
 * @see /path/to/documentation for more info
 */
```

---

## 🔐 Security Guidelines

### API Keys and Secrets

**NEVER commit:**
- API keys
- Access tokens
- Private keys
- Environment variables with sensitive data

Use environment variables:

```typescript
// ✅ Good
const API_KEY = import.meta.env.VITE_API_KEY;

// ❌ Bad
const API_KEY = "sk-1234567890abcdef";
```

### User Input

Always sanitize user input:

```typescript
// ✅ Good
const sanitizedClaim = claim.trim().slice(0, 500);

// ❌ Bad
const claim = userInput; // Directly use user input
```

---

## 🚢 Release Process

### Version Numbers

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** version: Breaking changes
- **MINOR** version: New features (backward compatible)
- **PATCH** version: Bug fixes

### Release Checklist

- [ ] All tests pass
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Version number bumped
- [ ] Git tag created
- [ ] Production build tested
- [ ] Stakeholders notified

---

## 🤝 Code Review Process

### As a Reviewer

- Be constructive and respectful
- Focus on code quality, not personal preference
- Suggest alternatives, don't just criticize
- Test the changes locally
- Check for accessibility issues
- Verify documentation is updated

### As a Contributor

- Respond to feedback promptly
- Ask questions if feedback is unclear
- Make requested changes in separate commits
- Update PR description if scope changes
- Thank reviewers for their time

---

## 📞 Getting Help

### Resources

- **Architecture Questions:** See [Guidelines.md](/guidelines/Guidelines.md)
- **Style Questions:** See [STYLE_GUIDE.md](/STYLE_GUIDE.md)
- **Theme Questions:** See [THEME.md](/THEME.md)
- **General Questions:** Create a discussion thread

### Community

- **Slack:** #genuverity-dev
- **Email:** dev@genuverity.com
- **Office Hours:** Wednesdays 2-3pm PST

---

## 📜 License

By contributing to GenuVerity, you agree that your contributions will be licensed under the same license as the project.

---

## 🙏 Thank You!

Your contributions help make fact-checking more accessible, transparent, and trustworthy. We appreciate your time and effort!

---

**Last Updated:** October 22, 2025  
**Maintainer:** GenuVerity Development Team
