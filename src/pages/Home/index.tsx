// @ts-nocheck

import Arrow from '../../assets/arrow.svg';
import Moo from '../../assets/moo.gif';
import Rough from '../../assets/rough.gif';
import Ghost from '../../assets/ghost.gif';

import { Container } from './styles';

export const Home = () => {
    const projects: Array<{ name: string; description: string; image: string; repo; string }> = [
        {
            name: 'Moo',
            description: 'Streams music directly from YouTube',
            image: Moo,
            repo: 'https://github.com/imf4ll/moo'
        },
        {
            name: 'Rough',
            description: 'GTK Based app launcher for Linux',
            image: Rough,
            repo: 'https://github.com/imf4ll/rough'
        },
        {
            name: 'Ghost',
            description: 'Tool to take screenshots from terminal',
            image: Ghost,
            repo: 'https://github.com/imf4ll/ghost'
        },
    ];

    const handleScale = (element: string, value: string) => {
        const projectImage = document.querySelector<HTMLImageElement>(element)!;

        projectImage!.style.transform = `scale(${ value })`;
    }

    return (
        <Container>
            <div className="top">
                <nav>
                    <ul>
                        <li><a href="#aboutme">About me</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </nav>
            </div>

            <div className="home">
                <div className="profile">
                    <img src="https://avatars.githubusercontent.com/u/66672234?v=4" width={ 200 } />

                    <h3>Hi there  👋</h3>
                </div>

                <img src={ Arrow } width={ 32 } className="arrow" />
            </div>

            <a name="aboutme"></a>
            <div className="aboutme">
                <h1>About me.</h1>

                <p>
                    My name is Carlos Daniel, borned and live in Brazil. My life always was technology,
                    from 4 years ago my connection with technology gained some levels when I started a technical course
                    about programming, and currently while I finish my degree in Information Technology. Starting 
                    with Python, my very first language I approached new levels across the time coding some solutions
                    and studying more. Soon, I met JavaScript and React, technologies that I use for many cases,
                    followed by Go and Rust, with that technologies I coded much solutions for personal problems on my nvim environment,
                    on topic below I’ll present you my  most significant projects, one by one.
                </p>
            </div>

            <a name="projects"></a>
            <div className="projects">
                <h1>Projects.</h1>

                <div className="content">
                    {
                        projects.map((i, k) => (
                            <a href={ i.repo }>
                                <div key={ k } className="project">
                                    <div>
                                        <h3>{ i.name }</h3>

                                        <p>{ i.description }</p>
                                    </div>

                                    <img
                                        src={ i.image }
                                        width="90%"
                                        className={ `project-image-${ k }` }
                                        onMouseOver={ () => handleScale(`.project-image-${ k }`, '1.4') }
                                        onMouseOut={ () => handleScale(`.project-image-${ k }`, '1') }
                                    />
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
}
