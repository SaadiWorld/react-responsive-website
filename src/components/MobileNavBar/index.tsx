import React from 'react';
import {
  CloseIcon,
  Icon,
  MobileBtnWrap,
  MobileNavbarContainer,
  MobileNavbarLink,
  MobileNavbarMenu,
  MobileNavbarRoute,
  MobileNavbarWrapper,
} from './MobileNavbarElements';

interface MobileNavbarProps {
  isOpen: boolean;
  toggle: () => void;
}

const MobileNavbar = ({ isOpen, toggle }: MobileNavbarProps) => {
  return (
    <>
      <MobileNavbarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <MobileNavbarWrapper>
          <MobileNavbarMenu>
            <MobileNavbarLink to="about" onClick={toggle}>
              About
            </MobileNavbarLink>
            <MobileNavbarLink to="discover" onClick={toggle}>
              Discover
            </MobileNavbarLink>
            <MobileNavbarLink to="services" onClick={toggle}>
              Services
            </MobileNavbarLink>
            <MobileNavbarLink to="signup" onClick={toggle}>
              Sign Up
            </MobileNavbarLink>
          </MobileNavbarMenu>
          <MobileBtnWrap>
            <MobileNavbarRoute to="/signin">Sign In</MobileNavbarRoute>
          </MobileBtnWrap>
        </MobileNavbarWrapper>
      </MobileNavbarContainer>
    </>
  );
};

export default MobileNavbar;
