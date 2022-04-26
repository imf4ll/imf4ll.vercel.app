import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Top, About, Projects } from './styles';

// Images
import WaveTop from '../assets/wave-top.svg';
import WaveBottom from '../assets/wave-bottom.svg';
import Github from '../assets/github.svg';
import Programmer from '../assets/undraw_programmer.svg';
import AnonURL from '../assets/anonurl.png';
import Ohnotes from '../assets/ohnotes.png';
import Listate from '../assets/listate.png';

export default () => {
    useEffect(() => AOS.init({
        duration: 1000,
    }), []);

    const urls = [
        'https://github.com/z3oxs',
        'https://anonurl.vercel.app',
        'https://ohnotes.vercel.app',
        'https://github.com/z3oxs/listate',
    ];

    const handle = (id: number) =>
        window.location.href = urls[id];

    return (
        <Container>
            <Top>
                <div data-aos="zoom-in-down">
                    <img
                        src="https://avatars.githubusercontent.com/u/66672234"
                        width="200"
                    />
                </div>
                <div data-aos="fade-right">
                    <h2>Hi, my name is</h2>
                    <h1>Carlos Daniel. 👋</h1>
                    <img src={ Github } onClick={ () => handle(0) } title="Github" width="36" />
                </div>
            </Top>
            <img src={ WaveTop } id="wave-top" width="100%" />
            <About>
                <h1 data-aos="fade-down">About me</h1>
                <section>
                    <img data-aos="fade-right" src={ Programmer } title="Programmer by Undraw" width="40%" />
                    <p data-aos="fade-left">
                        <span>I</span>'m 19 years old, based in Brazil and a super enthusiast of technology,
                        living with that reality since my 8 years old. I study full-stack development
                        for about 2 years and a half, starting in Back-end with Python and JavaScript,
                        In the same year I (happily) learned React and MongoDB, after a long study about
                        front-end technologies, I decided to study Golang and i'm in love with all these
                        technologies! :).
                    </p>
                </section>
            </About>
            <img src={ WaveBottom } id="wave-bottom" width="100%" />
            <Projects>
                <h1 data-aos="fade-down">Projects</h1>
                <div id="projects" data-aos="fade-up">
                    <section data-aos="flip-left">
                        <h2>AnonURL</h2>
                        <img src={ AnonURL } onClick={ () => handle(1) } width="350" />
                        <p>Create anonymous shortened URLs. Focused in privacy.</p>
                    </section>
                    <section data-aos="flip-left">
                        <h2>Ohnotes</h2>
                        <img src={ Ohnotes } onClick={ () => handle(2) } width="350" />
                        <p>Share your notes with your friends/team instantly.</p>
                    </section>
                    <section data-aos="flip-left">
                        <h2>Listate</h2>
                        <img src={ Listate }
                            onClick={ () => handle(3) }
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                            width="300"
                            height="350"
                        />
                        <p>Create tasklists everywhere you go.</p>
                    </section>
                </div>
            </Projects>
        </Container>
    );
}
