import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'

import { App } from './App';

const mainHostElement = document.getElementById('root');

for (let index = 0; index < 100; index++) {
    const hostElement = document.createElement('div');
    mainHostElement.appendChild(hostElement);
    const shadow = hostElement.attachShadow({ mode: 'open' });
    const rootElement = document.createElement('div');
    shadow.appendChild(rootElement);
    
    createRoot(rootElement).render(<App />);
}