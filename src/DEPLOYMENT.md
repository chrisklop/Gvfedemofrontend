# GenuVerity Deployment Guide

## Overview

This guide helps you deploy GenuVerity to production environments like Vercel, Netlify, or other hosting platforms.

---

## Quick Deployment to Vercel

### Prerequisites
- GitHub account with your GenuVerity repository
- Vercel account (free tier works)

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect React/Vite settings

3. **Configure Build Settings** (usually auto-detected)
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` or `vite build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Environment Variables**
   - No environment variables needed for the frontend-only version
   - Future API integration will require `VITE_API_URL`

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your app will be live at `your-project.vercel.app`

---

## Common Issues & Solutions

### ❌ Images Not Loading

**Problem:** `figma:asset` imports don't work outside Figma Make environment

**Solution:** Before deploying to Vercel, replace Figma asset imports with the `<Logo />` component

**In Figma Make (Development):**
```tsx
// ✅ This works in Figma Make
import genuverityLogo from 'figma:asset/7a1c97674e5167dc2d9474d7d02423e43c5e10fe.png';
<img src={genuverityLogo} alt="GenuVerity" />
```

**For Vercel Deployment:**
```tsx
// ✅ Replace with this before deploying
import { Logo } from '../components/Logo';
<Logo width={180} height={144} className="text-foreground" />
```

**Files to update before deployment:**
- `/components/Navigation.tsx` - Lines 5 and 36-40
- `/pages/Home.tsx` - Lines 11 and 124-128

### ❌ Routing Issues (404 on Refresh)

**Problem:** Direct URL access returns 404 on client-side routes

**Solution:** Add `vercel.json` configuration:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### ❌ Build Fails

**Problem:** Dependencies missing or version conflicts

**Solution:** 
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### ❌ Tailwind Styles Not Working

**Problem:** PostCSS or Tailwind not configured

**Solution:** Ensure you have these files:
- `tailwind.config.js`
- `postcss.config.js`
- Tailwind imports in `styles/globals.css`

---

## Build Optimization

### 1. **Code Splitting**

The app already uses React Router lazy loading, but you can optimize further:

```tsx
// Use React.lazy for heavy components
const Results = lazy(() => import('./pages/Results'));
```

### 2. **Asset Optimization**

- ✅ Use SVG logos (inline, no HTTP requests)
- ✅ Lazy load heavy components
- ⚠️ Consider image optimization for future photo uploads

### 3. **Bundle Size**

Check bundle size before deployment:
```bash
npm run build
# Check dist/ folder size
```

Typical GenuVerity bundle sizes:
- JS: ~500-800 KB (gzipped ~150-250 KB)
- CSS: ~50-100 KB (gzipped ~10-20 KB)

---

## Performance Checklist

Before deploying, verify:

- [ ] All images use SVG or optimized formats
- [ ] No `figma:asset` imports remain
- [ ] Build completes without warnings
- [ ] App works in production mode (`npm run build && npm run preview`)
- [ ] Lighthouse score > 90 (Performance, Accessibility, Best Practices)
- [ ] Mobile responsive on all pages
- [ ] Theme toggle works correctly
- [ ] All navigation links function
- [ ] Contact form validation works

---

## Continuous Deployment

### Auto-Deploy on Git Push

Vercel automatically deploys when you push to your main branch:

```bash
git add .
git commit -m "Update feature"
git push origin main
# Vercel will auto-deploy in ~2 minutes
```

### Preview Deployments

- Every PR gets a unique preview URL
- Test changes before merging to main
- Perfect for client reviews

---

## Custom Domain Setup

### Add Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your domain (e.g., `genuverity.com`)
3. Configure DNS at your registrar:
   - **A Record:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com`
4. Wait for DNS propagation (5-60 minutes)
5. Vercel auto-provisions SSL certificate

### Recommended Domain Structure

- **Production:** `genuverity.com`
- **Staging:** `staging.genuverity.com`
- **Beta:** `beta.genuverity.com`

---

## Environment-Specific Configuration

### Development
```bash
npm run dev
# Runs on http://localhost:5173
```

### Production Build (Local Test)
```bash
npm run build
npm run preview
# Test production build locally
```

### Production (Vercel)
- Automatic builds from GitHub
- Zero-config deployment
- Global CDN distribution

---

## Monitoring & Analytics

### Recommended Tools

1. **Vercel Analytics** (built-in)
   - Page load times
   - Core Web Vitals
   - Real user metrics

2. **Sentry** (error tracking)
   ```bash
   npm install @sentry/react
   ```

3. **Google Analytics** (user behavior)
   - Add GA4 script to `index.html`

---

## Future API Integration

When you build the real backend API:

### Environment Variables

Create `.env` file:
```bash
VITE_API_URL=https://api.genuverity.com
VITE_API_KEY=your_api_key_here
```

Add to Vercel:
- Project Settings → Environment Variables
- Add `VITE_API_URL` and `VITE_API_KEY`
- Redeploy for changes to take effect

### API Calls

```tsx
const API_URL = import.meta.env.VITE_API_URL;

const response = await fetch(`${API_URL}/fact-check-ultimate`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ claim: userQuery }),
});
```

---

## Rollback Strategy

If something breaks in production:

### Quick Rollback on Vercel

1. Go to Deployments tab
2. Find last working deployment
3. Click "..." → "Promote to Production"
4. Previous version restored in seconds

### Git-Based Rollback

```bash
git revert HEAD
git push origin main
# Vercel auto-deploys previous version
```

---

## Security Checklist

Before going live:

- [ ] No API keys in client-side code
- [ ] CORS configured correctly (when API added)
- [ ] Rate limiting on form submissions
- [ ] XSS protection (React handles this by default)
- [ ] HTTPS enforced (Vercel does this automatically)
- [ ] Content Security Policy headers configured

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## Post-Deployment Testing

After deploying, test these critical paths:

1. **Home Page**
   - [ ] Logo displays correctly
   - [ ] Search works
   - [ ] Theme toggle functions
   - [ ] Mobile menu works

2. **Navigation**
   - [ ] All links work
   - [ ] Routing works on refresh
   - [ ] Back button functions

3. **Results Page**
   - [ ] Mock data displays
   - [ ] All sections render
   - [ ] Constitutional AI scores show

4. **Forms**
   - [ ] Contact form validates
   - [ ] Early Access form submits
   - [ ] Error messages display

5. **Responsive Design**
   - [ ] Test on mobile (375px)
   - [ ] Test on tablet (768px)
   - [ ] Test on desktop (1440px)

---

## Support Resources

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Vite Documentation:** [vitejs.dev](https://vitejs.dev)
- **React Router:** [reactrouter.com](https://reactrouter.com)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)

---

## Deployment Checklist

Final checklist before making site public:

- [ ] All Figma imports replaced with SVG components
- [ ] Build succeeds locally (`npm run build`)
- [ ] Preview build works (`npm run preview`)
- [ ] All pages tested on mobile
- [ ] Theme toggle works
- [ ] Contact form functional
- [ ] Privacy policy accessible
- [ ] API docs accurate
- [ ] Footer links work
- [ ] Navigation consistent across pages
- [ ] Logo displays on all pages
- [ ] No console errors in production
- [ ] Lighthouse score > 90
- [ ] Custom domain configured (if applicable)
- [ ] Analytics tracking setup (if applicable)

---

## Next Steps

After successful deployment:

1. **Set up monitoring** - Add Vercel Analytics or Google Analytics
2. **Configure custom domain** - Point your domain to Vercel
3. **Set up staging environment** - Create a separate branch for testing
4. **Plan API integration** - Begin backend development
5. **Collect user feedback** - Add feedback mechanism
6. **Monitor performance** - Check Core Web Vitals weekly

---

## Getting Help

If you encounter deployment issues:

1. Check Vercel build logs (Deployments tab)
2. Review GitHub Actions (if using)
3. Test locally with production build
4. Check browser console for errors
5. Verify all imports are correct (no `figma:asset` paths)

**Common Commands:**
```bash
# Test production build locally
npm run build && npm run preview

# Check for TypeScript errors
npm run type-check

# Lint code
npm run lint

# Clean install
rm -rf node_modules package-lock.json && npm install
```

---

*Last Updated: October 26, 2024*
