import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './img/logo.png'
import './Header.css'


const Header = () => {
    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
  <img src={logo} height="80" alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto nav">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#blogs">Blogs</Nav.Link>
    </Nav>
    <Nav className='nav'>
      <Nav.Link href="#login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    );
};

export default Header;