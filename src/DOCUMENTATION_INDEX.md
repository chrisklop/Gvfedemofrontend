# GenuVerity Documentation Index

Complete guide to all documentation in the GenuVerity platform. Start here to navigate the codebase efficiently.

---

## 📋 Quick Start Path

New to the project? Follow this reading order:

1. **[README.md](/README.md)** - Project overview and quick start (10 min)
2. **[Guidelines.md](/guidelines/Guidelines.md)** - Architecture and development guide (20 min)
3. **[STYLE_GUIDE.md](/STYLE_GUIDE.md)** - Component patterns and conventions (15 min)
4. **[CONTRIBUTING.md](/CONTRIBUTING.md)** - How to contribute code (15 min)
5. **[Mission.tsx](/pages/Mission.tsx)** - Understand the "why" behind the platform (10 min)

**Total time:** ~70 minutes to get fully onboarded

---

## 📚 Documentation Categories

### 🚀 Getting Started

| Document | What You'll Learn | When to Read |
|----------|-------------------|--------------|
| **[README.md](/README.md)** | Project overview, features, tech stack | First stop for everyone |
| **[CHANGELOG.md](/CHANGELOG.md)** | Recent updates and version history | Before starting work on existing project |

### 🛠️ Development

| Document | What You'll Learn | When to Read |
|----------|-------------------|--------------|
| **[Guidelines.md](/guidelines/Guidelines.md)** | Full architecture, data flow, component structure | Before writing any code |
| **[CONTRIBUTING.md](/CONTRIBUTING.md)** | Development workflow, commit standards, PR process | Before making first contribution |
| **[STYLE_GUIDE.md](/STYLE_GUIDE.md)** | Component patterns, design conventions, best practices | When creating new components |
| **[THEME.md](/THEME.md)** | Dark/light mode system, color variables, theming | When working with colors or theme |
| **[PROGRESS_INDICATOR_GUIDE.md](/PROGRESS_INDICATOR_GUIDE.md)** | Analysis progress component usage and customization | When working with progress UI |

### 🎨 Design & UX

| Document | What You'll Learn | When to Read |
|----------|-------------------|--------------|
| **[STYLE_GUIDE.md](/STYLE_GUIDE.md)** | Visual design, typography, spacing, accessibility | When designing UI |
| **[THEME.md](/THEME.md)** | Color system, contrast ratios, theme implementation | When styling components |
| **[Mission.tsx](/pages/Mission.tsx)** | Constitutional AI principles, brand values | To understand design philosophy |

### 📖 User-Facing

| Document | What You'll Learn | When to Read |
|----------|-------------------|--------------|
| **[Mission.tsx](/pages/Mission.tsx)** | Why GenuVerity exists, our values, Constitutional AI | To explain the platform to stakeholders |
| **[HowItWorks.tsx](/pages/HowItWorks.tsx)** | Fact-check methodology, processing pipeline | To explain how fact-checking works |
| **[ApiDocs.tsx](/pages/ApiDocs.tsx)** | API integration, endpoints, response formats | When integrating GenuVerity into other apps |

### 💻 Code Reference

| Document | What You'll Learn | When to Read |
|----------|-------------------|--------------|
| **[types/index.ts](/types/index.ts)** | All TypeScript interfaces and types | When working with data structures |
| **[mockResults.ts](/data/mockResults.ts)** | Example data, mock API responses | When testing or creating sample data |
| **[globals.css](/styles/globals.css)** | CSS variables, typography, theme colors | When debugging styles |

---

## 🎯 Find Answers By Topic

### Architecture & Structure

**"How is the app organized?"**
- [Guidelines.md - Project Structure](/guidelines/Guidelines.md#project-structure)
- [Guidelines.md - Routing](/guidelines/Guidelines.md#routing)
- [README.md - Project Structure](/README.md#-project-structure)

**"What are the key design principles?"**
- [Guidelines.md - Key Principles](/guidelines/Guidelines.md#key-principles)
- [STYLE_GUIDE.md - Design Philosophy](/STYLE_GUIDE.md#-design-philosophy)

**"How does data flow through the app?"**
- [Guidelines.md - Data Flow](/guidelines/Guidelines.md#data-flow)
- [Guidelines.md - Mock Data Structure](/guidelines/Guidelines.md#mock-data-structure)

---

### Components & Patterns

**"How do I create a new component?"**
- [STYLE_GUIDE.md - Component Patterns](/STYLE_GUIDE.md#-component-patterns)
- [CONTRIBUTING.md - Component Guidelines](/CONTRIBUTING.md#-component-guidelines)
- [Guidelines.md - Component Guidelines](/guidelines/Guidelines.md#component-guidelines)

**"What's the standard component structure?"**
- [STYLE_GUIDE.md - Result Components](/STYLE_GUIDE.md#1-result-section-components)
- [CONTRIBUTING.md - Component Structure](/CONTRIBUTING.md#component-structure)

**"How do I handle missing data?"**
- [STYLE_GUIDE.md - Conditional Rendering](/STYLE_GUIDE.md#pattern-conditional-rendering)
- [Guidelines.md - Modularity](/guidelines/Guidelines.md#1-modularity)

---

### Styling & Theming

**"What colors should I use?"**
- [THEME.md - Color Palette](/THEME.md#-color-palette)
- [STYLE_GUIDE.md - Color System](/STYLE_GUIDE.md#color-system)
- [Guidelines.md - Styling Conventions](/guidelines/Guidelines.md#styling-conventions)

**"How do I support dark mode?"**
- [THEME.md - Overview](/THEME.md#-overview)
- [THEME.md - Usage Guide](/THEME.md#-usage-guide)
- [STYLE_GUIDE.md - Theme Support](/STYLE_GUIDE.md#-theme-support)

**"Can I override typography?"**
- [STYLE_GUIDE.md - Typography](/STYLE_GUIDE.md#typography)
- [CONTRIBUTING.md - Tailwind CSS](/CONTRIBUTING.md#tailwind-css)

---

### Data & Types

**"What data structure should I use?"**
- [types/index.ts](/types/index.ts) - All TypeScript interfaces
- [mockResults.ts](/data/mockResults.ts) - Example data
- [Guidelines.md - Mock Data Structure](/guidelines/Guidelines.md#mock-data-structure)

**"What are the Constitutional AI principles?"**
- [Mission.tsx](/pages/Mission.tsx) - Detailed explanation with citations
- [Guidelines.md - Constitutional AI Framework](/guidelines/Guidelines.md#constitutional-ai-framework)
- [README.md - Constitutional AI Framework](/README.md#constitutional-ai-framework)

**"What are the processing time benchmarks?"**
- [Guidelines.md - System Specifications](/guidelines/Guidelines.md#system-specifications)
- [README.md - Performance Benchmarks](/README.md#-performance-benchmarks)
- [ApiDocs.tsx](/pages/ApiDocs.tsx) - API response times

---

### Contributing

**"How do I make my first contribution?"**
- [CONTRIBUTING.md](/CONTRIBUTING.md) - Start here
- [CONTRIBUTING.md - Development Workflow](/CONTRIBUTING.md#-development-workflow)
- [CONTRIBUTING.md - Code Standards](/CONTRIBUTING.md#-code-standards)

**"What's the commit message format?"**
- [CONTRIBUTING.md - Commit Messages](/CONTRIBUTING.md#commit-messages)

**"What do I check before submitting a PR?"**
- [CONTRIBUTING.md - Quality Checklist](/CONTRIBUTING.md#-quality-checklist)
- [STYLE_GUIDE.md - Component Checklist](/STYLE_GUIDE.md#-component-checklist)

---

### Troubleshooting

**"My component isn't rendering!"**
- [README.md - Troubleshooting](/README.md#-troubleshooting)
- Check if data exists: [STYLE_GUIDE.md - Conditional Rendering](/STYLE_GUIDE.md#pattern-conditional-rendering)

**"Theme colors look wrong!"**
- [README.md - Dark mode colors](/README.md#issue-dark-mode-colors-look-wrong)
- [THEME.md - Testing Themes](/THEME.md#-testing-themes)
- [THEME.md - Common Issues](/THEME.md#common-issues--fixes)

**"Build is failing!"**
- [README.md - Build fails](/README.md#issue-build-fails-with-typescript-errors)
- [CONTRIBUTING.md - TypeScript](/CONTRIBUTING.md#typescript)

---

## 🔍 Search by File Type

### Documentation Files (.md)

```
/README.md                    → Project overview
/CHANGELOG.md                 → Version history
/CONTRIBUTING.md              → Contribution guide
/STYLE_GUIDE.md              → Design patterns
/THEME.md                    → Theme system
/DOCUMENTATION_INDEX.md       → This file
/guidelines/Guidelines.md     → Complete dev guide
```

### Page Components (.tsx in /pages/)

```
/pages/Home.tsx              → Landing page
/pages/Results.tsx           → Fact-check results
/pages/HowItWorks.tsx        → Methodology
/pages/Mission.tsx           → Constitutional AI principles
/pages/ApiDocs.tsx           → API documentation
/pages/EarlyAccess.tsx       → Beta signup
/pages/NotFound.tsx          → 404 page
```

### Result Components (.tsx in /components/results/)

```
/components/results/VerdictHeader.tsx        → Verdict display
/components/results/ExecutiveSummary.tsx     → Summary
/components/results/QualityIndicators.tsx    → Quality metrics
/components/results/SourceBreakdown.tsx      → Source distribution
/components/results/SourceList.tsx           → Source tiers
/components/results/AIModelConsensus.tsx     → AI model verdicts
/components/results/EvidenceTimeline.tsx     → Timeline
/components/results/ConstitutionalAIReport.tsx → CAI compliance
/components/results/LimitationsSection.tsx   → Limitations
/components/results/DetailedAnalysisTabs.tsx → Detailed tabs
/components/results/ActionButtons.tsx        → User actions
```

### Core Components (.tsx in /components/)

```
/components/Navigation.tsx       → Shared navigation
/components/ThemeProvider.tsx    → Theme state management
/components/ThemeToggle.tsx      → Theme switcher UI
```

### Type Definitions (.ts)

```
/types/index.ts                  → All TypeScript interfaces
```

### Data Files (.ts)

```
/data/mockResults.ts             → Sample fact-check data
```

### Style Files (.css)

```
/styles/globals.css              → Global styles & theme variables
```

---

## 📊 Documentation Stats

| Category | Files | Total Lines | Reading Time |
|----------|-------|-------------|--------------|
| Main Documentation | 7 | ~4,500 | 90 min |
| Code Files | 25+ | ~5,000+ | N/A |
| Total Documentation Coverage | 100% | - | - |

---

## 🎓 Learning Paths

### Path 1: Frontend Developer (New to Project)

1. [README.md](/README.md) - Understand what we're building
2. [Guidelines.md](/guidelines/Guidelines.md) - Learn the architecture
3. [STYLE_GUIDE.md](/STYLE_GUIDE.md) - Component patterns
4. [types/index.ts](/types/index.ts) - Data structures
5. [CONTRIBUTING.md](/CONTRIBUTING.md) - Start contributing

**Outcome:** Ready to build new components

---

### Path 2: Designer/UX (Visual Focus)

1. [Mission.tsx](/pages/Mission.tsx) - Understand the purpose
2. [HowItWorks.tsx](/pages/HowItWorks.tsx) - User flow
3. [STYLE_GUIDE.md](/STYLE_GUIDE.md) - Design system
4. [THEME.md](/THEME.md) - Color and theming
5. [Guidelines.md - Styling](/guidelines/Guidelines.md#styling-conventions) - Implementation

**Outcome:** Ready to design within the system

---

### Path 3: Product Manager (Strategic Focus)

1. [Mission.tsx](/pages/Mission.tsx) - Our mission and values
2. [README.md](/README.md) - Current capabilities
3. [HowItWorks.tsx](/pages/HowItWorks.tsx) - How it works
4. [CHANGELOG.md](/CHANGELOG.md) - Recent changes
5. [Guidelines.md - Future](/guidelines/Guidelines.md#future-enhancements) - Roadmap

**Outcome:** Ready to plan features

---

### Path 4: QA/Tester (Quality Focus)

1. [README.md - Troubleshooting](/README.md#-troubleshooting) - Common issues
2. [Guidelines.md - Quality Assurance](/guidelines/Guidelines.md#quality-assurance) - Checklists
3. [CONTRIBUTING.md - Quality Checklist](/CONTRIBUTING.md#-quality-checklist) - Testing standards
4. [THEME.md - Testing](/THEME.md#-testing-themes) - Theme testing
5. [mockResults.ts](/data/mockResults.ts) - Test data

**Outcome:** Ready to test thoroughly

---

## 🔗 Cross-References Map

### Documentation Links

```
README.md
├─→ Guidelines.md (architecture)
├─→ CONTRIBUTING.md (how to contribute)
├─→ STYLE_GUIDE.md (design patterns)
├─→ THEME.md (theme system)
├─→ CHANGELOG.md (changes)
├─→ Mission.tsx (principles)
├─→ HowItWorks.tsx (methodology)
└─→ ApiDocs.tsx (API)

Guidelines.md
├─→ Mission.tsx (CAI principles)
├─→ HowItWorks.tsx (processing)
├─→ ApiDocs.tsx (API specs)
└─→ types/index.ts (data structures)

CONTRIBUTING.md
├─→ Guidelines.md (architecture)
├─→ STYLE_GUIDE.md (patterns)
└─→ THEME.md (theming)

STYLE_GUIDE.md
├─→ Guidelines.md (architecture)
├─→ THEME.md (colors)
└─→ CONTRIBUTING.md (standards)

THEME.md
├─→ STYLE_GUIDE.md (usage)
├─→ globals.css (variables)
└─→ ThemeProvider.tsx (implementation)
```

---

## 🆕 Recently Updated

| File | Last Updated | Changes |
|------|--------------|---------|
| DOCUMENTATION_INDEX.md | Oct 22, 2025 | Created comprehensive index |
| CONTRIBUTING.md | Oct 22, 2025 | Complete contribution guide |
| STYLE_GUIDE.md | Oct 22, 2025 | Design patterns & conventions |
| THEME.md | Oct 22, 2025 | Theme system documentation |
| README.md | Oct 22, 2025 | Added troubleshooting section |
| CHANGELOG.md | Oct 22, 2025 | Consistency updates documented |
| Guidelines.md | Oct 22, 2025 | Complete overhaul with cross-refs |

---

## 📞 Still Can't Find What You Need?

### By Topic

- **Code/Implementation:** See [Guidelines.md](/guidelines/Guidelines.md) or [CONTRIBUTING.md](/CONTRIBUTING.md)
- **Design/Visual:** See [STYLE_GUIDE.md](/STYLE_GUIDE.md) or [THEME.md](/THEME.md)
- **Product/Mission:** See [Mission.tsx](/pages/Mission.tsx) or [HowItWorks.tsx](/pages/HowItWorks.tsx)
- **Troubleshooting:** See [README.md - Troubleshooting](/README.md#-troubleshooting)

### Contact

- **Slack:** #genuverity-dev
- **Email:** dev@genuverity.com
- **GitHub:** Create an issue

---

**Last Updated:** October 22, 2025  
**Maintained by:** GenuVerity Development Team

---

*This index is automatically updated when new documentation is added. If you add a new doc file, update this index.*
