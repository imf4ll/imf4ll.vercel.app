import { Container } from './styles';
import { projects } from '../../utils/projects';

import Top from '../../assets/top.svg';

export const Projects = () => {
   const handleURL = (url: string) =>
        window.location.href = url;

   const handleScrollTop = () =>
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    return (
        <Container id="projects">
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
                    src={ Top }
                    className="top"
                    width="50"
                    onClick={ handleScrollTop }
                />
            </div>
        </Container>
    )
}
