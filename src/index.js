import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './reset.css'
import App from './App';
import '../src/i18/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
