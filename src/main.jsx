import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProviderWrapper } from "./context/auth.context"; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>      
        <App />
      </AuthProviderWrapper>      
    </Router>
  </React.StrictMode>
);