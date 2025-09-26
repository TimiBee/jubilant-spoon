# Wisdam Pharma

A modern, responsive pharmacy website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🏥 Professional pharmacy website design
- 💊 Product showcase and services
- 👥 Customer testimonials
- 📱 Fully responsive design
- 🌙 Dark/Light theme support
- ⚡ Fast performance with Next.js
- 🎨 Modern UI with shadcn/ui components

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Font:** Inter (Google Fonts)
- **Analytics:** Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TimiBee/jubilant-spoon.git
cd jubilant-spoon
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── hero.tsx       # Hero section
│   ├── about.tsx      # About section
│   ├── services.tsx   # Services section
│   └── ...
├── lib/               # Utility functions
├── hooks/             # Custom React hooks
└── public/            # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS
- DigitalOcean

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).