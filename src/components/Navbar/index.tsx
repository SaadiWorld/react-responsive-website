import React from 'react';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from './NavbarElements';

import { FaBars } from 'react-icons/fa';

interface NavbarProps {
  toggle: () => void;
}

const Navbar = ({ toggle }: NavbarProps) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">paisa</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="signup">Sign Up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return <div>Nav</div>;
// };

// export default Navbar;
