import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // 1. Import HashRouter
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* 2. Wrap your App in HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);