import { createRoot } from 'react-dom/client';

import './styles/global.css';

import { Router } from './routes';

createRoot(document.querySelector('#root')!).render (
    <Router />
);
