import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
		let userId = sessionStorage.getItem('userId');
		this.state = {
			isLoggedIn: userId ? true : false
		}
	}

	goToAbout = () => {
		this.props.history.push('/about');
	}

	goToProducts = () => {
		this.props.history.push('/');
	}

	render() {
		return (
			<Navbar fixed="top" expand="lg" bg="dark" variant="dark">
			  <Navbar.Brand className="pointer" onClick={this.goToProducts}>Products Inventory</Navbar.Brand>
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav">
			    <Nav className="ml-auto">
			      <Nav.Link className="c-wh" onClick={this.goToAbout}>About</Nav.Link>
			      {!this.state.isLoggedIn ? <Nav.Link className="c-wh">Login</Nav.Link> : ''}
			      {this.state.isLoggedIn ?
			       <NavDropdown title="Vibakar" id="collasible-nav-dropdown">
	        	    <NavDropdown.Item>Profile</NavDropdown.Item>
	        	    <NavDropdown.Item>Logout</NavDropdown.Item>
	      		   </NavDropdown> : '' }
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		);
	}
}

export default withRouter(Header);