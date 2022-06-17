import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

    font-family: 'JetBrains Mono', monospace;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    align-items: center;
    overflow: hidden;
`;

export const About = styled.div`
    font-family: 'JetBrains Mono', monospace;
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
        font-weight: 700;
        font-size: 30pt;
        margin: 4rem;
        margin-bottom: -5rem;
    }

    h2 {
        color: white;
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

    section p a {
        text-decoration: none;
        color: #666;
        transition: all ease 500ms;
    }

    section p a:hover {
        opacity: 0.7;
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
        height: calc(100vh + 10rem);

        h1 {
            margin-top: 0;
        }

        section {
            margin-top: 0;
        }

        .programmer {
            display: none;
        }
    }
`;

import Logo from '../../assets/logo.png';

export const Top = styled.div`
    font-family: 'JetBrains Mono', monospace;
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
        }´

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

export const Projects = styled.div`
    font-family: 'JetBrains Mono', monospace;
    width: 100vw;
    height: auto;
    background: rgb(20, 20, 20);
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
        color: white;
        font-weight: 700;
        font-size: 30pt;
        margin: 4rem;
    }
    
    .projects {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 45%;
    }

    .text span {
        width: 85%;
        display: none;
    }

    .text :first-child {
        font-weight: 800;
        font-size: 18pt;
        margin-top: -2rem;
        margin-bottom: 2rem;
    }

    section {
        margin: 20px;
    }

    section:hover {
        cursor: pointer;
        transform: scale(1.05);

        img {
            filter: blur(5px);
        }

        .text span {
            display: block;
        }
    }

    section h2 {
        font-weight: 600;
        font-size: 18pt;
        padding-top: 5%;
    }
    
    section p {
        font-size: 15pt;
        width: 90%;
        margin: auto;
        margin-top: 10px;
    }

    section img {
        transition: all ease-in-out 0.5s;
        border-radius: 8px;
    }

    .top {
        position: absolute;
        bottom: 0.5rem;
        right: 1rem;
        cursor: pointer;
        animation: breath 1.5s infinite;
    }

    .top:hover {
        background-color: rgb(40, 40, 40);
        border-radius: 100%;
    }

    @media (max-width: 800px) {
        h1 {
            margin-top: 15%;
        }

        .projects {
            flex-wrap: wrap;
        }

        section img {
            width: 300px;
        }

        section:last-child {
            padding-bottom: 50%;
        }

        section:not(:first-of-type) {
            margin: 15%;
        }
    }

    @media (max-width: 800px) and (orientation: landscape) {
        h1 {
            margin-top: 40px;
        }
    }
`;

interface TechProps {
    border: string;
}

export const Technologies = styled.div`
    font-family: 'JetBrains Mono', monospace;
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
