import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoginProvider } from "./context/login.context";
import { RegisterProvider } from "./context/register.context";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsersProvider } from './context/users.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RegisterProvider>
        <LoginProvider>
          <UsersProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </UsersProvider>
        </LoginProvider>
      </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
