# Formspree Setup Instructions for GenuVerity Frontend

## 1. Formspree Account Setup
1. Go to https://formspree.io
2. Sign up with chris@genuverity.com
3. Create a new form for "GenuVerity Early Access"

## 2. Form Configuration
- **Form ID**: `xpwzgdgp` (already configured in the code)
- **Redirect URL**: Set to your Vercel domain after deployment
- **Email notifications**: Enable to chris@genuverity.com

## 3. Auto-Response Setup
In your Formspree dashboard:

1. Go to Form Settings → Auto-Reply
2. Enable auto-reply emails
3. **Subject**: "Welcome to GenuVerity Early Access!"
4. **Message**:
```
Hi {{name}},

Thank you for your interest in GenuVerity - the next generation of AI-powered fact-checking!

We've received your early access request and are excited to have you join our beta community. Here's what happens next:

✅ Your request is being reviewed by our team
📧 You'll receive priority access notifications
🚀 Beta invitations will be sent out in the coming weeks
💬 You'll have direct input on feature development

If you have any questions or want to learn more about GenuVerity, feel free to reply to this email or reach out to us at chris@genuverity.com.

Best regards,
The GenuVerity Team

---
P.S. Follow our progress and get updates at https://genuverity.com
```

## 4. Spam Protection
- Enable reCAPTCHA if needed
- Set up rate limiting to prevent abuse

## 5. Form Fields
The form collects:
- **name**: Full name (required)
- **email**: Email address (required)  
- **organization**: Company/institution (optional)
- **useCase**: How they plan to use GenuVerity (optional)

## 6. Analytics
Enable form analytics to track:
- Submission rates
- Conversion metrics
- User engagement

## Note
The form is completely separate from the backend API - no connection to the GenuVerity fact-checking backend is needed.