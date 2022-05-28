import { Container } from './styles';

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
        </Container>
    )
}
