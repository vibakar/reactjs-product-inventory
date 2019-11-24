import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
	return (
		<Navbar fixed="top" expand="lg" bg="dark" variant="dark">
		  <Navbar.Brand href="#home">Products Inventory</Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
		    <Nav className="ml-auto">
		      <Nav.Link >About</Nav.Link>
		      <Nav.Link >Login</Nav.Link>
		       <NavDropdown title="Vibakar" id="collasible-nav-dropdown">
        	    <NavDropdown.Item>Profile</NavDropdown.Item>
        	    <NavDropdown.Item>Logout</NavDropdown.Item>
      		   </NavDropdown>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	);
}

export default Header;