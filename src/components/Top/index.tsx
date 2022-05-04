import { Container } from './styles';
import Logo from '../../assets/logo.png';
import Down from '../../assets/down.svg';

export const Top = () => {
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
        </Container>
    );
}
