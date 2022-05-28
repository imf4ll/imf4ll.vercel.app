import { createRoot } from 'react-dom/client';

import './styles/global.css';

import Home from './pages/Home';

createRoot(document.querySelector('#root')!).render(
    <Home />
);
