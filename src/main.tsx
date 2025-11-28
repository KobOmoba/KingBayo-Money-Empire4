import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  console.log('🚀 KingBayo initializing...');
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  console.log('✅ KingBayo loaded successfully');
} catch (error) {
  console.error('❌ Failed to initialize KingBayo:', error);
  document.body.innerHTML = `
    <div style="padding: 40px; text-align: center; color: red; font-family: sans-serif;">
      <h2>Error initializing application</h2>
      <p>${error instanceof Error ? error.message : 'Unknown error'}</p>
      <p>Please refresh the page or contact support.</p>
    </div>
  `;
}