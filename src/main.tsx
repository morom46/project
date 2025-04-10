import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import SmokingAccessories from './components/SmokingAccessories';

function App() {
  return (
    <>
      <App />
      <SmokingAccessories />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
