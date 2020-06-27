import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText,
  Button
} from 'reactstrap';

import "./style.css";

const PreLogNav = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className="navWhole">
        <NavbarBrand href="/">CHQ MATE</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        <FormGroup className="emailInput">
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="User@gmail.com" />
        </FormGroup>
        <FormGroup className="passwordInput">
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="*******" />
        </FormGroup>
        <Button className='loginBut'>Login</Button>
      </Navbar>
    </div>
  );
}

export default PreLogNav;