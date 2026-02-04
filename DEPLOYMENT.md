# Deployment Guide

This guide covers deploying the NotinQ Landing Page to various free hosting platforms.

## Before Deployment

1. **Update the Login URL** in `components/Navbar.tsx`:
   ```typescript
   <a href="https://your-app-url.com/login" ...>
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

---

## Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Zero configuration for Vite projects
- Automatic HTTPS
- Global CDN
- Instant deployments
- Free tier is generous

**Steps:**

1. Install Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts.

3. **Or deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

**Custom Domain**: Add your domain in Vercel dashboard → Settings → Domains

---

## Option 2: Netlify

**Why Netlify?**
- Drag-and-drop deployment
- Form handling built-in
- Free SSL
- Continuous deployment from Git

**Steps:**

### Method A: Drag & Drop
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist/` folder to Netlify

### Method B: Git Integration
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy"

**Custom Domain**: Site settings → Domain management

---

## Option 3: GitHub Pages

**Why GitHub Pages?**
- Free hosting for public repos
- Easy to set up
- Good for static sites

**Steps:**

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/repo-name/'  // Add this line
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/ (root)`

**Note**: GitHub Pages doesn't support custom redirects well, so consider Vercel/Netlify for better routing.

---

## Option 4: Render

**Why Render?**
- Free tier available
- Auto-deploy from Git
- Easy environment variables

**Steps:**

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New" → "Static Site"
4. Connect your repository
5. Settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
6. Click "Create Static Site"

---

## Option 5: Cloudflare Pages

**Why Cloudflare Pages?**
- Unlimited bandwidth
- Fast global CDN
- Free SSL

**Steps:**

1. Push code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click "Create a project"
4. Connect to GitHub
5. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click "Save and Deploy"

---

## Comparison Table

| Platform | Free Tier | Build Time | CDN | Custom Domain | Best For |
|----------|-----------|------------|-----|---------------|----------|
| **Vercel** | ✅ Generous | ⚡ Fast | ✅ Global | ✅ Free | React/Vite apps |
| **Netlify** | ✅ Good | ⚡ Fast | ✅ Global | ✅ Free | Static sites |
| **GitHub Pages** | ✅ Unlimited | 🐢 Slow | ❌ Limited | ✅ Free | Open source |
| **Render** | ✅ Limited | 🐢 Slower | ✅ Yes | ✅ Free | Full-stack apps |
| **Cloudflare** | ✅ Unlimited | ⚡ Fast | ✅ Best | ✅ Free | High traffic |

---

## Post-Deployment Checklist

- [ ] Test the deployed site
- [ ] Verify login button redirects correctly
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Check console for errors
- [ ] Test on different browsers
- [ ] Set up custom domain (optional)
- [ ] Add site to Google Search Console (optional)

---

## Troubleshooting

### Build Fails
- Check Node.js version (use v16+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check build logs for specific errors

### Images Not Loading
- Ensure images are in the `images/` folder
- Check image paths are relative
- Verify images are committed to Git

### Routing Issues
- For SPAs, configure redirects:
  - **Netlify**: Create `public/_redirects` with `/* /index.html 200`
  - **Vercel**: Create `vercel.json` with rewrite rules

### Contact Form Not Working
- Verify Formspree endpoint is correct
- Check CORS settings
- Test form in production (not localhost)

---

## Recommended: Vercel

For this project, **Vercel** is the best choice because:
- Perfect for React + Vite
- Zero configuration needed
- Fast deployments
- Excellent developer experience
- Free tier is more than enough

**Quick Deploy to Vercel:**
```bash
npm i -g vercel
vercel
```

Done! 🚀
