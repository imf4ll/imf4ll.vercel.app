import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

    #wave-top, #wave-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }

    #wave-bottom { bottom: -100%; }

    @media (max-width: 800px) {
        #wave-bottom {
            bottom: -175%;
        }
    }

    @media (max-width: 800px) and (orientation: landscape) {
        #wave-top, #wave-bottom {
            opacity: 0;
        }
    }
`;

export const Top = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    text-align: center;
    background-color: #000000;

    img:first-of-type {
        border-radius: 50%;
        margin-top: 10vh; 
    }

    img:first-child {
        border: 3px solid #6544DB;
        padding: 8px;
        transition: transform ease 1s;
    }

    img:first-child:hover {
        transform: scale(1.1);
    }

    img:not(:first-child) {
        margin: 10px;
        transition: transform 0.5s;
        cursor: pointer;
        animation: infinite 4s breath;
    }

    img:not(:first-child):hover {
        transform: scale(1.2);
    }

    h1, h2 {
        font-family: 'Open Sans', sans-serif;
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

    @keyframes breath {
        50% {
            margin-top: 0;
        }

        100% {
            margin-top: 10px;
        }
    }

    @media (max-width: 800px) {
        background: #000;

        h1 { font-size: 20pt; }
        
        h2 {
            font-size: 16pt;
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

export const About = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #511ed4;
    text-align: center;

    h1 {
        color: white;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 30pt;
    }

    section {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80%;
    }

    section img {
        animation: infinite 5s scale;
    }

    section p {
        font-family: 'Open Sans', sans-serif !important;
        font-size: 14pt;
        font-weight: 400;
        color: white;
        width: 50%;
        text-align: center;
    }

    section p span {
        font-size: 20pt;
        font-weight: 700;
    }

    @keyframes scale {
        50% {
            transform: scale(1.05);
        }

        100% {
            transform: scale(1);
        }
    }

    @media (max-width: 800px) {
        height: 175%;

        h1 {
            margin-top: 15%;
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
            width: 80%;
            margin: 0 auto;
            margin-top: 20%;
            font-size: 16pt;
        }
    }

    @media (max-width: 800px) and (orientation: landscape) {
        height: 175%;

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

export const Projects = styled.div`
    position: absolute;
    top: 200%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #000;
    color: white;
    text-align: center;

    h1 {
        color: white;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 30pt;
    }
    
    #projects {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    section {
        width: 350px;
        height: 400px;
        border-radius: 8px;
        margin: 20px;
        margin-top: -10px;
    }

    section h2 {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 18pt;
        padding-top: 5%;
    }
    
    section p {
        font-family: 'Open Sans', sans-serif;
        font-size: 15pt;
        width: 90%;
        margin: auto;
        margin-top: 10px;
    }

    section img {
        transition: all ease-in-out 0.5s;
        border-radius: 8px;
    }

    section img:hover {
        transform: scale(1.05);
        cursor: pointer;
    }

    @media (max-width: 800px) {
        top: 275%;
        height: 180%;

        h1 {
            margin-top: 15%;
        }

        #projects {
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
        top: 250%;
        height: 400%;

        h1 {
            margin-top: 40px;
        }
    }
`;
