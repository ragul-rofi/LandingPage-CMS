# GitHub Setup & Push Guide

## Step 1: Update Login URL

Before pushing to GitHub, update the login redirect URL in `components/Navbar.tsx`:

```typescript
// Replace 'your-app-url.com' with your actual hosted URL
<a href="https://your-actual-site.com/login" ...>
```

## Step 2: Verify .gitignore

The `.gitignore` file is already set up to exclude:
- `node_modules/`
- `dist/`
- `.env` files
- IDE files
- OS files

## Step 3: Initialize Git (if not already done)

```bash
git init
```

## Step 4: Add Files to Git

```bash
git add .
```

## Step 5: Create Initial Commit

```bash
git commit -m "Initial commit: NotinQ Landing Page"
```

## Step 6: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the "+" icon → "New repository"
3. Repository name: `notinq-landing-page` (or your choice)
4. Description: "Modern landing page for NotinQ canteen management system"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README (we already have one)
7. Click "Create repository"

## Step 7: Connect to GitHub

Copy the commands from GitHub (they'll look like this):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Or if using SSH:**

```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 8: Verify on GitHub

Visit your repository URL and verify all files are there.

---

## Future Updates

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

---

## Common Issues

### Authentication Failed
- Use a Personal Access Token instead of password
- Or set up SSH keys

### Large Files
- Ensure `node_modules/` is in `.gitignore`
- Check file sizes: `git ls-files -z | xargs -0 du -h | sort -h`

### Wrong Remote URL
```bash
git remote -v  # Check current remote
git remote set-url origin NEW_URL  # Update if needed
```

---

## Next Steps

After pushing to GitHub:
1. Deploy to Vercel/Netlify (see [DEPLOYMENT.md](./DEPLOYMENT.md))
2. Add deployment badge to README
3. Set up automatic deployments from GitHub

---

## Quick Commands Reference

```bash
# Check status
git status

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Pull latest changes
git pull

# View remotes
git remote -v
```
