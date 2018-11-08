import React from "react";
import { Navbar, Nav, NavItem, ButtonToolbar, Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">eventradar</a>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav pullRight>
        <NavItem>Browse Event</NavItem>
        <NavItem>Organize</NavItem>
        <NavItem>Sign In</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>
          <ButtonToolbar>
            <Button bsSize="small">Create Event</Button>
          </ButtonToolbar>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
