import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import './style.css';
import LoginButton from '../LoginButton'
import LogoutButton from '../LogoutButton';
import Profile from '../Profile';

const PostLogNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/main">CHQ MATE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <LoginButton />
            </NavItem>
            <NavItem>
              <LogoutButton />
            </NavItem>
            <NavItem>
              <NavLink href="/edit-profile" >Edit Profile</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default PostLogNav;