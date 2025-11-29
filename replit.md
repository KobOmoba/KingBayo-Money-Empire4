# KingBayo Money Empire

## Overview

KingBayo Money Empire is an AI-powered sports analytics platform that generates optimized accumulator betting slips across multiple sports. The application provides three strategic risk levels (Safe, Balanced, Risky) and supports multiple scanning modes (24-hour analysis, live matches, bet builder). Built as a Progressive Web App (PWA), it works offline and can be installed on mobile and desktop devices.

The application leverages Google's Gemini AI to analyze sports data and generate high-probability accumulator recommendations across global leagues including football, basketball, tennis, cricket, rugby, hockey, volleyball, and handball.

**Production Status**: The app is LIVE on Render with real Gemini AI integration and mobile-optimized UI (November 29, 2025). Full production deployment active.

## User Preferences

Preferred communication style: Simple, everyday language.

## Project Status

### ✅ COMPLETED FEATURES
- Full React component architecture (Header, Controls, TicketDisplay, SourceList, HistoryPanel)
- TypeScript with strict type checking and path aliases
- Enhanced Tailwind CSS theme with custom animations and cyber effects
- **Real Gemini 2.0 Flash API integration** - Live ticket generation with actual AI analysis
- Mobile-optimized UI: Compact header, prominent quick-access buttons, centered controls
- 3 Quick-Scan mode buttons (24H/Live/BetBuilder) + large GENERATE button for mobile accessibility
- CSV export functionality for ticket history
- Dark/light mode toggle
- All 8 sports with global leagues supported
- Production build optimized and tested (0 errors)
- Deployed on Render (automatic builds from GitHub)

### 📋 COMPONENT ARCHITECTURE
```
App (root state management)
├── Header (branding, LIVE indicator, dark mode toggle)
├── Controls (mode, risk level, sport filter, generate button)
├── TicketDisplay (rendered accumulator tickets)
├── SourceList (sports and leagues reference)
└── HistoryPanel (ticket history, CSV export, clear history)
```

## System Architecture

### Frontend Architecture

**Framework**: React 18 + TypeScript with strict checking  
**Build System**: Vite 4 with optimized code splitting  
**Styling**: Tailwind CSS 3.4 + PostCSS with custom theme  
**State Management**: React hooks (useState/useCallback)  
**Path Aliases**: @/components, @/services, @/types for clean imports  

### Component Files

- `src/App.tsx` - Main app with state management (tickets, history, UI controls)
- `src/components/Header.tsx` - Top nav with branding and dark mode
- `src/components/Controls.tsx` - Mode/risk/sport selection with scan button
- `src/components/TicketDisplay.tsx` - Renders generated accumulator tickets
- `src/components/SourceList.tsx` - Reference of all sports and leagues
- `src/components/HistoryPanel.tsx` - Ticket history with CSV export
- `src/services/GeminiService.ts` - AI integration (mock data ready for real API)
- `src/types.ts` - TypeScript interfaces (Match, Ticket, AppState, etc.)

### AI Integration

**Service**: GeminiService with real Gemini 2.0 Flash API  
**Status**: ✅ LIVE - Real API generating tickets in production  
**Tickets Generated**: 3 accumulator tickets per scan with AI analysis  
**API Key**: Securely stored as `VITE_GEMINI_API_KEY` environment variable  
**Integration**: @google/generative-ai package with streaming support  

### Build & Deployment

**Development Server**: Vite on port 5000 with hot reload  
**Production Build**: Optimized output to `dist/` directory  
**Deployment**: Vercel with static hosting (vercel.json configured)  
**Code Splitting**: vendor (React/ReactDOM), icons (lucide-react), ai (@google/generative-ai)  

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Controls.tsx
│   ├── TicketDisplay.tsx
│   ├── SourceList.tsx
│   └── HistoryPanel.tsx
├── services/            # AI service integration
│   └── GeminiService.ts
├── types.ts            # TypeScript interfaces
├── App.tsx             # Main component
├── main.tsx            # Entry point
├── index.css           # Global styles with Tailwind
└── vite-env.d.ts       # Vite environment types
```

## External Dependencies

### Core Libraries
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **lucide-react**: Icon library
- **@google/generative-ai**: Gemini AI integration

### Build Tools
- **vite**: ^4.4.0
- **@vitejs/plugin-react**: React Fast Refresh
- **typescript**: ^5.0
- **tailwindcss**: ^3.4.0
- **postcss**: CSS processing
- **autoprefixer**: CSS vendor prefixing

## Recent Changes (November 29, 2025)

1. **Integrated Real Gemini AI** - Connected Gemini 2.0 Flash API for live ticket generation
2. **Mobile UI Optimization** - Reduced header height, added 3 quick-scan buttons, enlarged GENERATE button for phone accessibility
3. **Quick-Access Buttons** - 📊 24H SCAN / 🔴 LIVE SCAN / 🎯 BET BUILDER with instant generation
4. **Prominent Controls Layout** - Moved buttons to center of mobile screen with better visibility
5. **Compact Header** - Minimized branding section on mobile (reduced from py-2 to py-1)
6. **Deployed to Render** - Live production deployment with automatic GitHub CI/CD integration

## Deployment Status (Render)

**Live URL**: https://kingbayo-[something].onrender.com/ (LIVE NOW)

The app is actively deployed on Render with:
- Automatic builds on GitHub pushes
- Real Gemini API key configured
- Mobile-responsive interface live
- All 3 scan modes functional
- CSV export working
- Dark/light mode toggle active

**To Deploy Updates**:
1. Push code changes to GitHub (KobOmoba/KingBayo-money-Empire3)
2. Render auto-detects and rebuilds (2-3 minutes)
3. Visit live URL to see updates

## Future Enhancements

1. ✅ **Real Gemini API Integration** - COMPLETE - Live in production
2. **Live Match Updates** - Implement WebSocket for real-time odds/match data
3. **User Authentication** - Add login system for saving preferences  
4. **Database** - Store user tickets and betting history
5. **Mobile App** - Build native versions for iOS/Android
6. **Advanced Filters** - Add league-specific odds constraints and filters
7. **API Rate Limiting** - Implement caching for repeated scans
