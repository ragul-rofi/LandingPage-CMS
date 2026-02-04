# Quick Reference Card

## 🔧 Essential Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Important Files

| File | Purpose |
|------|---------|
| `components/Navbar.tsx` | **Update login URL here** |
| `App.tsx` | Main app logic, contact form |
| `constants.tsx` | Features & story content |
| `.gitignore` | Files to exclude from Git |
| `vite.config.ts` | Build configuration |

## 🔗 URLs to Update

**Before deployment, update these:**

1. **Login redirect** in `components/Navbar.tsx`:
   ```typescript
   href="https://your-app-url.com/login"
   ```

2. **Contact form** in `App.tsx` (optional):
   ```typescript
   fetch('https://formspree.io/f/YOUR_FORM_ID', ...)
   ```

## 🚀 Deploy Commands

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
npm run deploy
```

## 📦 What's Included

- ✅ React 18 + TypeScript
- ✅ Vite for fast builds
- ✅ Responsive design
- ✅ Contact form integration
- ✅ Smooth animations
- ✅ SEO-friendly structure

## 🎯 Deployment Checklist

- [ ] Update login URL
- [ ] Test locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] Push to GitHub
- [ ] Deploy to hosting
- [ ] Test live site
- [ ] Verify login redirect
- [ ] Test contact form

## 🆘 Quick Fixes

**Port in use:**
```bash
# Kill process on port 5174
npx kill-port 5174
```

**Build errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Git issues:**
```bash
git status
git remote -v
```

## 📚 Documentation

- **[START_HERE.md](./START_HERE.md)** - Complete setup guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Platform-specific guides
- **[README.md](./README.md)** - Project overview

## 🌐 Recommended Hosting

**Vercel** - Best for this project
- Free tier
- Auto-deploy from GitHub
- Zero configuration
- Fast global CDN

## 📞 Support

Check the documentation files or open an issue on GitHub.

---

**Ready to deploy?** Start with [START_HERE.md](./START_HERE.md)
