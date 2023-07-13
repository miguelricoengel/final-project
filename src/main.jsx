import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import './index.css';
import { AuthProviderWrapper } from "./context/auth.context"; 

const isLoggedIn = true; // Replace login logic !!!!!!!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <AuthProviderWrapper>      
      {isLoggedIn && <Navbar />}
      <App />
      </AuthProviderWrapper>      
    </Router>
  </React.StrictMode>
);

reportWebVitals();