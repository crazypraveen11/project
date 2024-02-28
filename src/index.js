import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { Mytheme } from './mytheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ThemeProvider theme={Mytheme}>
      <App />
    </ThemeProvider>
 
);


