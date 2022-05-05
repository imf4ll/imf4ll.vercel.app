import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(20, 20, 20);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    h1 {
        color: white;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        font-size: 30pt;
        margin: 4rem;
        margin-bottom: -5rem;
    }

    h2 {
        color: white;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 600;
        font-size: 20pt;
        margin-top: 0.5rem;
    }

    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        z-index: 99;
    }

    .about p {
        font-family: 'JetBrains Mono', monospace !important;
        font-size: 14pt;
        font-weight: 400;
        color: white;
        width: 80%;
        text-align: center;
    }

    .contacts {
        display: flex;
        flex-direction: row;
    }

    .contacts img {
        margin: 0 1rem;
        background-color: rgb(12, 12, 12);
        padding: 0.5rem;
        border-radius: 100%;
        transition: all ease 1s;
        cursor: pointer;
    }

    .contacts img:hover {
        transform: scale(1.1);
    }

    section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        width: 80%;
    }

    section p span {
        font-size: 20pt;
        font-weight: 700;
    }

    .wave {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    @media (max-width: 800px) {
        height: calc(100vh + 15rem);

        .about img {
            width: 36px;
            margin-top: 1rem;
        }

        h1 {
            margin-top: 3rem;
        }

        h2 {
            margin-top: 3rem;
        }

        section {
            flex-wrap: wrap;
            flex-direction: column;
        }

        section img {
            width: 100%;
            margin-top: 20%;
        }

        section p {
            width: 95%;
            margin: 0 auto;
            margin-top: 20%;
            font-size: 14pt;
        }
    }

    @media (max-width: 800px) and (orientation: landscape) {
        height: calc(100vh + 5rem);

        h1 {
            margin-top: 40px;
        }

        section {
            margin-top: -50px;
        }

        section img {
            display: none;
        }
    }
`;


