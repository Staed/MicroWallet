import React from 'react';
import ReactDOM from 'react-dom/client';

import Wallet from './View/Wallet';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Wallet />
  </React.StrictMode>
);