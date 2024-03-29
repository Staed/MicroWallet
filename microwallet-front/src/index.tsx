import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import Wallet from './View/Wallet';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <Wallet user="Staed" />
  </StrictMode>
);