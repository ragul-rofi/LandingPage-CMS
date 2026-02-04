# Quick Setup Guide

## 1. Update Login URL

Replace the placeholder URL in `components/Navbar.tsx`:

```typescript
// Change this:
<a href="https://your-app-url.com/login" ...>

// To your actual hosted URL:
<a href="https://your-actual-site.com/login" ...>
```

**Find and replace**: Search for `your-app-url.com` and replace with your actual domain.

## 2. Install Dependencies

```bash
npm install
```

## 3. Test Locally

```bash
npm run dev
```

Visit `http://localhost:5174` and test the login button.

## 4. Build for Production

```bash
npm run build
```

## 5. Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick deploy to Vercel:**
```bash
npm i -g vercel
vercel
```

## 6. After Deployment

- Test the live site
- Verify login redirect works
- Test contact form
- Check mobile responsiveness

---

## Optional: Use Environment Variables

1. Create `.env` file:
   ```
   VITE_LOGIN_URL=https://your-app-url.com/login
   ```

2. Update `Navbar.tsx`:
   ```typescript
   const loginUrl = import.meta.env.VITE_LOGIN_URL || 'https://your-app-url.com/login';
   <a href={loginUrl} ...>
   ```

3. For production, set environment variables in your hosting platform.

---

## Need Help?

Check [DEPLOYMENT.md](./DEPLOYMENT.md) for platform-specific guides.
