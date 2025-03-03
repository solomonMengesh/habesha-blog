import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// reportWebVitals is optional for performance tracking, remove it if you don't need it
// import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want performance reporting, leave this in. Otherwise, you can comment it out.
// reportWebVitals();
