import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ProductCatalog from './ProductCatalog.tsx';
import AccessoriesCatalog from './AccessoriesCatalog.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/accessories" element={<AccessoriesCatalog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
