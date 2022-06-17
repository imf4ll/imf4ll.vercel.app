
import { Container } from './styles';

import Left from '../../assets/left.svg';

export const Back = (props: { path: string }) => {
    const handleBack = () => window.location.href = props.path;

    return (
        <Container onClick={ handleBack }>
            <img src={ Left } width="40" />
            <span>Back</span>
        </Container>
    );
}
