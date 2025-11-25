# KingBayo Money Empire - Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)
- Your Gemini API key (get from https://ai.google.dev/)

---

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push Code to GitHub
1. Create a new repository on GitHub
2. Initialize git in your project (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - KingBayo Money Empire"
   ```
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import to Vercel
1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select your GitHub repository
4. Vercel will auto-detect Vite configuration:
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Configure Environment Variables
Before deploying, add your environment variables:

1. In the Vercel import screen, expand **"Environment Variables"**
2. Add the following variable:
   - **Name**: `VITE_GEMINI_API_KEY`
   - **Value**: Your Gemini API key
   - **Environment**: Select **Production**, **Preview**, and **Development**
   - Check **"Sensitive"** to encrypt the value

3. (Optional) Add additional variables from `.env.example`

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait 1-2 minutes for build completion
3. Your app will be live at `https://your-project.vercel.app`

---

## Option 2: Deploy via Vercel CLI

### Installation
```bash
npm install -g vercel
```

### Deploy Steps
```bash
# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

During deployment, you'll be prompted to:
1. Link to existing project or create new one
2. Confirm project settings
3. Add environment variables

Add environment variables via CLI:
```bash
vercel env add VITE_GEMINI_API_KEY production
vercel env add VITE_GEMINI_API_KEY preview
```

---

## 🔐 Environment Variables Setup

### Required Variables
| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key | https://ai.google.dev/ |

### Optional Variables
| Variable | Description |
|----------|-------------|
| `VITE_GA_TRACKING_ID` | Google Analytics tracking ID |
| `VITE_SENTRY_DSN` | Sentry error tracking DSN |

### Adding Environment Variables After Deployment
1. Go to your project dashboard on Vercel
2. Navigate to **Settings → Environment Variables**
3. Add or update variables
4. **Important**: Redeploy after adding/changing variables
   - Variables only apply to NEW deployments
   - Go to **Deployments** tab
   - Click on latest deployment
   - Click **"Redeploy"**

---

## ✅ Post-Deployment Checklist

### 1. Test PWA Features
- Visit your deployed URL
- Check for install prompt (desktop/mobile)
- Test offline functionality:
  1. Open Chrome DevTools
  2. Go to Network tab
  3. Set to "Offline"
  4. Refresh page - app should still work

### 2. Verify Performance
- Run Lighthouse audit in Chrome DevTools
- Expected scores:
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+
  - PWA: 100

### 3. Test SPA Routing
- Navigate to any route (e.g., `/about`)
- Refresh the page
- Should load correctly (not 404)
- This is handled by `vercel.json` rewrites

### 4. Check Environment Variables
- Verify API integrations work
- Check browser console for missing environment variables
- Ensure no secrets are exposed in client bundle

---

## 🔄 Continuous Deployment

### Automatic Deployments
Once connected to GitHub, Vercel automatically:
- **Production**: Deploys from `main` branch
- **Preview**: Creates deployment for every PR and branch

### Manual Deployments
```bash
# Deploy specific branch to preview
vercel --branch feature-branch

# Deploy to production
vercel --prod
```

---

## 🛠️ Troubleshooting

### Build Fails
**Issue**: Build fails with TypeScript errors
**Solution**: 
```bash
# Test build locally first
npm run build

# Check for errors
npm run type-check
```

### Environment Variables Not Working
**Issue**: API calls fail with "undefined" API key
**Solution**:
1. Verify variable starts with `VITE_` prefix
2. Check variable is added to correct environment
3. Redeploy after adding variables
4. Clear browser cache

### 404 on Page Refresh
**Issue**: SPA routes return 404 when refreshed
**Solution**: Ensure `vercel.json` exists with proper rewrites configuration (already included in this project)

### PWA Not Installing
**Issue**: No install prompt appears
**Solution**:
1. PWA requires HTTPS (Vercel provides automatically)
2. Check service worker registration in DevTools
3. Verify manifest.json is accessible at `/manifest.webmanifest`
4. Check icons are properly loaded

### Slow Build Times
**Solution**: 
- Check bundle size with `npm run build`
- Review dependencies
- Consider code splitting
- Enable build caching in Vercel settings

---

## 📊 Monitoring & Analytics

### Built-in Vercel Analytics
- Enable in project settings
- View real-time traffic
- Monitor Web Vitals
- Track performance metrics

### Custom Analytics
Add Google Analytics:
1. Get tracking ID from Google Analytics
2. Add `VITE_GA_TRACKING_ID` environment variable
3. Implement tracking code (if not already added)

---

## 🔒 Security Best Practices

1. **Never commit `.env` files**
   - Use `.env.example` as template
   - Keep actual `.env` in `.gitignore`

2. **Mark secrets as "Sensitive"**
   - In Vercel dashboard
   - Prevents viewing after creation
   - Encrypted at rest

3. **Use different keys for Production vs Preview**
   - Test with development API keys in Preview
   - Use production keys only in Production

4. **Rotate API keys regularly**
   - Update in Vercel dashboard
   - Redeploy to apply changes

---

## 📱 Custom Domain Setup

### Add Custom Domain
1. Go to project **Settings → Domains**
2. Add your domain (e.g., `kingbayo.com`)
3. Configure DNS records as instructed
4. Wait for SSL certificate (automatic)
5. Domain ready in ~5 minutes

### DNS Configuration
For domain providers like Namecheap, GoDaddy:
- Add `A` record pointing to Vercel IP
- Or add `CNAME` record to `cname.vercel-dns.com`

---

## 🎯 Performance Optimization

### Already Implemented
✅ Code splitting (vendor/icons chunks)
✅ Minification with Terser
✅ PWA caching strategies
✅ Optimized asset loading
✅ Production Tailwind CSS

### Recommended Additions
- Enable Vercel Edge Functions for API routes
- Add image optimization
- Implement lazy loading for routes
- Consider Edge Middleware for geo-routing

---

## 📞 Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev/
- **PWA Guide**: https://vite-pwa-org.netlify.app/
- **Project Issues**: Create issue on GitHub

---

## 🎉 Success Metrics

After successful deployment, you should see:
- ✅ Live URL accessible globally
- ✅ HTTPS enabled automatically
- ✅ PWA install prompt on mobile
- ✅ Offline functionality working
- ✅ Fast load times (<2s)
- ✅ Automatic deployments from GitHub
- ✅ Preview deployments for PRs

---

**Deployment Date**: November 25, 2025
**Project**: KingBayo Money Empire
**Framework**: React + TypeScript + Vite
**Hosting**: Vercel

---

For any deployment issues, check Vercel build logs in the dashboard under **Deployments** → Select deployment → **View Build Logs**.
