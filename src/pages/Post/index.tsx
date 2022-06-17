import { useParams } from 'react-router-dom';

import { Back } from '../../components/Back';

import { Container, PostContainer } from './styles';

// Posts
import { First } from './pages/First';
import { CallingCFromGolang } from './pages/Calling-C-From-Golang';

export const Post = () => {
    const { post } = useParams();

    let Current: () => JSX.Element = First;

    switch (post) {
        case 'first-post': Current = First; break;
        case 'calling-c-from-golang': Current = CallingCFromGolang; break;
        default: window.location.href = '/blog';
    }

    return (
        <>
            <Back path='/blog' />
        
            <Container>
                <PostContainer>
                    <Current />
                </PostContainer>
            </Container>
        </>
    );
}
