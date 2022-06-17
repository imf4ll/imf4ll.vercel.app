import styled from 'styled-components';

export const Container = styled.div`
    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    padding: 4rem 0 2rem 0;
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    color: #fff;

    hr {
        width: 100%;
        margin: 1rem 0 2rem 0;
        border: 1px solid #333;
    }

    img {
        border-radius: 4px;
    }

    .title {
        text-align: center;
        width: 75%;
    
        span {
            color: #aaa;
        }
    }

    .tags {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;

        p {
            background-color: #151515;
            padding: 10px;
            border-radius: 5px;
        }
    }

    .pilot {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        span {
            margin: 0.5rem 0 0 1rem;
            color: #aaa;
        }

        a {
            text-decoration: none;
            color: #ddd;
            transition: all ease 300ms;

            :hover {
                opacity: 0.8;
            }
        }
    }

    .centered-image {
        width: 100%;
        text-align: center;
        margin: 2rem 0;
    }

    @media (max-width: 800px) {
        width: 90%;

        hr {
            background-color: #222;
        }

        .tags {
            p {
                background-color: #242424;
            }
        }

        .title {
            width: 90%;
        }

        .pilot {
            width: 100%;

            img {
                width: 90%;
                align-self: center;
            }

            span {
                margin: 0.75rem 0 0 2rem;
                font-size: 11.5pt;
            }
        }

        .content {
            p {
                font-size: 11.5pt;
                width: 90%;
                margin: 0 auto;
                margin-top: 1rem;
            }
        }
    }
`;
