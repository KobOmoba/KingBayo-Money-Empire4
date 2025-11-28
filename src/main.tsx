import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ErrorBoundary } from './components/ErrorBoundary'
import './index.css'

// Timeout handler - if app doesn't load in 5 seconds, show error
const timeoutId = setTimeout(() => {
  const rootElement = document.getElementById('root');
  if (rootElement && rootElement.innerHTML.includes('Loading cold-blooded')) {
    console.error('❌ App timeout - did not load within 5 seconds');
    document.body.innerHTML = `
      <div style="padding: 40px; text-align: center; color: white; font-family: sans-serif; background: #1e293b; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
        <div style="background: #7f1d1d; border: 2px solid #dc2626; border-radius: 8px; padding: 30px; max-width: 400px;">
          <h2 style="color: #fca5a5; margin-bottom: 15px;">⏱️ Timeout Error</h2>
          <p style="margin-bottom: 15px; color: #fed7aa;">App took too long to load. This might be a Vercel build issue.</p>
          <button onclick="location.reload()" style="background: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-size: 14px;">Reload Page</button>
        </div>
      </div>
    `;
  }
}, 5000);

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found - index.html may be corrupted');
  }
  
  console.log('🚀 KingBayo initializing...');
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
  );
  console.log('✅ KingBayo loaded successfully');
  clearTimeout(timeoutId); // Clear timeout if app loaded
} catch (error) {
  clearTimeout(timeoutId);
  console.error('❌ Failed to initialize KingBayo:', error);
  const errorMsg = error instanceof Error ? error.message : String(error);
  document.body.innerHTML = `
    <div style="padding: 40px; text-align: center; color: white; font-family: sans-serif; background: #1e293b; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div style="background: #7f1d1d; border: 2px solid #dc2626; border-radius: 8px; padding: 30px; max-width: 400px;">
        <h2 style="color: #fca5a5; margin-bottom: 15px;">❌ Application Error</h2>
        <p style="margin-bottom: 15px; color: #fed7aa;">Failed to initialize:</p>
        <pre style="background: #3f0f0f; padding: 15px; border-radius: 4px; overflow-x: auto; color: #fecaca; text-align: left; font-size: 12px; max-height: 150px;">${errorMsg}</pre>
        <button onclick="location.reload()" style="margin-top: 20px; background: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-size: 14px;">Reload</button>
      </div>
    </div>
  `;

  // Also log to window for debugging
  (window as any).__KINGBAYO_ERROR__ = errorMsg;
}