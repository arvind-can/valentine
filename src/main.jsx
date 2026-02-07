import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './components/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
