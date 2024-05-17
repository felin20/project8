import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import MediaQueryProvider from './MediaQueryProvider';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MediaQueryProvider>
      <App />
    </MediaQueryProvider>
  </React.StrictMode>
);
