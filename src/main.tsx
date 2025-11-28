import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ErrorBoundary } from './components/ErrorBoundary'
import './index.css'

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  console.log('🚀 KingBayo initializing...');
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
  );
  console.log('✅ KingBayo loaded successfully');
} catch (error) {
  console.error('❌ Failed to initialize KingBayo:', error);
  document.body.innerHTML = `
    <div style="padding: 40px; text-align: center; color: white; font-family: sans-serif; background: #1e293b; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div style="background: #7f1d1d; border: 2px solid #dc2626; border-radius: 8px; padding: 30px; max-width: 400px;">
        <h2 style="color: #fca5a5; margin-bottom: 15px;">⚠️ Application Error</h2>
        <p style="margin-bottom: 15px; color: #fed7aa;">Failed to initialize KingBayo:</p>
        <pre style="background: #3f0f0f; padding: 15px; border-radius: 4px; overflow-x: auto; color: #fecaca; text-align: left; font-size: 12px;">${error instanceof Error ? error.message : 'Unknown error'}</pre>
        <p style="margin-top: 20px; color: #fed7aa; font-size: 14px;">Try refreshing the page.</p>
      </div>
    </div>
  `;
}