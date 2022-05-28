import styled from 'styled-components';

interface TechProps {
    border: string;
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;

    h1:first-child {
        color: white;
        font-weight: 700;
        font-size: 30pt;
        margin-top: 4rem;
        margin-bottom: 0;
    }

    div:first-of-type {
        flex: 1;
        display: flex;
        align-items: center;
        transition: all ease 1.2s;
        z-index: 999;
    }
    
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgb(20, 20, 20);
        width: 280px;
        height: 300px;
        margin: 0 15px;
        transition: transform 500ms ease;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    section:hover {
        transform: translateY(-5%);

        img {
            animation: breath 4s infinite ease;
        }
    }

    .buttons {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 98vw;
        top: 44%;
    }

    .buttons button {
        background: transparent;
        outline: none;
        border: none;
        z-index: 999;
    }

    .buttons button:not(:first-child) {
        right: 50%;
    }

    .buttons img {
        transition: all ease 350ms;
        border-radius: 100%;
        padding: 5px;
    }

    .buttons img:hover {
        background-color: rgba(40, 40, 40, 0.7);
    }

    @keyframes breath {
        50% {
            transform: translateY(-20%);
        }

        100% {
            transform: translate(0);
        }
    }

    section img {
        width: 60px;
    }

    section p {
        width: 80%;
        color: rgb(160, 160, 160);
    }

    @media (max-width: 800px) {
        height: 100vh;

        .buttons {
            top: 50%;
        }
    }

    @media (max-width: 800px) and (orientation: landscape) {
        height: calc(100vh + 15rem);

    }
`;

export const Tech = styled.section<TechProps>`
    :hover:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border: 2px solid ${ props => props.border };
    }
`;
