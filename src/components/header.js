import React from 'react';
import { Navbar, Nav, NavDropdown, Modal } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/userActions';
import Signup from './signup';
import Signin from './signin';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			showModal: false,
			showSignin: true
		}
	}

	componentDidMount() {
		let userId = sessionStorage.getItem('userId');
		if(userId){
			this.props.getUserDetails(userId);
			this.setState({isLoggedIn: true});
		}
	}

	goToAbout = () => {
		this.props.history.push('/about');
	}

	goToProducts = () => {
		this.props.history.push('/');
	}

	showModal = () => {
		this.setState({showModal: true});
	}

	handleClose = () => {
		this.setState({showModal: false});
	}

	showSignup = () => {
		this.setState({showSignin: false});
	}

	showSignin = () => {
		this.setState({showSignin: true});
	}

	goToProfile = () => {
		this.props.history.push('/profile');
	}

	logout = () => {
		sessionStorage.removeItem('userId');
		this.props.history.push('/');
		window.location.reload();
	}

	render() {
		return (
			<div>
				<Navbar fixed="top" expand="lg" bg="dark" variant="dark">
				  <Navbar.Brand className="pointer" onClick={this.goToProducts}>Products Inventory</Navbar.Brand>
				  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
				  <Navbar.Collapse id="responsive-navbar-nav">
				    <Nav className="ml-auto">
				      <Nav.Link className="c-wh" onClick={this.goToAbout}>About</Nav.Link>
				      {!this.state.isLoggedIn ? <Nav.Link className="c-wh" onClick={this.showModal}>Login</Nav.Link> : ''}
				      {
				      	this.state.isLoggedIn ?
					       	<NavDropdown title={this.props.users && this.props.users.length > 0 ? this.props.users[0].firstName : ''} id="collasible-nav-dropdown">
			        	    	<NavDropdown.Item onClick={this.goToProfile}>Profile</NavDropdown.Item>
			        	    	<NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
			      		    </NavDropdown> : ''
			      	  }
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>

				<Modal show={this.state.showModal} onHide={this.handleClose} size="lg" centered>
			      <Modal.Header closeButton>
			        <Modal.Title>
			          {this.state.showSignin ? 'Signin' : 'Signup'}
			        </Modal.Title>
			      </Modal.Header>
			      <Modal.Body>
			        {this.state.showSignin ? <Signin {...this.props}></Signin> : ''}
			        {!this.state.showSignin ? <Signup></Signup>: ''}
			        <br/>
			         {this.state.showSignin ? <p>Not Registered? <a href="#!" onClick={this.showSignup}>Signup Here</a></p> : '' }
			         {!this.state.showSignin ? <p>Already Registered? <a href="#!" onClick={this.showSignin}>Login Here</a></p> : '' }
			      </Modal.Body>
				</Modal>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps, actions)(withRouter(Header));