# GenuVerity - Constitutional AI Fact-Checking Platform

A modern, AI-powered fact-checking platform that provides transparent, evidence-based analysis of claims using Constitutional AI principles and a sophisticated source precedence system.

**📚 Documentation:**
- **[DOCUMENTATION_INDEX.md](/DOCUMENTATION_INDEX.md)** - Complete documentation navigator (START HERE)
- [Guidelines.md](/guidelines/Guidelines.md) - Complete development and architecture guide
- [CONTRIBUTING.md](/CONTRIBUTING.md) - Contribution workflow and standards
- [STYLE_GUIDE.md](/STYLE_GUIDE.md) - Component patterns and design conventions
- [THEME.md](/THEME.md) - Theme system documentation
- [How It Works](/pages/HowItWorks.tsx) - User-facing methodology explanation
- [Mission & Values](/pages/Mission.tsx) - Constitutional AI principles and manifesto
- [API Documentation](/pages/ApiDocs.tsx) - Developer integration guide

---

## 🌟 Features

### Core Functionality
- **Constitutional AI Analysis** - Every fact-check validated against 5 ethical principles
- **3M+ Source Database** - Access to peer-reviewed research, government data, and verified media
- **25-45 Second Processing** - Comprehensive analysis in under a minute
- **Multi-page Application** with React Router and dark/light theme support
- **Modular Results Display** - Sections render only when data is available
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Source Tiering System** - 6-tier credibility weighting (GenuVerified → Social Media)

### Constitutional AI Framework

Every analysis must achieve **87% compliance** across five principles:

| Principle | Weight | Purpose |
|-----------|--------|---------|
| **Epistemic Humility** | 20% | Acknowledge uncertainty and limitations |
| **Verifiability** | 25% | All claims traceable to specific sources |
| **Neutrality** | 20% | Balanced perspectives, bias detection |
| **Educational Value** | 15% | Enhance understanding and critical thinking |
| **Harmlessness** | 20% | Protect vulnerable populations from harm |

**See:** [Mission.tsx](/pages/Mission.tsx) for detailed explanation

### Pages
1. **Home** (`/`) - Clean search interface with Google-inspired layout
2. **Results** (`/verify/:id`) - Comprehensive fact-check results with modular sections
3. **How It Works** (`/how-it-works`) - Methodology and process explanation
4. **Mission** (`/mission`) - Constitutional AI principles and founder's manifesto
5. **API Docs** (`/api-docs`) - Developer integration documentation
6. **Early Access** (`/early-access`) - Sign-up form for beta users

---

## 🎨 Design System

### Theme Support
- **Dark Mode / Light Mode** toggle with persistence
- Burnt orange primary accent (`#d2562d`)
- Professional, minimal aesthetic inspired by Google and Claude.ai
- Consistent navigation across all pages

### Layout
- **Desktop**: 3-column layout (sidebar TOC, main content, quick actions)
- **Tablet**: 2-column layout with collapsible sidebar
- **Mobile**: Single column with drawer navigation

### Verdict Colors
- 🟢 **TRUE**: Green (`#10b981`)
- 🔴 **FALSE**: Red (`#ef4444`)
- 🟠 **MIXED**: Orange (`#f59e0b`)
- ⚪ **UNVERIFIABLE**: Gray (`#6b7280`)

**See:** [Guidelines.md](/guidelines/Guidelines.md#styling-conventions) for complete style guide

---

## 🎬 Analysis Experience

### Real-Time Progress Indicator

When users click "Find the Truth," they see a professional animated progress screen:

- **Five Processing Stages** aligned with Constitutional AI principles
- **Real-time progress bar** with percentage and time remaining
- **Stage descriptions** explaining what's happening
- **Smooth animations** using Motion (Framer Motion)
- **Theme-aware** design that works in light and dark modes
- **Estimated completion** typically 25-45 seconds

**Stages Shown:**
1. Understanding Claim (5%)
2. Aggregating Sources (35%)
3. Analyzing Evidence (40%)
4. Synthesizing Verdict (15%)
5. Validating Compliance (5%)

**See:** [PROGRESS_INDICATOR_GUIDE.md](/PROGRESS_INDICATOR_GUIDE.md) for complete documentation

---

## 📊 Result Sections (Modular)

The results page displays sections dynamically based on available data:

1. **Verdict Header** - Claim, verdict, confidence score, analysis time
2. **Executive Summary** - TL;DR and bottom line
3. **Quality Indicators** - Source agreement, evidence quality, coverage, reliability
4. **Source Distribution** - Visual breakdown by tier with charts
5. **Sources by Tier** - Expandable lists of sources (auto-expand top 2 tiers)
6. **AI Model Consensus** - Individual model verdicts and reasoning
7. **Evidence Timeline** - Key historical events and studies
8. **Constitutional AI Report** - Compliance scores for each principle
9. **Detailed Analysis Tabs** - Full analysis, source list, related claims
10. **Limitations** - Transparency about methodology and scope
11. **Action Buttons** - Share, cite, download, save, report, discuss

**See:** [Guidelines.md](/guidelines/Guidelines.md#component-guidelines) for implementation details

---

## 🔧 Tech Stack

- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui (accessible component primitives)
- **Charts**: Recharts (data visualization)
- **Icons**: Lucide React
- **Notifications**: Sonner (toast messages)
- **Theme**: Custom dark/light mode with ThemeProvider

---

## 📁 Project Structure

```
/
├── App.tsx                  # Main app with routing
├── pages/                   # Page components
│   ├── Home.tsx            # Landing page with search
│   ├── Results.tsx         # Fact-check results
│   ├── HowItWorks.tsx      # Methodology explanation
│   ├── Mission.tsx         # Mission and manifesto
│   ├── ApiDocs.tsx         # API documentation
│   ├── EarlyAccess.tsx     # Beta signup
│   └── NotFound.tsx        # 404 page
├── components/
│   ├── Navigation.tsx      # Shared nav with theme toggle
│   ├── ThemeProvider.tsx   # Dark/light mode context
│   ├── ThemeToggle.tsx     # Theme switcher
│   ├── layouts/
│   │   └── ResultsLayout.tsx # Results page layout
│   ├── results/            # Modular result sections
│   │   ├── VerdictHeader.tsx
│   │   ├── ExecutiveSummary.tsx
│   │   ├── QualityIndicators.tsx
│   │   ├── SourceBreakdown.tsx
│   │   ├── SourceList.tsx
│   │   ├── AIModelConsensus.tsx
│   │   ├── EvidenceTimeline.tsx
│   │   ├── ConstitutionalAIReport.tsx
│   │   ├── LimitationsSection.tsx
│   │   ├── DetailedAnalysisTabs.tsx
│   │   └── ActionButtons.tsx
│   └── ui/                 # Shadcn components
├── types/
│   └── index.ts           # TypeScript interfaces
├── data/
│   └── mockResults.ts     # Mock data for development
├── guidelines/
│   └── Guidelines.md      # Complete development guide
└── styles/
    └── globals.css        # Global styles & CSS variables
```

**See:** [Guidelines.md](/guidelines/Guidelines.md#project-structure) for detailed architecture

---

## 🚀 Getting Started

### Using the Application

1. **Search for a Claim**
   - Enter any claim on the home page
   - Click "Find the Truth" or press Enter
   - View comprehensive analysis results in 25-45 seconds

2. **Navigate Results**
   - Desktop: Use left sidebar to jump to sections
   - Mobile: Tap hamburger menu for table of contents
   - All sections are collapsible/expandable
   - Toggle between light and dark themes

3. **Explore Pages**
   - Learn about our methodology in "How It Works"
   - Read our mission and Constitutional AI principles in "Mission"
   - Review API documentation in "API Docs"
   - Sign up for early access via the form

### Development

The app currently uses mock data defined in `/data/mockResults.ts`.

**Sample Results:**
- `vaccines-autism-2024` - Comprehensive result with all sections (38s processing time)
- `coffee-health-2024` - Simpler result with fewer sections
- `great-wall-space-2024` - Additional sample data

**Mock Data Standards:**
- Processing times must be within 25-45 second range
- Total source counts around 322 per query
- Constitutional AI compliance scores must meet 87% minimum
- Verdict must be one of: TRUE, FALSE, MIXED, UNVERIFIABLE

To add real API integration:
1. Review [API Documentation](/pages/ApiDocs.tsx) for endpoint specifications
2. Update the fetch logic in `/pages/Results.tsx`
3. Replace mock data imports with API calls
4. Add loading states and error handling
5. Implement authentication if required

**See:** [Guidelines.md](/guidelines/Guidelines.md#data-flow) for integration details

---

## 🎯 Key Principles

### Modularity
Every component checks if its data exists before rendering. Missing data sections simply don't appear, allowing the system to gracefully handle varying levels of analysis depth.

```tsx
export function SourceList({ sources }: SourceListProps) {
  if (!sources || sources.length === 0) return null;
  // Component renders only when data exists
}
```

### Progressive Disclosure
- Essential info (verdict, summary) shown first
- Detailed content in expandable sections
- "Show more" patterns for long lists
- Tabs for deep technical content

### Transparency
- Full source attribution with credibility scores
- Complete methodology disclosure
- Clear confidence scores with explanations
- Limitations acknowledged upfront
- Constitutional AI compliance scores visible

**See:** [Mission.tsx](/pages/Mission.tsx) for our commitment to transparency

---

## 📱 Responsive Behavior

- **Desktop (lg+)**: Sidebar navigation always visible, 3-column layout
- **Tablet (md-lg)**: 2-column layout, collapsible sidebar
- **Mobile (<md)**: Single column, drawer navigation with hamburger menu
- All components stack gracefully on smaller screens
- Touch-friendly targets (44px minimum)
- Theme toggle accessible on all screen sizes

---

## ⚡ Performance Benchmarks

### Processing Times
- **Simple Claims**: 25-35 seconds
- **Moderate Claims**: 30-40 seconds
- **Complex Claims**: 35-45 seconds
- **Highly Complex**: 40-50 seconds

### Source Analysis
- **Database**: 3M+ sources available
- **Per Query**: 322+ sources analyzed
- **Aggregators**: 5 running simultaneously
  - Academic sources (PubMed, arXiv, institutional repositories)
  - Government sources (CDC, FDA, NIH, EPA, WHO)
  - Professional fact-checkers (PolitiFact, Snopes, Reuters, FactCheck.org)
  - Quality journalism (Reuters, AP, BBC, NPR)
  - Social media (verified accounts, weighted carefully)

**See:** [HowItWorks.tsx](/pages/HowItWorks.tsx) for detailed pipeline visualization

---

## 🔮 Future Enhancements

### Planned Features
- [ ] Real-time API integration
- [ ] User authentication & profiles
- [ ] Saved searches library
- [ ] PDF export functionality
- [ ] Enhanced social sharing with Open Graph metadata
- [ ] Advanced filtering & search options
- [ ] Community discussion forums
- [ ] Public API access for developers
- [ ] Multi-language support
- [ ] Browser extension

### Infrastructure
- [ ] Production API endpoints
- [ ] Database for user accounts
- [ ] CDN for static assets
- [ ] Analytics integration
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring

**See:** [Guidelines.md](/guidelines/Guidelines.md#future-enhancements) for roadmap

---

## 🧪 Quality Assurance

### Pre-Deployment Checklist
- [ ] All processing times reference 25-45 seconds
- [ ] Source counts reference 3M+ database with 322+ per query
- [ ] Constitutional AI percentages match official values (87% minimum)
- [ ] Verdict colors match style guide
- [ ] Logo assets are consistent across pages
- [ ] Navigation links work on all pages
- [ ] Theme toggle persists correctly
- [ ] Mobile responsive breakpoints work
- [ ] All cross-references in documentation are valid

**See:** [Guidelines.md](/guidelines/Guidelines.md#quality-assurance) for complete checklist

---

## 📖 Documentation Index

| Document | Purpose | Audience |
|----------|---------|----------|
| **README.md** | Project overview and quick start | Everyone |
| **[Guidelines.md](/guidelines/Guidelines.md)** | Complete development guide | Developers |
| **[CONTRIBUTING.md](/CONTRIBUTING.md)** | Contribution workflow and standards | Contributors |
| **[STYLE_GUIDE.md](/STYLE_GUIDE.md)** | Component patterns and design | Developers |
| **[THEME.md](/THEME.md)** | Theme system documentation | Developers |
| **[CHANGELOG.md](/CHANGELOG.md)** | Version history and updates | Everyone |
| **[Mission.tsx](/pages/Mission.tsx)** | Constitutional AI principles | Users & Stakeholders |
| **[HowItWorks.tsx](/pages/HowItWorks.tsx)** | Methodology explanation | Users |
| **[ApiDocs.tsx](/pages/ApiDocs.tsx)** | API integration guide | Developers |
| **[types/index.ts](/types/index.ts)** | TypeScript interfaces | Developers |

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Issue: Theme doesn't persist after refresh

**Symptoms:**
- Theme resets to light mode after page reload
- Dark mode doesn't stay enabled

**Cause:** localStorage not saving properly or being cleared

**Solution:**
```typescript
// Check browser console for localStorage errors
console.log(localStorage.getItem('theme'));

// Ensure ThemeProvider is wrapping the entire app
// Check /App.tsx for correct structure
```

**Prevention:** Don't use browser's "clear cookies on exit" for development

---

#### Issue: Components not showing up on Results page

**Symptoms:**
- Result sections are missing
- Page appears empty or incomplete

**Cause:** Mock data doesn't include required fields

**Solution:**
```typescript
// Check mockResults.ts for the data structure
// All components return null if data is missing

// Example: If SourceList doesn't show, check:
if (!factCheckResult.sources || factCheckResult.sources.length === 0) {
  // This is why it's not rendering
}
```

**Prevention:** Follow data structure in `/types/index.ts`

---

#### Issue: Tailwind classes not working

**Symptoms:**
- Styles don't apply
- Colors don't match design
- Layout is broken

**Cause:** Using unsupported Tailwind utilities or wrong syntax

**Solution:**
```typescript
// ❌ Don't use arbitrary values without brackets
className="p-23"

// ✅ Use standard scale or arbitrary with brackets
className="p-6" // or className="p-[23px]"

// ❌ Don't override typography without reason
className="text-2xl font-bold"

// ✅ Use default typography
<h2>Title</h2> // Already styled in globals.css
```

**Prevention:** See [STYLE_GUIDE.md](/STYLE_GUIDE.md) for approved patterns

---

#### Issue: Dark mode colors look wrong

**Symptoms:**
- Text invisible in dark mode
- Low contrast
- Elements blend with background

**Cause:** Using hardcoded colors instead of theme variables

**Solution:**
```typescript
// ❌ Bad - hardcoded colors
<div className="bg-white text-black border-gray-200">

// ✅ Good - theme variables
<div className="bg-background text-foreground border-border">
```

**Prevention:** Always use semantic color classes from [THEME.md](/THEME.md)

---

#### Issue: Mobile navigation not working

**Symptoms:**
- Hamburger menu doesn't open
- Navigation drawer stuck
- Menu items not clickable

**Cause:** z-index conflicts or missing Drawer component

**Solution:**
```typescript
// Check Navigation.tsx for proper Drawer implementation
// Ensure Sheet/Drawer from shadcn is imported correctly

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
```

**Prevention:** Don't modify z-index values without checking navigation

---

#### Issue: Processing time shows unrealistic value

**Symptoms:**
- Analysis time >60 seconds
- Doesn't match 25-45s specification

**Cause:** Mock data has old timing values

**Solution:**
```typescript
// Update mockResults.ts
analysisTime: '38s' // Should be 25-45s range
```

**Prevention:** Follow data standards in [CONTRIBUTING.md](/CONTRIBUTING.md)

---

#### Issue: Build fails with TypeScript errors

**Symptoms:**
- `npm run build` fails
- Type errors in console
- Missing properties on interfaces

**Cause:** Component props don't match interface definitions

**Solution:**
```typescript
// Check /types/index.ts for correct interface
// Ensure all required props are passed

// Example fix:
<VerdictHeader
  claim={result.claim}
  verdict={result.verdict}
  confidence={result.confidence}
  analysisTime={result.analysisTime} // Don't forget this!
  sourceCount={result.totalSourceCount}
/>
```

**Prevention:** Use TypeScript strict mode and fix errors immediately

---

#### Issue: Links to documentation files don't work

**Symptoms:**
- Cross-references return 404
- Navigation to other docs broken

**Cause:** Incorrect file paths in markdown links

**Solution:**
```markdown
<!-- ❌ Wrong - missing leading slash -->
[Guidelines](guidelines/Guidelines.md)

<!-- ✅ Correct - absolute path from root -->
[Guidelines](/guidelines/Guidelines.md)
```

**Prevention:** Always use absolute paths starting with `/`

---

#### Issue: Images not loading

**Symptoms:**
- Broken image icons
- Missing logo/assets
- 404 errors in console

**Cause:** Incorrect Figma asset import paths

**Solution:**
```typescript
// Check the exact path from Figma imports
import logo from 'figma:asset/8a452e4bd85da1036f4096d3f0c99aafc1ad1c8d.png';

// Use ImageWithFallback for generated images
import { ImageWithFallback } from './components/figma/ImageWithFallback';
```

**Prevention:** Don't modify Figma asset imports manually

---

#### Issue: Verdict colors don't match style guide

**Symptoms:**
- Wrong shades of green/red/orange/gray
- Inconsistent colors across components

**Cause:** Not using approved color values

**Solution:**
```typescript
// Use exact hex values from Guidelines.md
TRUE: '#10b981'       // Green
FALSE: '#ef4444'      // Red
MIXED: '#f59e0b'      // Orange
UNVERIFIABLE: '#6b7280' // Gray
```

**Prevention:** Reference [STYLE_GUIDE.md#verdict-colors](/STYLE_GUIDE.md#verdict-colors)

---

### Getting More Help

If your issue isn't listed here:

1. **Check the documentation:**
   - [Guidelines.md](/guidelines/Guidelines.md) - Architecture questions
   - [STYLE_GUIDE.md](/STYLE_GUIDE.md) - Design/style questions
   - [THEME.md](/THEME.md) - Theme-related issues
   - [CONTRIBUTING.md](/CONTRIBUTING.md) - Development workflow

2. **Search the codebase:**
   ```bash
   # Find similar patterns
   grep -r "component pattern" src/
   ```

3. **Check the console:**
   - Open browser DevTools
   - Look for errors or warnings
   - Check Network tab for failed requests

4. **Contact the team:**
   - Create a GitHub issue (if repository access)
   - Slack: #genuverity-dev
   - Email: dev@genuverity.com

---

## 🤝 Contributing

Currently in private beta. For access inquiries, use the [Early Access form](/pages/EarlyAccess.tsx).

### Development Standards
- Follow TypeScript strict mode
- Use Tailwind utilities (avoid custom CSS)
- Ensure all components are accessible (WCAG AA)
- Test on mobile, tablet, and desktop
- Update documentation when making changes
- Maintain cross-reference links between docs

---

## 📄 License

Copyright © 2024-2025 GenuVerity. All rights reserved.

---

## 📞 Support

For questions about:
- **Usage**: See [How It Works](/pages/HowItWorks.tsx)
- **Mission**: See [Mission](/pages/Mission.tsx)
- **Development**: See [Guidelines.md](/guidelines/Guidelines.md)
- **API Integration**: See [API Docs](/pages/ApiDocs.tsx)
- **Early Access**: Use the [signup form](/pages/EarlyAccess.tsx)

---

**Built with ❤️ for truth and transparency**

*"We don't just fact-check claims—we fact-check the future."*

---

**Version:** Beta (Pre-launch)  
**Last Updated:** October 22, 2025  
**Status:** In Development
