import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    Container, About, Top,
    Projects, Technologies, Tech
} from './styles';

import { Menu } from '../../components/Menu';

import { projects } from '../../utils/projects';
import { techs } from '../../utils/techs';

import Programmer from '../../assets/undraw_programmer.svg';
import WaveBlack from '../../assets/wave-black.svg';
import Waves from '../../assets/wave-layer.svg';
import WavesPhone from '../../assets/wave-layer-phone.svg';
import Logo from '../../assets/logo.png';
import Down from '../../assets/down.svg';
import TopSvg from '../../assets/top.svg';
import WaveZinc from '../../assets/wave-zinc.svg';
import Left from '../../assets/left.svg';
import Right from '../../assets/right.svg';

export const Home = () => {
    const [ viewSize, setViewSize ] = useState<number>(window.innerWidth);
    const carousel = useRef<HTMLDivElement | null>(null);
    const [ scrollX, setScrollX ] = useState<number>(0);
    const [ view, setView ] = useState<number>(0);

    useEffect(() => 
        AOS.init({
            duration: 1000,
        })

    , []);

    useEffect(() => {
        window.addEventListener('resize', () => setViewSize(window.innerWidth))
        
        return () => window.removeEventListener('resize', () => setViewSize(window.innerWidth));
    });

    useEffect(() => {
        window.addEventListener('resize', () => setView(window.innerWidth))
        
        return () => window.removeEventListener('resize', () => setView(window.innerWidth));

    }, []);

    useEffect(() =>
        setScrollX(carousel.current!.scrollWidth - window.innerWidth + 50)

    , []);

    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    }

   const handleURL = (url: string) =>
        window.location.href = url;

   const handleScrollTop = () =>
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    const handleLeft = () => {
        const scrollWidth = carousel.current!.scrollWidth;
        const round = view > 800 ? Math.round(scrollWidth / 2) : Math.round(window.innerWidth * 2);
        const x = scrollX + round;

        if (x < scrollWidth - window.innerWidth) {
            setScrollX(x);

        } else {
            setScrollX(scrollWidth - window.innerWidth + 50);

        }
    }

    const handleRight = () => {
        const scrollWidth = carousel.current!.scrollWidth;
        const round = view > 800 ? Math.round(scrollWidth / 2) : Math.round(window.innerWidth * 2);
        const x = scrollX - round;

        if (x > scrollWidth * -1 + window.innerWidth) {
            setScrollX(x);

        } else {
            setScrollX(scrollWidth * -1 + window.innerWidth - 50);

        }
    }

    return (
        <Container>
            <Menu />
            <Top>
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
            </Top>
            <About>
                <h1 data-aos="fade-down">About me</h1>
                <section>
                    <img
                        data-aos="fade-right"
                        src={ Programmer }
                        alt="A programmer"
                        title="Programmer by Undraw"
                        width="30%"
                        className="programmer"
                    />
                    <div className="about">
                        <p data-aos="fade-left">
                            <span>I</span>'m 19 years old, based in Brazil and a super enthusiast of technology,
                            living with that reality since my 8 years old. I study programming for about 2 years
                            and a half, discovering new technologies and techniques and improving existant knowledge.
                            If you want to contact, send me an <a
                                href="mailto:z3ox1s@protonmail.com"
                                title="z3ox1s@protonmail.com"
                            >
                                email
                            </a>.
                        </p>
                    </div>
                </section>
                <img src={ WaveBlack } width="100%" className="wave" />
            </About>
            <Technologies>
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
            </Technologies>
            <Projects>
                <h1 data-aos="fade-down">Projects</h1>
                <div className="projects" data-aos="fade-up">
                    {
                        projects.map((i, k) => (
                            <section
                                data-aos="flip-left"
                                key={ k }
                                onClick={ () => handleURL(i.url) }
                            >
                                <img
                                    src={ i.image }
                                    width="350"
                                    height="350"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                    }}
                                />
                                <div className="text">
                                    <span>{ i.title }</span>
                                    <span>{ i.description }</span>
                                </div>
                            </section>
                        ))
                    }
                    <img
                        src={ TopSvg }
                        className="top"
                        width="50"
                        onClick={ handleScrollTop }
                    />
                </div>
            </Projects>
        </Container>
    );
}
