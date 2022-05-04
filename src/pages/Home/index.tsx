import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../global.css';
import { Container } from './styles';

// Components
import { Menu } from '../../components/Menu';
import { Top } from '../../components/Top';
import { About } from '../../components/About';
import { Technologies } from '../../components/Technologies';
import { Projects } from '../../components/Projects';

export default () => {
    useEffect(() => 
        AOS.init({
            duration: 1000,
        })

    , []); 

    return (
        <Container>
            <Menu />
            <Top />
            <About />
            <Technologies />
            <Projects />
        </Container>
    );
}
