import styled from 'styled-components';

export const Container = styled.div`
`;

export const MenuDesktop = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 0.5rem;
    margin-left: 1rem;
    z-index: 999;

    ul {
        display: flex;
        flex-direction: row;
        padding: 0;
    }

    ul li {
        list-style: none;
        margin: 0 0.5rem;
        color: #fff;
        cursor: pointer;
        font-size: 13pt;
        font-weight: 500;
        padding: 0.15rem 0.5rem;
        transition: all ease 350ms;
    }

    ul li:hover {
        color: #000;
        background-color: #fff;
        border-radius: 4px;
        transform: scale(1.1);
    }
`;

interface MenuMobileProps {
    open: boolean;
}

export const MenuMobile = styled.div<MenuMobileProps>`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${ props => props.open ? 'rgba(20, 20, 20, 0.7)' : 'transparent' };
    width: 100vw;
    height: 100vh;

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
        align-items: center;
        margin-top: 6rem;
        padding: 0;
    }

    ul li {
        list-style: none;
        margin: 1rem 1rem;
        margin-right: 0;
        color: #fff;
        cursor: pointer;
        font-size: 18pt;
        font-weight: 600;
        transition: all ease 500ms;
    }
`;
