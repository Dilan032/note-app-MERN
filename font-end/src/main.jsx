import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import { Signup } from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import ContextProvider from './context/ContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
)
