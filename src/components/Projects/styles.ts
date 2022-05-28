import styled from 'styled-components';

export const Container = styled.div`
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
