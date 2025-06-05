import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';



// Import Bootstrap’s CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap’s JS
import * as bootstrap from 'bootstrap';

// Import custom CSS
import './assets/css/App.css';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);