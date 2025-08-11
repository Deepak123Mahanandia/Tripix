import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../node_modules/remixicon/fonts/remixicon.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>
)
