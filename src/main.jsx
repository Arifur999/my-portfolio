import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import router from './router/router.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >

    </RouterProvider>
    
  </StrictMode>,
)
