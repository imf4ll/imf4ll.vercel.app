import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './styles/global.css';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

createRoot(document.querySelector('#root')!).render (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/*" element={ <NotFound /> } />
        </Routes>
    </BrowserRouter>
);
