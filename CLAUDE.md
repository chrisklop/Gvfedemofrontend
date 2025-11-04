# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
React/TypeScript frontend demo for GenuVerity's AI fact-checking platform. Built with Vite, deployed on Vercel. This is a **demo/MVP** with mock data - no backend API integration yet.

## Essential Commands

**Development:**
```bash
npm i                    # Install dependencies
npm run dev             # Start dev server (http://localhost:3000)
npm run build           # Build for production (outputs to build/)
vercel --prod           # Deploy to production on Vercel
```

**No test suite configured** - this is a frontend-only demo without tests.

## Architecture

### Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6 with SWC plugin for fast compilation
- **Routing**: React Router with HashRouter (required for GitHub Pages compatibility)
- **UI Components**: shadcn/ui + Radix UI primitives
- **Styling**: Tailwind CSS with custom animations in `src/styles/globals.css`
- **Forms**: Formspree integration (Contact: `movpwyby`, Early Access: `xgvpyrqd`)

### Project Structure
```
src/
├── App.tsx                      # Main app with HashRouter setup
├── main.tsx                     # Entry point
├── pages/                       # Route components
│   ├── Home.tsx                 # Landing page with fact-check search
│   ├── Results.tsx              # Fact-check results display (/verify/:id)
│   └── [other pages]            # Mission, Contact, API docs, etc.
├── components/
│   ├── Navigation.tsx           # Main nav bar
│   ├── Footer.tsx               # Site footer
│   ├── AnalysisProgress.tsx    # 8-stage animated progress indicator
│   ├── results/                 # Results page components
│   │   ├── VerdictHeader.tsx   # Verdict display (TRUE/FALSE/MIXED/UNVERIFIABLE)
│   │   ├── ExecutiveSummary.tsx
│   │   ├── SourceBreakdown.tsx # Source tier visualization
│   │   └── [other components]
│   └── ui/                      # shadcn/ui components (auto-generated)
├── types/index.ts               # TypeScript interfaces for FactCheckResult
├── data/mockResults.ts          # Mock data for demo (322 sources per query)
├── services/gemini.ts           # Placeholder API service
└── styles/
    └── globals.css              # Custom animations (multi-color button, etc.)
```

### Key Architecture Patterns

**Routing:**
- Uses `HashRouter` instead of `BrowserRouter` for deployment compatibility
- Routes: `/`, `/verify/:id`, `/how-it-works`, `/mission`, `/early-access`, `/api-docs`, `/privacy`, `/limitations`, `/contact`

**Data Flow:**
- Currently uses mock data from `src/data/mockResults.ts`
- Results page accepts a query parameter (`/verify/:id`) but returns same mock data
- No real API integration - designed for visual demonstration

**Type System:**
- All fact-check data typed via `FactCheckResult` interface in `src/types/index.ts`
- Key types: `VerdictType`, `Source`, `AIModelAnalysis`, `QualityMetrics`
- Verdict must be: `'TRUE' | 'FALSE' | 'MIXED' | 'UNVERIFIABLE'`

**Path Aliases:**
- `@/` maps to `src/` (configured in vite.config.ts)
- Example: `import { Button } from '@/components/ui/button'`

**Theme:**
- Light-only theme (dark mode removed in MVP)
- Custom animations defined in `globals.css` (letter-by-letter color animation, etc.)

## UI/UX Design Decisions

**Mobile-First:**
- Optimized viewport positioning (-150px mobile vs -350px desktop)
- Search box scales up and centers when focused on mobile
- 2-row footer on mobile, single-row on desktop

**Custom Animations:**
- "Find the Truth" button has multi-color letter animation (Blue → Green → Amber wave)
- Staggered timing with 0.1s delays per letter
- Glowing text shadows for visual appeal

**Navigation:**
- Simplified nav with only "How it Works" and "Our Mission" links
- Uses `gvcleanlogo.png` for site logo
- Footer links: Privacy, Limitations, Contact, API, Beta

## Development Notes

**When modifying components:**
- Results page components are in `src/components/results/`
- All results components expect `result: FactCheckResult` prop
- UI primitives in `src/components/ui/` are shadcn-generated - prefer editing wrapper components

**When adding pages:**
- Add route in `src/App.tsx`
- Pages should import Navigation and Footer components for consistent layout
- Use HashRouter links: `<Link to="/path">` (not `/path.html`)

**When working with styles:**
- Global animations live in `src/styles/globals.css`
- Use Tailwind utilities first, custom CSS only when necessary
- Mobile breakpoints: `md:` (768px+), `lg:` (1024px+)

**Form submissions:**
- Contact form: Formspree endpoint `movpwyby`
- Early Access: Formspree endpoint `xgvpyrqd`
- Both use standard HTML form submission (no JS validation)

## Deployment Workflow

1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Deploy: `vercel --prod`
5. Update deployment URL in documentation if needed

**Important:** Always use HashRouter for routing compatibility with static hosting.

## Known Constraints

- No backend API - all data is mocked
- No authentication system
- No real fact-checking performed - demo only
- No test suite configured
- Analysis progress is simulated animation (not real processing)
- All "analysis" results return the same mock data regardless of input

## Current Feature Status

**Completed:**
- Multi-color letter animation on "Find the Truth" button
- Mobile-first responsive design
- Sticky footer across all pages
- Source validation messaging
- 8-stage analysis progress animation

**Planned (see git commits for roadmap):**
- Automated GitHub/Vercel deployment workflow
- Performance optimizations and code splitting
- Real API integration (when backend available)
