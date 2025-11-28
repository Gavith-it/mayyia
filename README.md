# Sri Mayyia Caterers - Premium Website

A modern, premium website for Sri Mayyia Caterers built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern, premium design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 🎪 Interactive components (sliders, forms, galleries)
- 🎨 Custom Tailwind CSS styling

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Sliders**: Swiper.js
- **Fonts**: Google Fonts (Tangerine, Oswald, Josefin Sans)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── menu/               # Menu page
│   ├── booking/             # Booking page
│   ├── contact/             # Contact page
│   ├── chefs/               # Chefs page
│   └── gallery/             # Gallery page
├── components/
│   ├── layout/              # Layout components (Header, Footer, Preloader)
│   ├── home/                # Homepage sections
│   └── pages/               # Page-specific components
├── public/                  # Static assets
└── styles/                  # Global styles
```

## Pages

- **Home**: Hero section, About, Services, Menu, Video, Booking, Gallery, Testimonials, Blog
- **About**: Company story, statistics, team
- **Menu**: Full menu with categories
- **Booking**: Event booking form
- **Contact**: Contact form and information
- **Chefs**: Team showcase
- **Gallery**: Event gallery with filters

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { ... },
  gold: { ... },
  dark: { ... }
}
```

### Content

Update content in component files:
- Menu items: `components/pages/MenuContent.tsx`
- Services: `components/home/ServicesSection.tsx`
- Team members: `components/pages/ChefsGrid.tsx`

### Images

Place images in `public/images/` directory and update image paths in components.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to production:
```bash
vercel --prod
```

#### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

#### Environment Variables (if needed)

If you have any environment variables, add them in:
- Vercel Dashboard → Project → Settings → Environment Variables

#### Build Settings

Vercel will automatically detect:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

The project is configured with `vercel.json` for optimal deployment settings.

### Other Deployment Options

- **Netlify**: Connect your Git repository and deploy
- **Any Node.js hosting**: Run `npm run build` and `npm start`

## License

This project is created for Sri Mayyia Caterers.

## Support

For support, contact: info@srimayyia.com

