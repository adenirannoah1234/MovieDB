import React from 'react';
import ReactDOM from 'react-dom/client';
import { BookmarkProvider } from './BookmarkedContext.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookmarkProvider>
      <App />
    </BookmarkProvider>
  </React.StrictMode>
);
