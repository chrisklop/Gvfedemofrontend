# Quick Formspree Setup for GenuVerity

## Current Issue
Forms are failing because Formspree form IDs need to be created and verified.

## Step-by-Step Fix

### 1. Login to Formspree
1. Go to https://formspree.io/login
2. Sign in with **chris@genuverity.com**

### 2. Create Two Forms

#### Form 1: Early Access
1. Click "New Form"
2. Name: "GenuVerity Early Access"
3. Email: chris@genuverity.com
4. **Copy the Form ID** (looks like `xpwzgdgp`)

#### Form 2: Contact Us  
1. Click "New Form"
2. Name: "GenuVerity Contact"
3. Email: chris@genuverity.com
4. **Copy the Form ID** (looks like `xaygrkql`)

### 3. Update Code (if needed)
Current form IDs in code:
- Early Access: `xpwzgdgp` 
- Contact: `xaygrkql`

If your actual form IDs are different, update these files:
- `src/pages/EarlyAccess.tsx` line 24
- `src/pages/Contact.tsx` line 26

### 4. Test Forms
1. Submit a test on each form
2. Check chris@genuverity.com inbox
3. Verify submissions appear in Formspree dashboard

### 5. Optional: Configure Auto-Reply
In each form's settings:
1. Go to "Email" tab
2. Enable "Auto-Reply"
3. Set custom welcome message

## Expected Behavior
- ✅ Form submissions go to chris@genuverity.com
- ✅ Success toast appears
- ✅ Form resets after submission
- ✅ Submissions tracked in Formspree dashboard

## Troubleshooting
- **403/404 errors**: Form ID doesn't exist, create it in Formspree
- **CORS errors**: Formspree should handle this automatically
- **No emails**: Check spam folder, verify email in Formspree settings