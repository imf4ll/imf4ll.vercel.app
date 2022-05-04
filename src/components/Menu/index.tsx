import { useState, useEffect } from 'react';
import { Container, MenuDesktop, MenuMobile } from './styles';

import MenuIcon from '../../assets/menu.svg';
import Close from '../../assets/close.svg';

export const Menu = () => {
    const [ viewSize, setViewSize ] = useState<number>(0);
    const [ menuOpen, setMenuOpen ] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('resize', () => setViewSize(window.innerWidth))
        
        return () => window.removeEventListener('resize', () => setViewSize(window.innerWidth));

    }, []);

    const handleScroll = (element: string) => {
        setMenuOpen(false);

        window.scrollTo({
            top: document.getElementById(element).offsetTop,
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
                        </ul>
                    </MenuDesktop>
                ) : (
                    <MenuMobile open={ menuOpen }>
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
