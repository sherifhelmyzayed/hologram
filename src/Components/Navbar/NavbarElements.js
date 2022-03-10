import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';


export const Nav = styled.nav`
    background: rgba(76, 175, 80, 0);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`;


export const NavLogo = styled(LinkR)`

color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;

export const Logo = styled.img`
    margin: 70px 0 0 0;
    max-width: 150px;

`

export const MobileIcon = styled.div`
display: block;
position: absolute;
top: 2rem;
right: 2rem;
transfrom: translate(-100%, 60%);
font-size: 1.8rem;
cursor: pointer;
color: #fff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 2rem;
        right: 2rem;
        transfrom: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center; 
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li `
    height: 80px;

`;


export const NavBtn = styled.nav`
    display: fex;
    align-items: center;

    @media screen and (max-width:769px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space:n no-wrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
