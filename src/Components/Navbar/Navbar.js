import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, MobileIcon} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>

                    <MobileIcon onClick={toggle}>
                        <FaBars></FaBars>
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
