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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">CHQ MATE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <FormGroup>
            <Label for="email">Password</Label>
            <Input type="email" name="email" id="email" placeholder="User@gmail.com" />
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="*******" />
        </FormGroup>
        <Button className='purpleBut'>Submit</Button>
      </Navbar>
    </div>
  );
}

export default PreLogNav;