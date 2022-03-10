import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
// import {Link as LinkS} from 'react-scroll';


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    padding-top: 120px;
    padding-bottom: 60px;
    width: 100%;
    height: 100%;
    background: #F0F0F0;
    align-items: start;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};

`;

export const LogoBlack = styled.img`
    max-width: 50px;
    position: fixed;
    top: 20px;
    left: 50px;
  
`

export const CloseIcon = styled(FaTimes)`
    color: #464646;
    font-size: 30px;
    -webkit-text-stroke: 6px white;

`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #fff;
    display: flex;
    height: 100%;

`
export const SidebarStatic = styled.div`
    flex: 1;
    align-items: start;
    display: flex;
    border-right: 1px solid #464646;

`
export const SidebarProjects = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const FeaturedProjectsTitle = styled.h3`
    color: #464646;

`


export const SidebarMenu = styled.ul `
    display: grid;

    grid-template-columns: fr;
    grid-template-rows: repeat(6, 30px);
    text-align: left;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 40px);
    }
`

export const SidebarLink = styled(LinkR)`
    padding-left: 50px;
    display: flex;
    aign-items: center;
    justify-content: start;
    font-size: 1.1rem;
    text-decoration: none;
    list-style: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: #464646;
    cursor: pointer;

    &:hover {
        color: #b2b2b2;
        transition: all 0.2 ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
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
        color: #0101606;
    }
`

