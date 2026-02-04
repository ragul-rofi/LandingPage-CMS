# NotinQ Landing Page

A modern, responsive landing page for NotinQ - the digital canteen management system that eliminates wait times and streamlines food ordering.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with React + TypeScript + Vite
- 🎯 Interactive queue visualizer
- 📧 Contact form integration with Formspree
- 🚀 Fast and optimized

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (via CDN)
- **Font Awesome** - Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd LandingPage-CMS
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5174`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## Deployment

This project can be deployed to:

- **Vercel** (Recommended) - Zero config deployment
- **Netlify** - Simple drag-and-drop or Git integration
- **GitHub Pages** - Free hosting for static sites
- **Render** - Free tier available

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Configuration

### Update Login Redirect URL

Edit `components/Navbar.tsx` and update the login URL:

```typescript
<a href="YOUR_HOSTED_URL/login" ...>
```

### Update Contact Form

The contact form uses Formspree. To use your own form:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form endpoint in `App.tsx`:

```typescript
const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
```

## Project Structure

```
LandingPage-CMS/
├── components/
│   ├── Navbar.tsx          # Navigation bar with login button
│   └── QueueVisualizer.tsx # Animated queue visualization
├── images/                 # Story section images
├── App.tsx                 # Main application component
├── constants.tsx           # Features and story content
├── index.tsx              # Application entry point
├── index.html             # HTML template
└── vite.config.ts         # Vite configuration
```

## License

MIT

## Contact

For questions or support, visit our [contact page](#contact) or email us.
