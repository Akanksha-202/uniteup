import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import Tailwind CSS styles
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import Material-UI styles



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
