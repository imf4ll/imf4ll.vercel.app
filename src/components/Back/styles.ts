import styled from 'styled-components';

export const Container = styled.div`
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
