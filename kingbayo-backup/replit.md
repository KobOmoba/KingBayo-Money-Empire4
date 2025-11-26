# KingBayo Money Empire

## Overview

KingBayo Money Empire is an AI-powered sports analytics platform that generates optimized accumulator betting slips across multiple sports. The application provides three strategic risk levels (Safe, Balanced, Risky) and supports multiple scanning modes (24-hour analysis, live matches, bet builder). Built as a Progressive Web App (PWA), it works offline and can be installed on mobile and desktop devices.

The application leverages Google's Gemini AI to analyze sports data and generate high-probability accumulator recommendations across global leagues including football, basketball, tennis, cricket, rugby, hockey, volleyball, and handball.

**Production Status**: The app is production-ready and optimized for Vercel deployment with full PWA capabilities (November 25, 2025).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: React 18 with TypeScript**
- **Problem**: Need type-safe, component-based UI with strong developer tooling
- **Solution**: React 18 with TypeScript provides modern hooks, concurrent features, and compile-time type checking
- **Rationale**: React's component model enables reusable UI elements (Header, Controls, TicketDisplay, HistoryPanel, SourceList), while TypeScript prevents runtime errors and improves maintainability

**Build System: Vite 4**
- **Problem**: Fast development experience and optimized production builds
- **Solution**: Vite provides instant HMR (Hot Module Replacement) and optimized bundling
- **Rationale**: Significantly faster than webpack-based alternatives, native ES modules support

**Styling: Tailwind CSS 3.4 + PostCSS**
- **Problem**: Consistent, responsive design system without writing custom CSS
- **Solution**: Utility-first CSS framework with custom theme extensions via PostCSS
- **Rationale**: Reduces CSS bundle size through tree-shaking, provides design consistency, enables rapid UI development
- **Custom Theme**: Extended color palette for dark mode (slate, emerald, cyan gradients)
- **Production Setup**: Tailwind integrated via @tailwindcss/postcss for optimized builds (replaced CDN)

**State Management: React useState + useCallback**
- **Problem**: Manage application state for tickets, loading states, history, and user preferences
- **Solution**: Built-in React hooks without external state libraries
- **Rationale**: Application state is relatively simple and localized to App component; no need for Redux/Zustand complexity
- **Key State**: AppState interface tracks tickets, loading, errors, mode, risk level, sport filters, dark mode, and history

**Progressive Web App (PWA): vite-plugin-pwa 1.1.0**
- **Problem**: Enable offline functionality and native-like installation
- **Solution**: Service worker with Workbox for caching strategies
- **Rationale**: Improves user experience on mobile, enables offline ticket viewing
- **Production Configuration**:
  - Auto-update service worker registration
  - Manifest auto-injection (manifest.webmanifest)
  - PWA icons: 192x192 and 512x512 PNG with maskable support
  - Cache-first strategy for Google Fonts (1 year expiration)
  - Glob patterns for JS/CSS/HTML/images caching
  - Precaching with Workbox for offline-first experience

### Component Architecture

**Component Hierarchy**:
```
App (root)
├── Header (branding, dark mode toggle, live status)
├── Controls (mode selection, risk level, sport filter, generate button)
├── TicketDisplay (renders generated tickets with match details)
├── SourceList (displays supported sports and leagues)
└── HistoryPanel (ticket history, export CSV, clear history)
```

**Design Pattern**: Container/Presentation pattern where App manages state and child components are presentational

### AI Integration

**Service: GeminiService**
- **Problem**: Generate intelligent betting accumulator recommendations
- **Solution**: Google Gemini AI API integration with custom system prompt
- **Rationale**: Gemini provides advanced reasoning capabilities for multi-sport analysis
- **System Prompt Strategy**: "KINGBAYO WARLORD" persona enforces disciplined analytical approach with mathematical focus
- **Current Implementation**: Mock data generation (demo mode) - actual Gemini API integration pending
- **API Key Management**: Environment variable `VITE_GEMINI_API_KEY` for security

**Betting Strategies**:
- Safe ("Iron Bank"): 1.25-1.45 odds per leg
- Balanced ("Bookie Basher"): 1.50-1.75 odds per leg  
- Risky ("High-Yield Assassin"): 1.80+ odds per leg
- Target: 5-10 total accumulator odds across 5-10 matches

### Data Models

**Type System** (src/types.ts):
- `Match`: Individual match with prediction, odds, sport, league, confidence, reasoning
- `Ticket`: Accumulator slip containing multiple matches, strategy, total odds, confidence
- `AppState`: Application-wide state management
- `Mode`: '24h' | 'live' | 'betbuilder'
- `RiskLevel`: 'safe' | 'balanced' | 'risky'
- `SportFilter`: Multi-sport filtering (football, basketball, tennis, cricket, rugby, hockey, volleyball, handball)

### Deployment Architecture

**Platform: Vercel**
- **Problem**: Need serverless deployment with zero-config for Vite apps
- **Solution**: Vercel with automatic framework detection
- **Configuration** (vercel.json):
  - SPA rewrites: All routes redirect to root for client-side routing
  - Cache headers: Immutable assets cached for 1 year, HTML/service workers no-cache
  - Build command: `npm run build`
  - Output directory: `dist`

**Build Process**:
1. Vite builds optimized production bundle
2. PWA plugin generates service worker and manifest
3. Assets hashed for cache busting
4. Vercel serves static files with CDN distribution

### Offline Strategy

**PWA Manifest**:
- Name: "KingBayo Money Empire"
- Theme color: #10b981 (emerald)
- Background: #0f172a (slate-900)
- Display: standalone (hides browser UI)
- Icons: 192x192 and 512x512 PNG icons

**Service Worker**:
- Auto-update registration
- Precaches all static assets (JS, CSS, HTML, images)
- Runtime caching for external fonts

## External Dependencies

### AI Services
- **Google Gemini API**: Core AI engine for sports analytics and accumulator generation
  - API key required via `VITE_GEMINI_API_KEY` environment variable
  - Endpoint: https://ai.google.dev/
  - Used for: Match analysis, probability calculations, reasoning generation

### UI Libraries
- **lucide-react**: Icon library for consistent iconography (Crown, Zap, Brain, Settings, etc.)
- **React 18**: UI framework with hooks and concurrent features
- **React DOM 18**: DOM rendering engine

### Build & Development Tools
- **Vite 4.4**: Build tool and dev server
- **@vitejs/plugin-react**: React Fast Refresh support
- **TypeScript 5.0**: Type checking and transpilation
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **PostCSS 8.5**: CSS processing with autoprefixer
- **vite-plugin-pwa 1.1**: PWA manifest and service worker generation

### Deployment Platform
- **Vercel**: Hosting platform with automatic deployments from Git
  - No database required (client-side only application)
  - Environment variable management for API keys
  - CDN distribution for global performance
  - Automatic HTTPS and custom domains support

### Data Storage
- **LocalStorage**: Client-side storage for ticket history and user preferences (implicit browser API)
- **No backend database**: All data persists locally in browser

### Browser APIs
- **Service Worker API**: Offline functionality and caching
- **Web App Manifest**: PWA installation and theming
- **LocalStorage API**: Persistent client-side data