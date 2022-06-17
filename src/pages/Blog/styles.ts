import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Mulish:wght@400;500;600;700&display=swap');

    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 5rem;
    padding-bottom: 2rem;
    width: 100%;
    height: auto;

    img {
        border-radius: 5px;
    }
`;

export const Featured = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    cursor: pointer;
    transition: all ease 300ms;

    :hover {
        opacity: 0.8;
    }

    .featured-text {
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 400px;

        h1 {
            font-size: 22pt;
            width: 100%;
            text-align: center;
        }

        p {
            width: 100%;
            text-align: left;
        }
    }

    @media (max-width: 800px) {
        flex-direction: column;
        width: 100%;
        overflow: hidden;

        img {
            width: 80%;
        }

        .featured-text {

            h1 {
                font-size: 15pt;
                width: 75%;
            }

            p {
                width: 75%;
                text-align: center;
            }
        }
    }
`;

export const Posts = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    max-width: 80%;

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
        transition: all ease 300ms;
        margin: 0 1.5rem;

        :hover {
            opacity: 0.8;
        }

        h1 {
            font-size: 14pt;
            font-weight: 600;
            width: 100%;
            text-align: center;
        }
    }

    @media (max-width: 800px) {
        margin-top: 4rem;
        width: 100%;

        section:not(:first-child) {
            margin-top: 2.5rem;
        }
    }
`;
