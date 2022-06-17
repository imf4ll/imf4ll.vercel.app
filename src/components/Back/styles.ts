import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    font-family: "Inter", sans-serif;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    transition: all ease 300ms;
    font-weight: 500;
    cursor: pointer;
    z-index: 999;

    :hover {
        opacity: 0.85;
    }
`;
