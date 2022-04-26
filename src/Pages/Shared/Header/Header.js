import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './img/logo.png'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
          <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/home">
       <img className='log'  src={logo} height={50} alt="" />
  </Navbar.Brand>
  
  <div className='container mx-5'>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/about">About</NavLink>
     <NavLink to="/blogs">Blogs</NavLink>
    </Nav>
    <Nav>
    <NavLink className="text-decoration-none classLogin" to="login" activeClassName="active">Login</NavLink>
    </Nav>
  </Navbar.Collapse>
  </div>
  
</Navbar>
      </>
    );
};

export default Header;