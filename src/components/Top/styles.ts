import styled from 'styled-components';

import Logo from '../../assets/logo.png';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-color: #000;
    position: relative;

    img:first-of-type {
        border-radius: 50%;
        margin-top: 10vh;
    }

    img {
        transition: all ease 1s;
    }

    img:not(:last-child) {
        margin-top: 0;
    }

    img:hover:not(:last-child) {
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

    .wave {
        position: absolute;
        bottom: -1px;
        left: 0;
        animation: waves infinite 4s;
        z-index: 0;
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

    @keyframes waves {
        50% {
            transform: scaleX(1.3);     
        }

        100% {
            transform: scaleX(1);
        }
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
        .logo {
            margin-top: 10rem;
            margin-bottom: 12rem;
        }

        h1 { font-size: 22pt; }
        
        h2 {
            font-size: 15pt;
            margin-top: 50px;
        }
    }

    @media (max-width: 800px) and (orientation: landscape) {
        background: #000;
        height: 180vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        gap: 10%;

        div img:first-of-type {
            margin-top: -5rem;
        }

        h2 {
            margin-top: -5rem;
        }
    }
`;

