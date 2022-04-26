import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './img/logo.png'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
          <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
       <img className='log'  src={logo} height={50} alt="" />
  </Navbar.Brand>
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto nav">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
    </Nav>
    <Nav className='nav'>
    <Nav.Link as={Link} to="login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    );
};

export default Header;