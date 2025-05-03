import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { setupScrollObserver } from './components/SetupScrollObserver.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize after components are mounted
window.addEventListener('load', () => {
  setTimeout(setupScrollObserver, 500);
});