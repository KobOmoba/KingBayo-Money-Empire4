# 👑 KingBayo Money Empire

AI-powered sports analytics platform for high-probability accumulator slips.

## ⚡ Features

- **AI-Powered Analysis**: Generates optimized sports betting accumulator slips
- **Multi-Sport Coverage**: Football, Basketball, Tennis, Cricket, and more
- **Risk Protocols**: Choose from Safe, Balanced, or Risky strategies
- **Progressive Web App**: Install on mobile and desktop, works offline
- **Real-Time Scanning**: Live match analysis and bet builder tools
- **Export Capabilities**: Download your ticket history as CSV

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 4
- **Styling**: Tailwind CSS
- **PWA**: vite-plugin-pwa
- **Icons**: Lucide React
- **Deployment**: Vercel (optimized)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and configure:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Get your Gemini API key from: https://ai.google.dev/

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed Vercel deployment instructions.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

## 📱 PWA Features

- **Offline Support**: Works without internet connection
- **Install Prompt**: Add to home screen on mobile/desktop
- **Auto Updates**: Service worker updates automatically
- **Caching Strategy**: Optimized for performance

## 🎯 Usage

1. **Select Battle Mode**: Choose from 24H Accumulator, Live Scanner, or Bet Builder
2. **Choose Risk Protocol**: Safe (Iron Bank), Balanced (Bookie Basher), or Risky (High-Yield Assassin)
3. **Filter Sports**: Select specific sports or scan all markets
4. **Generate Tickets**: Click "INITIATE SCAN" to get AI-generated slips
5. **Review Analysis**: Check confidence scores, odds, and mathematical edge
6. **Export Data**: Download your ticket history for record keeping

## 📊 Risk Protocols

### The Iron Bank (Safe)
- Odds per leg: 1.25-1.45
- High volume accumulators
- Focus on probability over returns

### The Bookie Basher (Balanced)
- Odds per leg: 1.50-1.75
- Optimal risk/reward ratio
- Balanced portfolio approach

### The High-Yield Assassin (Risky)
- Odds per leg: 1.80+
- Maximum potential returns
- Higher variance strategy

## 🏗️ Project Structure

```
├── public/                # Static assets & PWA icons
├── src/
│   ├── components/        # React components
│   │   ├── Controls.tsx
│   │   ├── Header.tsx
│   │   ├── HistoryPanel.tsx
│   │   ├── SourceList.tsx
│   │   └── TicketDisplay.tsx
│   ├── service/          # API services
│   │   └── geminiService.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   ├── types.ts          # TypeScript types
│   └── index.css         # Global styles
├── .env.example          # Environment template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── vercel.json           # Vercel deployment config
└── DEPLOYMENT.md         # Deployment guide
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server (port 5000)
npm run dev

# Type checking
npx tsc --noEmit

# Build for production
npm run build

# Test production build locally
npm run preview
```

## 📄 License

© 2025 AariNAT Company Limited. All rights reserved.

## ⚠️ Disclaimer

This is a sports analytics tool, not gambling advice. Only bet what you can afford to lose. The house always has an edge. KingBayo Money Empire promotes mathematical analysis and disciplined investment strategies.

Responsible Gambling Resources:
- https://www.begambleaware.org
- https://www.gamcare.org.uk

---

**Built with precision. Powered by AI. Designed for dominance.**
