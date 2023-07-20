import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;

    .top {
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;

        nav {
            display: flex;
            justify-content: center;
        }

        nav ul {
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }
    
        nav ul li {
            list-style: none;
        }

        nav ul li a {
            text-decoration: none;
            color: white;
            font-weight: 500;
            font-size: 12pt;
            transition: all ease 300ms;

            :hover {
                opacity: 0.7;    
            }
        }

        transform: translateY(-100%);
        animation: forwards ease 500ms topload;
    }

    @keyframes topload {
        100% {
            transform: translateY(0);
        }
    }

    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url(/public/background.gif);
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;

        .profile {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            width: 100%;
            height: 90vh;
            transform: translateY(-100%) scale(0.3);
            animation: forwards ease 1.5s onload;

            img {
                border-radius: 100%;
                border: 4px solid #AAA;
                transition: all ease 200ms;

                :hover {
                    transform: scale(1.1);
                }
            }

            h3 {
                color: white;
                font-size: 20pt;
            }
        }

        @keyframes onload {
            80% {
                transform: translateY(0);
            }

            100% {
                transform: scale(1);
            }
        }

        .arrow {
            animation: linear infinite 1s arrow;
        }

        @keyframes arrow {
            50% {
                transform: translateY(-15%);
            }

            100% {
                transform: translateY(0);
            }
        }
    }

    .aboutme {
        text-align: center;
        display: flex;
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        gap: 3rem;

        h1, p {
            color: white;
        }

        h1 {
            align-self: flex-start;
            margin-top: 8rem;
        }

        p {
            width: 60%;
            font-weight: 500;
        }
    }

    .projects {
        text-align: center;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;

        h1 {
            align-self: flex-start;
            color: white;
            margin-left: 10rem;
            margin-top: 4rem;
        }

        .content {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            flex-wrap: wrap;
            gap: 3rem;
            justify-content: center;

            h3, p {
                color: white;
            }

            h3 {
                font-size: 16pt;
                font-weight: 600;
            }

            p {
                font-weight: 500;
            }

            a {
                text-decoration: none;
            }

            .project {
                width: 22.5rem;
                height: 22.5rem;
                background: #121212;
                border-radius: 10px;
                box-shadow: 5px 10px 0 0 #090909;
                transition: all ease 300ms;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1.5rem;

                img {
                    border-radius: 10px;
                    cursor: zoom-in;
                    transition: all ease 300ms;
                }

                :hover {
                    transform: scale(1.1);
                    box-shadow: 10px 5px 10px 0 #090909;
                }
            }
        }
    }
`;
