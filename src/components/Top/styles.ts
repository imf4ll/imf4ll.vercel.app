import styled from 'styled-components';

import Logo from '../../assets/logo.png';
import Background from '../../assets/background.jpg';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    background: url(${ Background });
    background-size: cover;
    background-repeat: no-repeat;

    img:first-of-type {
        border-radius: 50%;
        margin-top: 10vh;
    }

    img {
        transition: all ease 1s;
    }

    img:hover {
        transform: scale(1.1);
    }

    .scroll {
        cursor: pointer;
        animation: breath 1.5s infinite;
    }

    .scroll:hover {
        background-color: rgb(40, 40, 40, 0.7);
        border-radius: 100%;
    }

    .logo {
        width: 15vw;
        height: 15vw;
        margin: 0 auto;
        margin-top: 5rem;
        margin-bottom: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all ease 1s;
    }

    .logo:after {
        content: '';
        position: absolute;
        top: 15%;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all ease 500ms;
        animation: 5s infinite ease luminous;
    }

    .logo:hover:after {
        background: url(${ Logo });
        filter: blur(15px);
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
    }

    h1, h2 {
        font-family: 'JetBrains Mono', monospace;
        color: white;
    }

    h1 {
        font-size: 24pt;
        font-weight: 700;
    }
    
    h2 {
        font-size: 14pt;
        font-weight: 400;
        margin: 25px 0 -10px 0;
    }

    @keyframes luminous {
        50% {
            transform: scale(1);    
        }

        75% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }

    @media (max-width: 800px) {
        background-position: top;

        .logo {
            margin-top: 10rem;
            margin-bottom: 12rem;
        }

        h1 { font-size: 22pt; }
        
        h2 {
            font-size: 15pt;
            margin-top: 50px;
        }

        img:not(:first-of-type) {
            width: 45px;
        }
    }

    @media (max-width: 800px) and (orientation: landscape) {
        background: #000;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        gap: 10%;

        div img:first-of-type {
            margin-top: 0;
        }
    }
`;

