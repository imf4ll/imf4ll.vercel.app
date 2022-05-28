import { createRoot } from 'react-dom/client';

import { GlobalStyle } from './styles/globalStyle';

import Home from './pages/Home';

createRoot(document.querySelector('#root')).render(
    <>
        <GlobalStyle />
        <Home />
    </>
);
