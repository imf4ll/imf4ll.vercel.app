import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Post } from './pages/Post';
import { Error404 } from './pages/404';

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/blog" element={ <Blog /> } />
            <Route path="/blog/:post" element={ <Post /> } />
            <Route path="*" element={ <Error404 /> } />
        </Routes>
    </BrowserRouter>
)
