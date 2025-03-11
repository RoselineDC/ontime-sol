import React from "react";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import router from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
