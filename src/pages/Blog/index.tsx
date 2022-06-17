
import { Container, Featured, Posts } from './styles';

import { Back } from '../../components/Back';

export const Blog = () => (
    <>
        <Back path='/' />
    
        <Container>
            <Featured
                onClick={ () => window.location.href = "/blog/calling-c-from-golang" }
            >
                <img
                    src="https://images.pexels.com/photos/257881/pexels-photo-257881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width="512"
                />
                <div className="featured-text">
                    <h1>Calling C code from Golang</h1>
                    <p>
                        A simple guide of how to use C code natively on Golang.
                    </p>
                </div>
            </Featured>

            <Posts>
                <section
                    onClick={ () => window.location.href = "/blog/first-post" }
                >
                    <img
                        src="https://images.pexels.com/photos/428429/pexels-photo-428429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width="200"
                        height="200"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                    <h1>First post ever!</h1>
                </section>
            </Posts>
        </Container>
    </>
);
