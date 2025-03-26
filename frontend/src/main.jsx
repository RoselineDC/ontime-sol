import React from "react";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import router from './router/Router.jsx'

// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

import 'sweetalert2/dist/sweetalert2.js'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    
  </Provider>,
)
