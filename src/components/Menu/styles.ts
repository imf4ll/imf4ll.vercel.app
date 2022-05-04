import styled from 'styled-components';

export const Container = styled.div`
`;

export const MenuDesktop = styled.nav`
    font-family: 'JetBrains Mono', monospace;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 0.5rem;
    z-index: 999;

    ul {
        display: flex;
        flex-direction: row;
        padding: 0;
    }

    ul li {
        list-style: none;
        margin: 0 2rem;
        margin-right: 0;
        color: #fff;
        cursor: pointer;
        font-size: 12pt;
        font-weight: 500;
        transition: all ease 500ms;
    }

    ul li:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }

    ul li:after {
        content: '';
        display: block;
        transform: scaleX(0);
        border-bottom: 2px solid rgb(150, 150, 150);
        padding: 3px;
        transition: all ease 500ms;
    }

    ul li:hover:after {
        transform: scaleX(1);
    }
`;

interface MenuMobileProps {
    open: boolean;
}

export const MenuMobile = styled.div<MenuMobileProps>`
    font-family: 'JetBrains Mono', monospace;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${ props => props.open ? 'rgba(20, 20, 20, 0.7)' : 'transparent' };
    width: 100vw;
    height: 35vh;

    .menuIcon {
        position: absolute;
        top: 0;
        left: 0.5rem;
    }

    .close {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    ul li {
        list-style: none;
        margin: 1rem 1rem;
        margin-right: 0;
        color: #fff;
        cursor: pointer;
        font-size: 14pt;
        font-weight: 600;
        transition: all ease 500ms;
    }
`;
