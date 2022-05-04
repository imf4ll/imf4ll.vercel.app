import { Container } from './styles';

import Github from '../../assets/github.svg';
import Programmer from '../../assets/undraw_programmer.svg';
import WaveBlack from '../../assets/wave-black.svg';

export const About = () => {
    return (
        <Container id="about">
            <h1 data-aos="fade-down">About me</h1>
            <section>
                <img
                    data-aos="fade-right"
                    src={ Programmer }
                    alt="A programmer"
                    title="Programmer by Undraw"
                    width="40%"
                />
                <div className="about">
                    <p data-aos="fade-left">
                        <span>I</span>'m 19 years old, based in Brazil and a super enthusiast of technology,
                        living with that reality since my 8 years old. I study programming for about 2 years
                        and a half, discovering new technologies and techniques and improving existant knowledge.
                    </p>
                    <img src={ Github } width="36" onClick={ () => window.location.href = 'https://github.com/z3oxs' } />
                </div>
            </section>
            <img src={ WaveBlack } width="100%" className="wave" />
        </Container>
    )
}
