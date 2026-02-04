# 🚀 START HERE - Complete Setup Guide

Welcome! This guide will help you get your NotinQ Landing Page from local development to live on the internet.

---

## 📋 Quick Checklist

- [ ] Update login redirect URL
- [ ] Test locally
- [ ] Push to GitHub
- [ ] Deploy to hosting platform
- [ ] Test live site

---

## Step 1: Update Login URL (IMPORTANT!)

Open `components/Navbar.tsx` and replace the placeholder URL:

**Find this:**
```typescript
<a href="https://your-app-url.com/login" ...>
```

**Replace with your actual hosted URL:**
```typescript
<a href="https://your-actual-domain.com/login" ...>
```

**Quick find & replace:**
- Press `Ctrl+Shift+F` (or `Cmd+Shift+F` on Mac)
- Search: `your-app-url.com`
- Replace: `your-actual-domain.com`
- Replace all (2 occurrences)

---

## Step 2: Test Locally

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5174` and:
- Click the "Login" button
- Verify it redirects to your hosted site
- Test the contact form
- Check mobile view (resize browser)

---

## Step 3: Push to GitHub

### A. Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `notinq-landing-page`
3. Description: "Landing page for NotinQ canteen management"
4. Choose Public or Private
5. **Don't** initialize with README
6. Click "Create repository"

### B. Push Your Code

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: NotinQ Landing Page"

# Connect to GitHub (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/notinq-landing-page.git

# Push
git branch -M main
git push -u origin main
```

---

## Step 4: Deploy (Choose One)

### 🌟 Option A: Vercel (Recommended)

**Why?** Zero config, fast, free, perfect for React.

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy" (no configuration needed!)
6. Done! Your site is live in ~30 seconds

**Custom domain:** Settings → Domains → Add

---

### Option B: Netlify

**Why?** Great for static sites, drag-and-drop option.

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

---

### Option C: GitHub Pages

**Why?** Free, simple, good for public repos.

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/notinq-landing-page",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/notinq-landing-page/'
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable in GitHub: Settings → Pages → Source: gh-pages branch

---

## Step 5: Post-Deployment

### Test Your Live Site

- [ ] Visit your deployed URL
- [ ] Click "Login" button → Should redirect to your app
- [ ] Submit contact form → Check if you receive email
- [ ] Test on mobile device
- [ ] Test on different browsers
- [ ] Check browser console for errors

### Update Your App

If your main app needs to link back to the landing page:
- Add the landing page URL to your app's navigation
- Update any "Home" or "Back" buttons

---

## 🎉 You're Done!

Your landing page is now live! Share the URL with your users.

---

## 📚 Additional Resources

- **[README.md](./README.md)** - Project overview
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Detailed deployment guides
- **[GITHUB_SETUP.md](./GITHUB_SETUP.md)** - Git commands reference
- **[SETUP.md](./SETUP.md)** - Configuration options

---

## 🆘 Need Help?

### Common Issues

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Login redirect not working:**
- Check the URL in `Navbar.tsx`
- Ensure it starts with `https://`
- Test in incognito mode

**Images not loading:**
- Check images are in `images/` folder
- Verify they're committed to Git
- Check browser console for 404 errors

**Contact form not working:**
- Verify Formspree endpoint in `App.tsx`
- Check browser console for CORS errors
- Test in production (not localhost)

---

## 🔄 Making Updates

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Your hosting platform will automatically redeploy (if connected to GitHub).

---

## 📊 Recommended Platform Comparison

| Feature | Vercel | Netlify | GitHub Pages |
|---------|--------|---------|--------------|
| Setup Time | ⚡ 1 min | ⚡ 2 min | 🐢 5 min |
| Auto Deploy | ✅ Yes | ✅ Yes | ⚠️ Manual |
| Custom Domain | ✅ Free | ✅ Free | ✅ Free |
| Build Speed | ⚡ Fast | ⚡ Fast | 🐢 Slow |
| Best For | React apps | Static sites | Open source |

**Our pick: Vercel** - Fastest and easiest for this project.

---

## 🎯 Next Steps

1. Add analytics (Google Analytics, Plausible)
2. Set up custom domain
3. Add SEO meta tags
4. Create social media preview images
5. Set up monitoring (Sentry, LogRocket)

---

Good luck! 🚀
