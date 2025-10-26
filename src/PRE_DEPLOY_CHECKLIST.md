# Pre-Deployment Checklist for Vercel

Before deploying to Vercel, you need to replace Figma asset imports with deployment-safe alternatives.

## Required Changes

### Step 1: Update Navigation.tsx

**File:** `/components/Navigation.tsx`

**Line 5 - Change the import:**
```tsx
// ❌ Remove this
import genuverityLogo from 'figma:asset/7a1c97674e5167dc2d9474d7d02423e43c5e10fe.png';

// ✅ Replace with this
import { Logo } from './Logo';
```

**Lines 24-41 - Change the logo element:**
```tsx
// ❌ Remove this
<Link 
  to="/" 
  onClick={() => setMobileMenuOpen(false)} 
  className="flex-shrink-0"
  style={{ 
    height: '144px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '-40px',
    marginBottom: '-40px'
  }}
>
  <img 
    src={genuverityLogo} 
    alt="GenuVerity" 
    className="w-auto"
    style={{ 
      height: '144px',
      maxWidth: 'none'
    }}
  />
</Link>

// ✅ Replace with this
<Link 
  to="/" 
  onClick={() => setMobileMenuOpen(false)} 
  className="flex-shrink-0"
  style={{ 
    height: '144px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '-40px',
    marginBottom: '-40px'
  }}
>
  <Logo 
    width={180}
    height={144}
    className="text-foreground"
  />
</Link>
```

---

### Step 2: Update Home.tsx

**File:** `/pages/Home.tsx`

**Line 11 - Change the import:**
```tsx
// ❌ Remove this
import genuverityLogo from 'figma:asset/7a1c97674e5167dc2d9474d7d02423e43c5e10fe.png';

// ✅ Add this to the existing imports (around line 8)
import { Logo } from '../components/Logo';
```

**Lines 122-129 - Change the logo element:**
```tsx
// ❌ Remove this
<div className="mb-0 md:mb-6">
  <img 
    src={genuverityLogo} 
    alt="GenuVerity - Constitutional AI Fact Checking" 
    className="mx-auto max-w-[240px] md:max-w-md w-full h-auto"
  />
</div>

// ✅ Replace with this
<div className="mb-0 md:mb-6 flex justify-center">
  <Logo 
    width={240}
    height={192}
    className="text-foreground w-full max-w-[240px] md:max-w-md h-auto"
  />
</div>
```

---

## Quick Replace Commands

If you're comfortable with command-line tools, you can use these:

### For Navigation.tsx
1. Open `/components/Navigation.tsx`
2. Find line 5 and replace the import
3. Find lines 36-40 and replace the img tag with Logo component

### For Home.tsx
1. Open `/pages/Home.tsx`
2. Find line 11 and replace the import
3. Find lines 124-128 and replace the img tag with Logo component

---

## Verification

After making these changes:

1. **Test locally:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check the preview:**
   - Logo should appear (though it won't look as good as the Figma asset)
   - No console errors
   - Navigation works

3. **Deploy to Vercel:**
   ```bash
   git add .
   git commit -m "Replace Figma assets for deployment"
   git push origin main
   ```

4. **After deployment:**
   - Test the live site
   - Logo should display correctly
   - All functionality should work

---

## Why This Is Necessary

- ✅ **Figma Make:** `figma:asset` imports work perfectly
- ❌ **Vercel/Netlify/Production:** `figma:asset` paths don't exist, causing broken images

**The `<Logo />` component:**
- Uses inline SVG (no external files needed)
- Works in all deployment environments
- Respects dark/light theme
- Is a simple text-based placeholder (won't look as good as your designed logo)

---

## Future Improvement

For a production-ready logo that looks great:

1. Export your Figma logo as SVG
2. Replace the content of `/components/Logo.tsx` with the actual SVG code
3. Or host the logo image on a CDN and use that URL

---

## After Deployment

Once deployed, you can revert these changes for Figma Make development:
1. Switch back to `figma:asset` imports for local work
2. Keep the deployment version in a separate branch
3. Or use environment variables to conditionally load images

---

**Questions?** See `/DEPLOYMENT.md` for the complete deployment guide.
