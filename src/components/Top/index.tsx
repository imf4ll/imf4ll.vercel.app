import { useState, useEffect } from 'react';
import { Container } from './styles';
import Logo from '../../assets/logo.png';
import Down from '../../assets/down.svg';

import Waves from '../../assets/wave-layer.svg';
import WavesPhone from '../../assets/wave-layer-phone.svg';

export const Top = () => {
    const [ viewSize, setViewSize ] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setViewSize(window.innerWidth))
        
        return () => window.removeEventListener('resize', () => setViewSize(window.innerWidth));
    });

    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    }

    return (
        <Container>
            <div className="logo" data-aos="zoom-in-down">
                <img
                    src={ Logo }
                    width="200"
                />
            </div>
            <div data-aos="fade-right">
                <h2>&lt;Back-end Developer /&gt;</h2>
                <h1>Carlos Daniel. 👋</h1>
            </div>
            <img
                src={ Down }
                className="scroll"
                width="40"
                onClick={ handleScroll }
            />
            <img src={ viewSize > 800 ? Waves : WavesPhone } width="100%" className="wave" />
        </Container>
    );
}
