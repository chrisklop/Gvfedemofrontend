# GenuVerity Frontend-Backend Integration Task

**Purpose:** Complete guide for integrating the GenuVerity frontend with the live backend API  
**For:** Claude Code CLI or any AI development assistant  
**Created:** October 22, 2025

---

## 🎯 Objective

Integrate the GenuVerity frontend with the live backend API, making all result sections dynamic while maintaining the existing modular architecture, styling system, and responsive design.

---

## 📚 Context & Documentation

This is a **fully documented, enterprise-grade React application**. Before making ANY changes, you MUST review:

### Required Reading (in order):

1. **[DOCUMENTATION_INDEX.md](/DOCUMENTATION_INDEX.md)** - Complete documentation navigator
2. **[Guidelines.md](/guidelines/Guidelines.md)** - Architecture and data flow
3. **[STYLE_GUIDE.md](/STYLE_GUIDE.md)** - Component patterns and conventions
4. **[CONTRIBUTING.md](/CONTRIBUTING.md)** - Code standards and quality requirements
5. **[types/index.ts](/types/index.ts)** - All TypeScript interfaces
6. **[data/mockResults.ts](/data/mockResults.ts)** - Current mock data structure
7. **[pages/ApiDocs.tsx](/pages/ApiDocs.tsx)** - Backend API specification

### Supplementary Documentation:

- **[THEME.md](/THEME.md)** - Dark/light mode system
- **[PROGRESS_INDICATOR_GUIDE.md](/PROGRESS_INDICATOR_GUIDE.md)** - Progress screen usage
- **[README.md](/README.md)** - Project overview

---

## 📊 Current State

### What's Already Built

The application currently uses **mock data** from `/data/mockResults.ts`. All components are built to handle this data structure and follow the modular pattern where components return `null` if their data doesn't exist.

**✅ Completed Features:**
- Full UI/UX with responsive design
- Shared Navigation component with theme toggle
- Analysis Progress screen (animated 5-stage pipeline)
- Results page with 11 modular components
- Home page with search interface
- Multiple documentation pages (Mission, How It Works, API Docs, etc.)
- Dark/light mode with persistence
- Complete TypeScript type definitions

**🔄 What Needs Integration:**
- Connect Home page search to backend API
- Fetch real fact-check results from backend
- Handle loading states during 25-45s processing
- Map backend response to frontend types
- Error handling and retry logic

---

## 🔌 Backend API Details

### Base Configuration

**Base URL:** `[INSERT YOUR API BASE URL HERE]`

Example: `https://api.genuverity.com` or `http://localhost:8000`

**Authentication Method:** `[INSERT AUTH METHOD - API Key, Bearer Token, OAuth, etc.]`

Example:
```typescript
headers: {
  'Authorization': `Bearer ${API_KEY}`,
  // or
  'X-API-Key': API_KEY,
}
```

### Primary Endpoint

**Endpoint:** `POST /api/v1/fact-check`

**Request Format:**
```json
{
  "claim": "The statement to verify",
  "options": {
    "deep_analysis": true,
    "include_timeline": true,
    "include_ai_consensus": true
  }
}
```

**Response Format:** 
See `/pages/ApiDocs.tsx` for complete specification. The response should map to the `FactCheckResult` interface in `/types/index.ts`.

**Expected Response Time:** 25-45 seconds

**Response Structure (Expected):**
```json
{
  "id": "unique-result-id",
  "claim": "The original claim",
  "verdict": "TRUE|FALSE|MIXED|UNVERIFIABLE",
  "confidence": 95,
  "analysisTime": "38s",
  "summary": "Executive summary text...",
  "sources": [...],
  "qualityMetrics": {...},
  "constitutionalAI": {...},
  // ... see types/index.ts for full structure
}
```

### Additional Endpoints (if applicable)

**Get Result by ID:** `GET /api/v1/fact-check/{id}`

**List Recent Results:** `GET /api/v1/fact-check/recent`

**Health Check:** `GET /api/v1/health`

---

## 🛠️ Implementation Requirements

### 1. API Integration in Results Page

**File:** `/pages/Results.tsx`

**Current code (lines 9-10):**
```typescript
import { mockFactCheckResult } from '../data/mockResults';
// ...
const result = mockFactCheckResult;
```

**Required changes:**

- [ ] Remove mock data import
- [ ] Extract `id` from URL params (`/verify/:id`)
- [ ] Add loading state with skeleton loaders
- [ ] Add error handling with user-friendly messages
- [ ] Handle timeout for long-running requests (>60s)
- [ ] Add retry logic for failed requests
- [ ] Implement proper TypeScript types
- [ ] Preserve existing modular component pattern

**Implementation Pattern:**
```typescript
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FactCheckResult } from '../types';
import { fetchFactCheckResult } from '../services/api';
import { Skeleton } from '../components/ui/skeleton';

export default function Results() {
  const { id } = useParams<{ id: string }>();
  const [result, setResult] = useState<FactCheckResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchFactCheckResult(id);
        setResult(data);
      } catch (err) {
        setError(err.message || 'Failed to load results');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id]);

  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorState error={error} onRetry={() => window.location.reload()} />;
  if (!result) return <NotFound />;

  return (
    <ResultsLayout result={result}>
      {/* All existing components */}
    </ResultsLayout>
  );
}
```

### 2. Search Submission from Home Page

**File:** `/pages/Home.tsx`

**Current code (lines 15-24):**
```typescript
const handleSearch = () => {
  // If empty, use a default demo claim
  if (!searchQuery.trim()) {
    setSearchQuery('Vaccines cause autism');
  }
  
  // Show the analysis progress screen
  setIsAnalyzing(true);
  
  // In production, this would trigger the actual API call
  // For now, we simulate the progress and then navigate
};
```

**Required changes:**

- [ ] Connect search form to API endpoint
- [ ] Submit claim to backend
- [ ] Show progress screen during processing (25-45s expected)
- [ ] Navigate to `/verify/:id` with returned result ID
- [ ] Handle errors gracefully
- [ ] Show error toast on failure
- [ ] Disable duplicate submissions
- [ ] Add loading state to button

**Implementation Pattern:**
```typescript
import { submitFactCheck } from '../services/api';
import { toast } from 'sonner@2.0.3';

const [isSubmitting, setIsSubmitting] = useState(false);

const handleSearch = async () => {
  const claim = searchQuery.trim() || 'Vaccines cause autism';
  
  try {
    setIsSubmitting(true);
    setIsAnalyzing(true);
    
    // Submit to backend
    const response = await submitFactCheck(claim);
    
    // Progress screen continues showing...
    // When backend responds (or progress completes), navigate
    // Note: The AnalysisProgress component simulates ~38s
    // Your backend should respond within that time
    
    // Store the result ID for when progress completes
    setResultId(response.id);
    
  } catch (error) {
    setIsAnalyzing(false);
    setIsSubmitting(false);
    toast.error(error.message || 'Failed to submit claim');
  }
};

const handleAnalysisComplete = (simulatedId: string) => {
  // Use the real result ID from backend, not the simulated one
  const id = resultId || simulatedId;
  navigate(`/verify/${id}`);
};
```

### 3. Dynamic Component Rendering

**All components in `/components/results/`** already follow this pattern:

```typescript
export function Component({ data }: Props) {
  if (!data || data.length === 0) return null;
  return <div>{/* Render */}</div>;
}
```

**✅ You must preserve this pattern!** Components should:
- Return `null` if their data is missing
- Not throw errors for undefined data
- Render only when data exists
- Maintain existing styling

**No changes needed to result components** - they already handle dynamic data correctly!

### 4. Data Mapping

If the backend response format differs from `FactCheckResult` interface:

**Create a mapper function:**

**File:** `/utils/apiMapper.ts` (NEW FILE)

```typescript
import { FactCheckResult } from '../types';

/**
 * Maps backend API response to frontend FactCheckResult type
 * Adjust this based on your actual backend response structure
 */
export function mapApiResponseToFactCheckResult(apiResponse: any): FactCheckResult {
  return {
    id: apiResponse.verdict?.id || apiResponse.id,
    claim: apiResponse.claim,
    verdict: apiResponse.verdict?.verdict?.toUpperCase() || 'UNVERIFIABLE',
    confidence: apiResponse.verdict?.confidence || 0,
    analysisTime: apiResponse.metadata?.processing_time || '38s',
    totalSourceCount: apiResponse.sources?.total_count || 0,
    summary: apiResponse.analysis?.summary || '',
    bottomLine: apiResponse.analysis?.bottom_line || '',
    
    // Quality metrics
    qualityMetrics: {
      sourceAgreement: apiResponse.metrics?.source_agreement || 0,
      evidenceQuality: apiResponse.metrics?.evidence_quality || 0,
      sourceCoverage: apiResponse.metrics?.source_coverage || 0,
      reliabilityScore: apiResponse.metrics?.reliability_score || 0,
    },
    
    // Sources
    sources: (apiResponse.sources?.items || []).map((s: any) => ({
      id: s.id,
      title: s.title,
      organization: s.organization,
      tier: s.tier,
      url: s.url,
      credibilityScore: s.credibility_score,
      publishDate: s.publish_date,
      verdict: s.verdict,
      keyFindings: s.key_findings || [],
    })),
    
    // Constitutional AI
    constitutionalAI: {
      overallCompliance: apiResponse.constitutional_ai?.overall_compliance || 0,
      principles: apiResponse.constitutional_ai?.principles || [],
      minimumThreshold: 87,
      passed: (apiResponse.constitutional_ai?.overall_compliance || 0) >= 87,
    },
    
    // AI Model Consensus
    aiModels: apiResponse.ai_models?.map((m: any) => ({
      name: m.name,
      verdict: m.verdict,
      confidence: m.confidence,
      reasoning: m.reasoning,
    })) || [],
    
    // Timeline
    timeline: apiResponse.timeline?.map((e: any) => ({
      date: e.date,
      title: e.title,
      description: e.description,
      impact: e.impact,
    })) || [],
    
    // Related claims
    relatedClaims: apiResponse.related_claims || [],
    
    // Limitations
    limitations: apiResponse.limitations || [],
  };
}
```

### 5. Loading States

Use existing Skeleton components from `/components/ui/skeleton.tsx`:

**Create:** `/components/LoadingStates.tsx` (NEW FILE)

```typescript
import { Skeleton } from './ui/skeleton';

export function ResultsLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-6">
          {/* Verdict Header Skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
          
          {/* Executive Summary Skeleton */}
          <Skeleton className="h-48 w-full" />
          
          {/* Quality Indicators Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
          
          {/* Main Content Skeleton */}
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    </div>
  );
}

export function ErrorState({ 
  error, 
  onRetry 
}: { 
  error: string; 
  onRetry: () => void;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-4">
        <div className="text-6xl">⚠️</div>
        <h2>Unable to Load Results</h2>
        <p className="text-muted-foreground">{error}</p>
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
```

### 6. Error Handling

**User-friendly error messages:**

```typescript
const ERROR_MESSAGES = {
  NETWORK_ERROR: "Unable to connect. Please check your connection.",
  TIMEOUT_ERROR: "Analysis is taking longer than expected. Please try again.",
  NOT_FOUND: "Fact-check result not found.",
  SERVER_ERROR: "Our servers are experiencing issues. Please try again later.",
  RATE_LIMIT: "Too many requests. Please wait a moment and try again.",
  VALIDATION_ERROR: "Invalid claim format. Please try a different statement.",
};

function handleApiError(error: any): string {
  if (error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT') {
    return ERROR_MESSAGES.TIMEOUT_ERROR;
  }
  if (error.response?.status === 404) {
    return ERROR_MESSAGES.NOT_FOUND;
  }
  if (error.response?.status === 429) {
    return ERROR_MESSAGES.RATE_LIMIT;
  }
  if (error.response?.status === 400) {
    return ERROR_MESSAGES.VALIDATION_ERROR;
  }
  if (error.response?.status >= 500) {
    return ERROR_MESSAGES.SERVER_ERROR;
  }
  if (!error.response) {
    return ERROR_MESSAGES.NETWORK_ERROR;
  }
  return error.message || 'An unexpected error occurred';
}
```

### 7. API Service Layer

**Create:** `/services/api.ts` (NEW FILE)

```typescript
import { FactCheckResult } from '../types';
import { mapApiResponseToFactCheckResult } from '../utils/apiMapper';

// Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
const API_KEY = import.meta.env.VITE_API_KEY;
const API_TIMEOUT = 60000; // 60 seconds

/**
 * Base fetch wrapper with error handling
 */
async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        ...options.headers,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error: any) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - analysis is taking longer than expected');
    }
    
    throw error;
  }
}

/**
 * Submit a new fact-check claim
 * Returns the result ID to track progress
 */
export async function submitFactCheck(claim: string): Promise<{ id: string }> {
  const response = await apiFetch('/api/v1/fact-check', {
    method: 'POST',
    body: JSON.stringify({
      claim,
      options: {
        deep_analysis: true,
        include_timeline: true,
        include_ai_consensus: true,
      },
    }),
  });

  return {
    id: response.id || response.result_id || response.data?.id,
  };
}

/**
 * Fetch a completed fact-check result by ID
 */
export async function fetchFactCheckResult(id: string): Promise<FactCheckResult> {
  const response = await apiFetch(`/api/v1/fact-check/${id}`);
  
  // Map backend response to frontend type
  return mapApiResponseToFactCheckResult(response);
}

/**
 * Check if a fact-check is still processing
 * Returns null if not ready, or the result if complete
 */
export async function pollFactCheckStatus(id: string): Promise<FactCheckResult | null> {
  try {
    const response = await apiFetch(`/api/v1/fact-check/${id}/status`);
    
    if (response.status === 'completed') {
      return mapApiResponseToFactCheckResult(response.result);
    }
    
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Health check endpoint
 */
export async function healthCheck(): Promise<boolean> {
  try {
    await apiFetch('/api/v1/health');
    return true;
  } catch {
    return false;
  }
}
```

### 8. Environment Variables

**Create:** `.env` (NEW FILE - add to .gitignore!)

```env
# Backend API Configuration
VITE_API_BASE_URL=https://api.genuverity.com
VITE_API_KEY=your_api_key_here

# Optional: Feature flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_TRACKING=true
```

**Create:** `.env.example` (NEW FILE - commit this one!)

```env
# Backend API Configuration
VITE_API_BASE_URL=https://api.genuverity.com
VITE_API_KEY=your_api_key_here

# Optional: Feature flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_ERROR_TRACKING=false
```

**Update:** `.gitignore`

```gitignore
# Environment variables
.env
.env.local
.env.production
```

---

## ⚠️ Critical Constraints

### ✅ Must Follow

1. **TypeScript Strict Mode** - All types must match `/types/index.ts`
2. **Modular Pattern** - Components return `null` for missing data
3. **No Style Changes** - Preserve all Tailwind classes and responsive design
4. **No Typography Overrides** - Follow STYLE_GUIDE.md rules (no font-size, font-weight, line-height classes)
5. **Theme Support** - Works in both light and dark modes
6. **Cross-References** - Update documentation if adding new patterns
7. **Component Structure** - Follow patterns in CONTRIBUTING.md

### ❌ Must NOT Do

- ❌ Modify component visual appearance
- ❌ Change color system or theme variables
- ❌ Override default typography (unless necessary)
- ❌ Break the modular rendering pattern
- ❌ Add hardcoded colors (use theme variables)
- ❌ Modify protected files (`/components/figma/ImageWithFallback.tsx`)
- ❌ Change Shadcn UI components without wrapping
- ❌ Remove or modify the AnalysisProgress component

---

## ✅ Testing Checklist

After implementation, verify:

### Functionality Tests

- [ ] Search form submits claims successfully
- [ ] Loading states appear during API calls
- [ ] Progress screen shows during analysis
- [ ] Results page displays dynamic data
- [ ] All 11 result components render conditionally based on data
- [ ] Error messages display correctly
- [ ] Retry mechanism works
- [ ] Navigation flows work (Home → Progress → Results)
- [ ] Empty search uses default demo claim

### Data Integrity Tests

- [ ] All TypeScript types match backend response
- [ ] Constitutional AI scores display correctly (0-100%)
- [ ] Source tiers map correctly (1-6)
- [ ] Verdict colors match (TRUE=green, FALSE=red, MIXED=orange, UNVERIFIABLE=gray)
- [ ] Processing times shown are accurate (25-45s range)
- [ ] Source counts are correct
- [ ] Confidence scores display properly (0-100%)

### Styling & Responsive Tests

- [ ] No visual regressions
- [ ] Works on mobile (320px+)
- [ ] Works on tablet (768px+)
- [ ] Works on desktop (1024px+)
- [ ] Dark mode works correctly
- [ ] Light mode works correctly
- [ ] Theme toggle persists across pages
- [ ] Loading skeletons match layout
- [ ] Progress screen is responsive

### Performance Tests

- [ ] No unnecessary re-renders
- [ ] API calls are not duplicated
- [ ] Large source lists don't lag
- [ ] Charts render smoothly
- [ ] Images load without layout shift
- [ ] No memory leaks

### Accessibility Tests

- [ ] Loading states announced to screen readers
- [ ] Error messages accessible
- [ ] Focus management during loading
- [ ] Keyboard navigation still works
- [ ] Color contrast ratios maintained
- [ ] ARIA labels present where needed

---

## 📝 Code Quality Standards

### Component Structure Pattern

```typescript
import { useState, useEffect } from 'react';
import { FactCheckResult } from '../types';

/**
 * Component description
 * @component
 */
export default function ComponentName() {
  // 1. Hooks (state, context, router)
  const [state, setState] = useState(initialValue);
  
  // 2. Effects
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  // 3. Event Handlers
  const handleEvent = () => {
    // Handler logic
  };
  
  // 4. Early Returns (loading, error, empty states)
  if (loading) return <LoadingState />;
  if (error) return <ErrorState />;
  if (!data) return null;
  
  // 5. Main Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### API Call Pattern

```typescript
async function apiCall() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}
```

### Error Handling Pattern

```typescript
try {
  const result = await apiCall();
  setData(result);
} catch (error: any) {
  const message = handleApiError(error);
  setError(message);
  toast.error(message);
}
```

---

## 📂 File Changes Expected

### New Files to Create

```
/services/api.ts              - API service layer
/utils/apiMapper.ts           - Response mapping
/components/LoadingStates.tsx - Loading skeletons and error states
/.env                         - Environment variables (DO NOT COMMIT)
/.env.example                 - Environment template (COMMIT THIS)
```

### Files to Modify

```
/pages/Home.tsx              - Add API submission logic
/pages/Results.tsx           - Replace mock with API calls
/.gitignore                  - Add .env files
/README.md                   - Update setup instructions
/CHANGELOG.md                - Document API integration
```

### Files to Review (Don't Modify Unless Necessary)

```
/components/results/*.tsx     - Should work as-is
/components/ui/*.tsx          - Don't modify Shadcn components
/styles/globals.css           - Theme variables
/types/index.ts               - Verify types match backend
/components/AnalysisProgress.tsx - Already works perfectly
```

---

## 🎯 Success Criteria

Integration is complete when:

1. ✅ User can search for claims from Home page
2. ✅ Progress screen shows during 25-45s analysis
3. ✅ Results page displays real data from backend
4. ✅ All 11 result components render dynamically
5. ✅ Loading states are smooth and informative
6. ✅ Errors are handled gracefully with retry options
7. ✅ No visual regressions (matches current design)
8. ✅ Works in both light and dark themes
9. ✅ Responsive on all devices (mobile, tablet, desktop)
10. ✅ TypeScript has no errors
11. ✅ Environment variables are documented
12. ✅ All tests pass

---

## 🔧 Backend Requirements

### What We Need From Your Backend

1. **Base URL and Port**
   - Example: `https://api.genuverity.com` or `http://localhost:8000`

2. **Authentication Method**
   - API Key in header?
   - Bearer token?
   - OAuth?
   - Example request with auth

3. **Exact Response Format**
   - Does it match `/types/index.ts` FactCheckResult interface?
   - If not, provide sample JSON response

4. **Processing Time**
   - Typical: 25-45 seconds
   - Maximum: 60 seconds?
   - Should we show progress screen while waiting?

5. **Error Codes**
   - What HTTP status codes do you return?
   - What error formats? (JSON with error field?)

6. **Rate Limits**
   - Requests per minute?
   - Do we need to implement throttling?

7. **WebSocket Support** (Optional)
   - Can we get real-time progress updates?
   - WebSocket endpoint URL?

8. **CORS Configuration**
   - Is CORS enabled for frontend origin?
   - Any specific headers required?

### Example Backend Response We're Expecting

```json
{
  "id": "abc123xyz",
  "claim": "Vaccines cause autism",
  "verdict": {
    "verdict": "FALSE",
    "confidence": 98
  },
  "metadata": {
    "processing_time": "38s",
    "analysis_date": "2025-10-22T10:30:00Z"
  },
  "analysis": {
    "summary": "Multiple systematic reviews and meta-analyses...",
    "bottom_line": "No credible scientific evidence supports this claim."
  },
  "sources": {
    "total_count": 327,
    "items": [
      {
        "id": "src-001",
        "title": "Vaccines and Autism: A Large-Scale Study",
        "organization": "CDC",
        "tier": 4,
        "url": "https://...",
        "credibility_score": 98,
        "publish_date": "2019-03-15",
        "verdict": "FALSE",
        "key_findings": ["No link found", "Sample size: 650,000"]
      }
    ]
  },
  "metrics": {
    "source_agreement": 98,
    "evidence_quality": 96,
    "source_coverage": 94,
    "reliability_score": 97
  },
  "constitutional_ai": {
    "overall_compliance": 94,
    "principles": [
      {
        "name": "Epistemic Humility",
        "score": 92,
        "weight": 20,
        "reasoning": "..."
      }
    ]
  },
  "ai_models": [...],
  "timeline": [...],
  "related_claims": [...],
  "limitations": [...]
}
```

---

## 📞 Questions to Resolve Before Starting

Before starting the integration, please provide:

1. ✅ **Backend API base URL** - Where should we point requests?
2. ✅ **Authentication details** - How do we authenticate?
3. ✅ **Sample API response** - Does it match our types?
4. ✅ **Rate limits** - Any restrictions we need to handle?
5. ✅ **WebSocket endpoint** - For real-time updates (optional)?
6. ✅ **Maximum claim length** - Any validation needed?
7. ✅ **CORS configuration** - Is it enabled for our domain?
8. ✅ **Error response format** - What do errors look like?

---

## 🎨 Design Preservation Rules

### What Makes GenuVerity's Design Special

1. **Minimal, Professional Aesthetic**
   - No flashy animations
   - Subtle transitions
   - Enterprise-grade polish

2. **Constitutional AI Focus**
   - 5 principles displayed prominently
   - 87% minimum compliance threshold
   - Transparent methodology

3. **Color System**
   - Burnt orange primary (#d2562d)
   - Verdict colors (green/red/orange/gray)
   - Theme-aware variables

4. **Typography**
   - Default HTML element styles in globals.css
   - No Tailwind font utilities unless necessary
   - Consistent hierarchy

5. **Responsive Design**
   - Mobile-first approach
   - 3-column → 2-column → 1-column layouts
   - Touch-friendly (44px minimum targets)

### What Must NOT Change

- ❌ Navigation component and logo
- ❌ Theme toggle functionality
- ❌ Progress screen design and animations
- ❌ Result component layouts
- ❌ Color system and verdict colors
- ❌ Typography system
- ❌ Responsive breakpoints
- ❌ Constitutional AI principles display

---

## 📚 Reference Files

### Architecture & Patterns
- **[Guidelines.md](/guidelines/Guidelines.md)** - Full architecture
- **[STYLE_GUIDE.md](/STYLE_GUIDE.md)** - Component patterns
- **[CONTRIBUTING.md](/CONTRIBUTING.md)** - Code standards

### Type Definitions
- **[types/index.ts](/types/index.ts)** - All interfaces
- **[data/mockResults.ts](/data/mockResults.ts)** - Example data

### API Documentation
- **[pages/ApiDocs.tsx](/pages/ApiDocs.tsx)** - API specification
- **[PROGRESS_INDICATOR_GUIDE.md](/PROGRESS_INDICATOR_GUIDE.md)** - Progress screen

### Theming & Design
- **[THEME.md](/THEME.md)** - Color system
- **[styles/globals.css](/styles/globals.css)** - CSS variables

---

## 🚀 Implementation Checklist

Use this checklist to track your progress:

### Setup Phase
- [ ] Read all required documentation
- [ ] Understand current architecture
- [ ] Review type definitions
- [ ] Confirm backend API details
- [ ] Set up environment variables

### Development Phase
- [ ] Create `/services/api.ts`
- [ ] Create `/utils/apiMapper.ts`
- [ ] Create `/components/LoadingStates.tsx`
- [ ] Update `/pages/Home.tsx` for API submission
- [ ] Update `/pages/Results.tsx` for API fetching
- [ ] Add error handling throughout
- [ ] Test with real backend

### Testing Phase
- [ ] Functionality tests (all scenarios)
- [ ] Data integrity tests (types match)
- [ ] Styling tests (no regressions)
- [ ] Responsive tests (all devices)
- [ ] Performance tests (no slowdowns)
- [ ] Accessibility tests (keyboard, screen reader)

### Documentation Phase
- [ ] Update README.md with setup instructions
- [ ] Update CHANGELOG.md with integration milestone
- [ ] Add inline comments to new code
- [ ] Create `.env.example` template
- [ ] Document any backend-specific gotchas

### Cleanup Phase
- [ ] Remove unused mock data imports
- [ ] Remove console.logs
- [ ] Fix TypeScript errors
- [ ] Format code consistently
- [ ] Test one final time

---

## 💡 Tips for Success

### Do This ✅

1. **Read the docs first** - Don't skip documentation
2. **Preserve existing patterns** - Match the code style
3. **Test incrementally** - Don't change everything at once
4. **Use TypeScript strictly** - No `any` types
5. **Handle errors gracefully** - User-friendly messages
6. **Keep it modular** - Small, focused functions
7. **Maintain responsiveness** - Test on all devices
8. **Follow theme system** - Use CSS variables
9. **Document your changes** - Update CHANGELOG.md
10. **Ask questions** - If backend structure differs, clarify

### Don't Do This ❌

1. **Don't change styling** - Preserve the design
2. **Don't modify Shadcn components** - Use them as-is
3. **Don't override typography** - Follow globals.css
4. **Don't remove error handling** - Keep all try-catch blocks
5. **Don't skip loading states** - Always show feedback
6. **Don't hardcode values** - Use environment variables
7. **Don't break the modular pattern** - Components return null
8. **Don't commit .env files** - Add to .gitignore
9. **Don't skip TypeScript** - Fix all type errors
10. **Don't rush** - Quality over speed

---

## 🎓 Learning Resources

If you need more context:

- **React + TypeScript:** https://react-typescript-cheatsheet.netlify.app/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Fetch API:** https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- **Error Handling:** [STYLE_GUIDE.md](/STYLE_GUIDE.md#error-handling)
- **Motion (Framer Motion):** https://motion.dev

---

## 📋 Final Notes

### This Codebase Is Special

This is a **fully documented, enterprise-grade application** with:
- 4,500+ lines of documentation
- Strict TypeScript types
- Modular component architecture
- Constitutional AI principles at its core
- Professional, minimal design

**Treat it with care.** Every component, every pattern, every style choice is intentional.

### The Modular Pattern Is Key

Components that return `null` for missing data is **not a bug** - it's the core feature that makes the results page dynamic. Preserve this pattern!

### The Progress Screen Is Complete

`AnalysisProgress.tsx` is already built and integrated. Don't modify it unless absolutely necessary. It works perfectly with real API calls - just trigger it before the API call and navigate when complete.

### Documentation Is Your Friend

When in doubt, **check the documentation**. Everything is explained in:
- DOCUMENTATION_INDEX.md (start here)
- Guidelines.md (architecture)
- STYLE_GUIDE.md (patterns)
- CONTRIBUTING.md (standards)

---

## 🎯 Your Mission

**Primary Goal:** Make the frontend work with your backend API while preserving 100% of the existing design, patterns, and functionality.

**Success Looks Like:**
1. User searches on home page → API call
2. Progress screen shows → Real backend processing
3. Results page displays → Dynamic data from API
4. Everything looks and works exactly the same as before
5. Error handling is robust and user-friendly

**You've Got This!** 🚀

The frontend is production-ready. All you need to do is connect it to your backend, and GenuVerity will be fully functional.

---

**Last Updated:** October 22, 2025  
**Status:** Ready for Backend Integration  
**Questions?** Review [DOCUMENTATION_INDEX.md](/DOCUMENTATION_INDEX.md) first

**Good luck!** 🍀
