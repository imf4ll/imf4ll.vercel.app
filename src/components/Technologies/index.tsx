import { useState, useRef, useEffect } from 'react';
import { Container, Tech } from './styles';
import { techs } from '../../utils/techs';

import WaveZinc from '../../assets/wave-zinc.svg';
import Left from '../../assets/left.svg';
import Right from '../../assets/right.svg';

export const Technologies = () => {
    const carousel = useRef<HTMLDivElement | null>(null);
    const [ scrollX, setScrollX ] = useState<number>(0);
    const [ view, setView ] = useState<number>(0);

    useEffect(() => {
        window.addEventListener('resize', () => setView(window.innerWidth))
        
        return () => window.removeEventListener('resize', () => setView(window.innerWidth));

    }, []);

    useEffect(() =>
        setScrollX(carousel.current.scrollWidth - window.innerWidth + 50)

    , []);

    const handleLeft = () => {
        const round = view > 800 ? Math.round(carousel.current.scrollWidth / 2) : Math.round(window.innerWidth * 2);
        const x = scrollX + round;

        if (x < carousel.current.scrollWidth - window.innerWidth) {
            setScrollX(x);

        } else {
            setScrollX(carousel.current.scrollWidth - window.innerWidth + 50);

        }
    }

    const handleRight = () => {
        const round = view > 800 ? Math.round(carousel.current.scrollWidth / 2) : Math.round(window.innerWidth * 2);
        const x = scrollX - round;

        if (x > carousel.current.scrollWidth * -1 + window.innerWidth) {
            setScrollX(x);

        } else {
            setScrollX(carousel.current.scrollWidth * -1 + window.innerWidth - 50);

        }
    }

    return (
        <Container id="tech">
            <h1 data-aos="fade-down">Technologies</h1>
            <div data-aos="fade-left" style={{ marginLeft: scrollX }} ref={ carousel }>
                {
                    techs.map((i, k) => (
                        <Tech
                            key={ k }
                            border={ i.color }
                        >
                            <img src={ i.url } />
                            <h1>{ i.title }</h1>
                            <p>{ i.description }</p>
                        </Tech>
                    ))
                } 
            </div>
            <div className="buttons">
                <button onClick={ handleLeft }>
                    <img src={ Left } />
                </button>
                <button onClick={ handleRight }>
                    <img src={ Right } onClick={ handleRight } />
                </button>
            </div>
            <img src={ WaveZinc } width="100%" className="wave" />
        </Container>
    )
}
