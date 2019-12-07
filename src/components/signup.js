import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/userActions';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			validated: false,
			user: {
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				confirmPassword: ""
			},
			isSignupErr: false
		}
	}

	handleSubmit = (event) => {
		console.log(this.state)
		const form = event.currentTarget;
		event.preventDefault();
	    event.stopPropagation();
	    if (form.checkValidity() === false) {
	      this.setState({validated: true});
	    } else {
	      let user = this.props.users.find(user => (user.email === this.state.user.email));
	      if(!user) {
	      	delete this.state.user.confirmPassword;
	        this.props.addUser(this.state.user);
	      } else {
	      	this.setState({isSignupErr: true});
	      }
	      
	    }
	};

	onInputChange = (e) => {
		let user = this.state.user;
		user[e.target.name] = e.target.value;
		this.setState({user: user});
	}

	render() {
		return(
			<div>
				<p className="text-center text-danger">{this.state.isSignupErr ? 'Email already registered!!' : ''}</p>
				<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
				 <Form.Row>
				    <Form.Group as={Col}>
				      <Form.Label>First Name</Form.Label>
				      <Form.Control type="text" placeholder="Enter First Name" name="firstName" onChange={this.onInputChange} required />
				      <Form.Control.Feedback type="invalid">First Name is required</Form.Control.Feedback>
				    </Form.Group>

				    <Form.Group as={Col}>
				      <Form.Label>Last Name</Form.Label>
				      <Form.Control type="text" placeholder="Enter Last Name" name="lastName" onChange={this.onInputChange} required />
				      <Form.Control.Feedback type="invalid">Last Name is required</Form.Control.Feedback>
				    </Form.Group>
				  </Form.Row>

				  <Form.Row className="rm">
				      <Form.Label>Email</Form.Label>
				      <Form.Control type="email" placeholder="Enter Email" name="email" onChange={this.onInputChange} required />
				      <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
				  </Form.Row>
				  <br/>
				  <Form.Row>
				    <Form.Group as={Col}>
				      <Form.Label>Password</Form.Label>
				      <Form.Control type="password" placeholder="Enter Password" name="password" onChange={this.onInputChange} 
				      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" required />
				      <Form.Control.Feedback type="invalid">
				      {this.state.user.password.length === 0 ? 'Password is required' : 'Password should contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'}
				      </Form.Control.Feedback>
				    </Form.Group>

				    <Form.Group as={Col}>
				      <Form.Label>Confirm Password</Form.Label>
				      <Form.Control type="password" placeholder="Enter Confirm Password" name="confirmPassword" onChange={this.onInputChange}
				       isInvalid={this.state.user.password !== this.state.user.confirmPassword} required />
				      <Form.Control.Feedback type="invalid">{this.state.user.confirmPassword === 0 ? 'Confirm Password is required' : 'Password and Confirm Password should be same'}</Form.Control.Feedback>
				    </Form.Group>
				  </Form.Row>

				  <Button variant="primary" type="submit" disabled={((this.state.user.password.length > 0 && this.state.user.password) !== this.state.user.confirmPassword) ? true :false}>Submit</Button>
				</Form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps, actions)(Signup);