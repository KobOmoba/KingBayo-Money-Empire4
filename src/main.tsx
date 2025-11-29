import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('🚀 HTML loaded, waiting for React...');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

console.log('🚀 KingBayo initializing...');
setTimeout(() => console.log('✅ KingBayo loaded successfully'), 100);
