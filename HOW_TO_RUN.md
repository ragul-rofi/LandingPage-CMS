# How to Run the Landing Page

## Quick Start

### 1. Install Dependencies (First Time Only)
Open a terminal in the `LandingPage-CMS` folder and run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

The landing page will start on **http://localhost:5174**

## Full Application Setup

To run the complete NotinQ application, you need to start all three services:

### Terminal 1 - Backend API (Port 3000)
```bash
cd CMS
npm run dev
```

### Terminal 2 - CMS Frontend (Port 3001)
```bash
cd CMS/client
npm run dev
```

### Terminal 3 - Landing Page (Port 5174)
```bash
cd LandingPage-CMS
npm run dev
```

## Access URLs

- **Landing Page**: http://localhost:5174
- **CMS Login**: http://localhost:3001/login
- **Backend API**: http://localhost:3000

## Navigation Flow

1. User visits Landing Page (5174)
2. Clicks "Login" button → Redirects to CMS Login (3001)
3. After login → User Dashboard (3001)
4. "Back to Home" on login page → Returns to Landing Page (5174)

## Troubleshooting

### Port Already in Use
If you see an error like "Port 5174 is already in use":
1. Close any other terminals running the landing page
2. Or change the port in `vite.config.ts`

### Dependencies Not Installed
If you see module errors:
```bash
npm install
```

### Build Errors
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Production Build

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```
