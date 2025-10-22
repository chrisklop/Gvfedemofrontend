# GenuVerity Frontend Guidelines

## Architecture Overview

GenuVerity is a Constitutional AI-powered fact-checking platform built with React, TypeScript, and Tailwind CSS. The application uses a modular, component-based architecture designed to scale from simple to comprehensive fact-check results.

**Related Documentation:**
- [Mission & Values](/pages/Mission.tsx) - Constitutional AI principles and manifesto
- [How It Works](/pages/HowItWorks.tsx) - Detailed methodology and process flow
- [API Documentation](/pages/ApiDocs.tsx) - Developer integration guide

---

## Project Structure

```
/
├── pages/                    # Route pages
│   ├── Home.tsx             # Landing page with search
│   ├── Results.tsx          # Fact-check results page
│   ├── HowItWorks.tsx       # Methodology & process flow
│   ├── Mission.tsx          # Mission, values & manifesto
│   ├── ApiDocs.tsx          # API documentation
│   ├── EarlyAccess.tsx      # Beta signup form
│   └── NotFound.tsx         # 404 page
├── components/
│   ├── Navigation.tsx       # Shared navigation with theme toggle
│   ├── ThemeProvider.tsx    # Dark/light mode context
│   ├── ThemeToggle.tsx      # Theme switcher component
│   ├── layouts/             # Layout components
│   │   └── ResultsLayout.tsx # Results page layout with sidebar
│   ├── results/             # Result section components
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
│   └── ui/                  # Shadcn UI components
├── types/
│   └── index.ts             # TypeScript interfaces
├── data/
│   └── mockResults.ts       # Mock data for testing
├── guidelines/
│   └── Guidelines.md        # This file
└── styles/
    └── globals.css          # Global styles and tokens

```

---

## Routing

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home.tsx | Landing page with search interface |
| `/verify/:id` | Results.tsx | Fact-check results page |
| `/how-it-works` | HowItWorks.tsx | Methodology and process explanation |
| `/mission` | Mission.tsx | Mission statement, values, and founder's manifesto |
| `/api-docs` | ApiDocs.tsx | API documentation for developers |
| `/early-access` | EarlyAccess.tsx | Beta signup form |
| `*` | NotFound.tsx | 404 not found page |

---

## Constitutional AI Framework

### Five Core Principles

Every fact-check must pass Constitutional AI compliance checks across five principles:

| Principle | Weight | Description |
|-----------|--------|-------------|
| **Epistemic Humility** | 20% | Acknowledge uncertainty and limitations |
| **Verifiability** | 25% | All claims traceable to specific sources |
| **Neutrality** | 20% | Balanced perspectives, bias detection |
| **Educational Value** | 15% | Enhance understanding and critical thinking |
| **Harmlessness** | 20% | Protect vulnerable populations from harm |

**Minimum Compliance Threshold:** 87% across all five principles

**See also:** [Mission page](/pages/Mission.tsx) for detailed explanation of each principle

---

## System Specifications

### Processing Performance

- **Total Time:** 25-45 seconds for comprehensive analysis
- **Source Database:** 3M+ sources available
- **Sources Per Query:** 322+ sources analyzed per claim
- **Simultaneous Aggregation:** 5 specialized aggregators running in parallel

**Processing Pipeline:**
1. **LLM Analysis** (0-2s) - Claim understanding and domain classification
2. **Source Aggregation** (8.8s avg) - Parallel search across 3M+ sources
3. **LLM Source Analysis** (12-28s) - Credibility scoring and synthesis
4. **Constitutional AI Check** (2-4s) - Compliance validation

**See also:** [How It Works](/pages/HowItWorks.tsx) for detailed pipeline visualization

### Source Tiers

| Tier | Name | Weight Contribution | Icon |
|------|------|---------------------|------|
| 1 | GenuVerified | 35% | 🔬 |
| 2 | Fact-Check Orgs | 30% | ✓ |
| 3 | Academic | 25% | 🎓 |
| 4 | Government | 7% | 🏛️ |
| 5 | Media | 2.5% | 📰 |
| 6 | Social Media | 0.5% | 📱 |

---

## Key Principles

### 1. Modularity
Every result section component:
- Returns `null` if data doesn't exist
- Accepts data as props
- Is self-contained and reusable
- Handles its own loading/skeleton states

### 2. Responsive Design
- **Desktop**: 3-column layout (sidebar, content, actions)
- **Tablet**: 2-column layout (content, collapsible sidebar)
- **Mobile**: Single column with drawer navigation

### 3. Progressive Disclosure
- Show essential information first (verdict, summary)
- Use collapsible sections for detailed content
- Implement "show more" patterns for long lists
- Tab-based navigation for deep content

### 4. Type Safety
All data structures are typed in `/types/index.ts`:
- `FactCheckResult` - Main result interface
- `Source` - Individual source data
- `AIModelAnalysis` - AI model verdict
- `QualityMetrics` - Quality indicators
- `TimelineEvent` - Historical events
- `ConstitutionalAICompliance` - CAI principle scores
- And more...

---

## Component Guidelines

### Result Components
Each component in `/components/results/` should:
1. Import types from `/types`
2. Define a clear props interface
3. Return null if data is missing
4. Use consistent styling with Tailwind
5. Follow accessibility best practices

**Example Structure:**
```tsx
import { Source } from '../../types';

interface SourceListProps {
  sources?: Source[];
}

export function SourceList({ sources }: SourceListProps) {
  if (!sources || sources.length === 0) return null;
  
  return (
    <div>
      {/* Component implementation */}
    </div>
  );
}
```

### Layout Components
- `ResultsLayout` provides the sidebar/drawer structure
- Auto-generates table of contents from available sections
- Handles responsive breakpoints
- Provides sticky navigation

### Navigation Component
- Shared across all pages via `<Navigation />` import
- Includes theme toggle (dark/light mode)
- Mobile-responsive menu with drawer
- Routes to all main pages

---

## Data Flow

1. User enters query on Home page
2. Click "Find the Truth" → Navigate to `/verify/:id`
3. Results page fetches data (currently mock via `mockResults.ts`)
4. Data populates modular components
5. Only components with available data render
6. Constitutional AI compliance scores displayed

**Current State:** Mock data only
**Future:** Real API integration (see [API Docs](/pages/ApiDocs.tsx))

---

## Styling Conventions

### Color System

Defined in `styles/globals.css`:

**Verdict Colors:**
- **TRUE:** Green (`#10b981`)
- **FALSE:** Red (`#ef4444`)
- **MIXED:** Orange (`#f59e0b`)
- **UNVERIFIABLE:** Gray (`#6b7280`)

**Theme Variables:**
- Uses CSS custom properties for theme switching
- Light/dark mode toggle via ThemeProvider
- Primary accent: Burnt orange (`#d2562d`)
- Proper contrast ratios maintained

### Typography

**Important:** Do NOT override default typography unless explicitly required:
- Font sizes are defined in `globals.css`
- Headings (h1-h6) have preset styles
- Line heights are pre-configured
- Only add font utilities when necessary for design

### Tailwind Usage

- Use utility classes for layout and spacing
- Follow the color system in `globals.css`
- Avoid custom CSS when Tailwind utilities exist
- Use Shadcn UI components for complex interactions

---

## Theme System

### Dark Mode / Light Mode

The application supports theme persistence:
- `ThemeProvider.tsx` - Context provider for theme state
- `ThemeToggle.tsx` - UI component for switching themes
- `localStorage` persistence across sessions
- System preference detection on first load

**Implementation:**
```tsx
import { Navigation } from '../components/Navigation';

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Page content */}
    </div>
  );
}
```

---

## External Integrations

### Current Libraries
- **React Router** - Client-side routing
- **Sonner** - Toast notifications
- **Recharts** - Data visualization and charts
- **Lucide React** - Icon library
- **Shadcn UI** - Accessible component primitives
- **Tailwind CSS v4** - Utility-first styling

### API Integration (Future)

See [API Documentation](/pages/ApiDocs.tsx) for:
- Endpoint specifications
- Request/response formats
- Authentication requirements
- Rate limiting details
- Error handling

---

## Mock Data Structure

Located in `/data/mockResults.ts`:

**Key Fields:**
- `id` - Unique identifier (e.g., 'vaccines-autism-2024')
- `claim` - The statement being fact-checked
- `verdict` - One of: TRUE, FALSE, MIXED, UNVERIFIABLE
- `confidence` - 0-100 confidence score
- `analysisTime` - Processing time (should be within 25-45s range)
- `summary` - Executive summary of findings
- `sources[]` - Array of source objects with credibility scores
- `qualityMetrics` - Source agreement, evidence quality, etc.
- `constitutionalAI` - Compliance scores for each principle

**Example:**
```typescript
{
  id: 'vaccines-autism-2024',
  verdict: 'FALSE',
  confidence: 98,
  analysisTime: '38s', // Within 25-45s range
  totalSourceCount: 327,
  // ... additional fields
}
```

---

## Quality Assurance

### Consistency Checks

Before deploying, verify:
- [ ] All processing times reference 25-45 seconds
- [ ] Source counts reference 3M+ database
- [ ] Constitutional AI percentages match official values
- [ ] Verdict colors match style guide
- [ ] Logo assets are consistent across pages
- [ ] Navigation links work on all pages
- [ ] Theme toggle persists correctly
- [ ] Mobile responsive breakpoints work

### Cross-Reference Validation

Ensure consistency across:
- Guidelines.md ↔ Mission.tsx (CAI principles)
- Guidelines.md ↔ HowItWorks.tsx (processing times)
- Guidelines.md ↔ ApiDocs.tsx (source counts, timings)
- mockResults.ts ↔ types/index.ts (data structure)

---

## Future Enhancements

### Planned Features
- [ ] Real API integration
- [ ] User authentication
- [ ] Saved searches/library
- [ ] PDF export of results
- [ ] Social sharing with metadata
- [ ] Advanced filtering and sorting
- [ ] Community discussion features
- [ ] Public API access for developers

### Infrastructure
- [ ] Production API endpoints
- [ ] Database for user accounts
- [ ] CDN for static assets
- [ ] Analytics integration
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring

---

## Development Notes

### Component Imports
```tsx
// Navigation
import { Navigation } from '../components/Navigation';

// UI Components
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

// Icons
import { Search, CheckCircle } from 'lucide-react';

// Types
import { FactCheckResult } from '../types';

// Router
import { Link, useNavigate } from 'react-router-dom';
```

### Protected Files
Do not modify:
- `/components/figma/ImageWithFallback.tsx` - System component
- `/components/ui/*` - Shadcn components (modify with caution)

### Adding New Pages
1. Create page in `/pages/NewPage.tsx`
2. Add route to `App.tsx`
3. Add navigation link in `Navigation.tsx`
4. Update this Guidelines.md routing table
5. Add cross-references where relevant

---

## Accessibility Standards

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast ratios meet WCAG AA
- Screen reader friendly
- Mobile touch targets (44px minimum)

---

## Version Control

**Current Version:** Beta (Pre-launch)
**Last Updated:** October 22, 2025

**Change Log:**
- Added Constitutional AI principle weights
- Updated processing times to 25-45 seconds
- Expanded source database to 3M+
- Added cross-references between documentation files
- Standardized logo assets across pages

---

## Quick Reference

### Key Metrics
- **Processing:** 25-45 seconds
- **Sources:** 3M+ database, 322+ per query
- **Compliance:** 87% minimum across 5 principles
- **Verdict Options:** TRUE, FALSE, MIXED, UNVERIFIABLE

### File Paths
- **Types:** `/types/index.ts`
- **Mock Data:** `/data/mockResults.ts`
- **Styles:** `/styles/globals.css`
- **Pages:** `/pages/`
- **Components:** `/components/`

### Common Tasks
- **Add route:** Update App.tsx + Navigation.tsx
- **New component:** Create in `/components/`, import types
- **Update mock data:** Edit `/data/mockResults.ts`
- **Change theme:** Modify `/styles/globals.css`
- **Update docs:** Edit this file + cross-reference other pages

---

## Support & Contact

For questions about implementation, refer to:
- [How It Works](/pages/HowItWorks.tsx) - User-facing methodology
- [Mission](/pages/Mission.tsx) - Constitutional AI principles
- [API Docs](/pages/ApiDocs.tsx) - Developer integration
- README.md - Project setup and installation

---

*This documentation is maintained alongside the codebase and should be updated whenever architectural changes are made.*
