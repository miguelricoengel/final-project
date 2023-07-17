import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProviderWrapper } from "./context/auth.context"; 
import { CloudinaryContext } from 'cloudinary-react';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>    
      <CloudinaryContext cloudName="dc0tzx7fa">
        <App />
        </CloudinaryContext>
      </AuthProviderWrapper>      
    </Router>
  </React.StrictMode>
);