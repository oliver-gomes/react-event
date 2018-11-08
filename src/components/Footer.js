import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home"> &copy; 2018 Copyright</a>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav pullRight>
        <NavItem>
          <i class="fab fa-instagram" />
        </NavItem>
        <NavItem>
          <i class="fab fa-twitter" />
        </NavItem>
        <NavItem>
          <i class="fab fa-facebook-f" />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
