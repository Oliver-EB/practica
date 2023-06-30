import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">Mi Aplicación</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/" exact className="nav-link">
          Inicio
        </Nav.Link>
        <Nav.Link as={NavLink} to="/TypeScript" className="nav-link">
          Everydaytypes
        </Nav.Link>
        <Nav.Link as={NavLink} to="/Contador" className="nav-link">
          Servicios
        </Nav.Link>
        <Nav.Link as={NavLink} to="/contacto" className="nav-link">
          Contacto
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Menu;
