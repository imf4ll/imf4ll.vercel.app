import { useState, useEffect } from 'react';
import { Container, MenuDesktop, MenuMobile } from './styles';

import MenuIcon from '../../assets/menu.svg';
import Close from '../../assets/close.svg';

export const Menu = () => {
    const [ viewSize, setViewSize ] = useState<number>(window.innerWidth);
    const [ menuOpen, setMenuOpen ] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('resize', () => setViewSize(window.innerWidth))
        
        return () => window.removeEventListener('resize', () => setViewSize(window.innerWidth));
    });

    const handleVisit = (path: string) => window.location.href = path;

    const handleScroll = (element: string) => {
        setMenuOpen(false);

        window.scrollTo({
            top: element !== 'contacts'
                ? document.getElementById(element)!.offsetTop
                : document.getElementById(element)!.offsetTop + 500,
            behavior: 'smooth',
        });
    }
        
    return (
        <Container>
            {
                viewSize > 800 ? (
                    <MenuDesktop>
                        <ul>
                            <li onClick={ () => handleScroll('about') }>About me</li>
                            <li onClick={ () => handleScroll('tech') }>Technologies</li>
                            <li onClick={ () => handleScroll('projects') }>Projects</li>
                            <li onClick={ () => handleVisit('/blog') }>Blog</li>
                        </ul>
                    </MenuDesktop>
                ) : (
                    <MenuMobile
                        open={ menuOpen }
                        style={
                            menuOpen ? { height: '100vh' } : { height: 'auto' }
                        }
                    >
                        { 
                            !menuOpen ?
                                <img
                                    className="menuIcon"
                                    src={ MenuIcon }
                                    width="45"
                                    onClick={ () => setMenuOpen(true) }
                                />
                            : (
                                <>
                                    <img
                                        className="close"
                                        src={ Close }
                                        width="45"
                                        onClick={ () => setMenuOpen(false) }
                                    />
                                    <ul>
                                        <li onClick={ () => handleScroll('about') }>About me</li>
                                        <li onClick={ () => handleScroll('tech') }>Technologies</li>
                                        <li onClick={ () => handleScroll('projects') }>Projects</li>
                                        <li onClick={ () => handleVisit('/blog') }>Blog</li>
                                    </ul>
                                </>
                            )
                        }
                    </MenuMobile>
                )
            }
        </Container>
    )
}
