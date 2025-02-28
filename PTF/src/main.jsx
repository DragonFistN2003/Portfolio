import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './pages/routes/Routes';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-gray-400 p-4 h-full w-full">
    <Router />
    </div>
  </StrictMode>
);