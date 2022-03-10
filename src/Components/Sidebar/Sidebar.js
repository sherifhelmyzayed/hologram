import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarProjects, FeaturedProjectsTitle, SidebarStatic, LogoBlack} from './SidebarEements';
import LogoBlackimg from '../../images/Render114.jpg'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <LogoBlack src = {LogoBlackimg}/>
            <SidebarWrapper>
                <SidebarStatic>
                    <SidebarMenu>
                        {/* <SidebarLink to = "/design" onClick={toggle}>
                            Design
                        </SidebarLink>
                        <SidebarLink to = "/" onClick={toggle}>
                            VR Walkthrough
                        </SidebarLink>
                        <SidebarLink to = "/" onClick={toggle}>
                            Front-end development
                        </SidebarLink>
                        <SidebarLink to = "/projects" onClick={toggle}>
                            All Projects
                        </SidebarLink>
                        <SidebarLink to = "/" onClick={toggle}>
                            About
                        </SidebarLink>
                        <SidebarLink to = "/" onClick={toggle}>
                            Contact
                        </SidebarLink> */}
                    </SidebarMenu>
                </SidebarStatic>
                <SidebarProjects>
                    <FeaturedProjectsTitle>
                        Featured projects
                    </FeaturedProjectsTitle>
                </SidebarProjects>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar