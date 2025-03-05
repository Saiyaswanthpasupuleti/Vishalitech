import React from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" fixed="top">
      <Container>
        {/* Brand (aligned to left) */}
        <Navbar.Brand href="#home">Gourmet Bites</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav items aligned to right */}
          <Nav className="ms-auto d-flex align-items-center">
            <Link to="hero" smooth={true} duration={500} className="nav-link">
              Home
            </Link>
            <Link to="menu" smooth={true} duration={500} className="nav-link">
              Menu
            </Link>
            <Link to="about" smooth={true} duration={500} className="nav-link">
              About Us
            </Link>
            <Link to="contact" smooth={true} duration={500} className="nav-link">
              Contact
            </Link>
            <Button variant="outline-secondary" onClick={toggleTheme} className="ms-3">
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
