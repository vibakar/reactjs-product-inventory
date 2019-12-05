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
			}
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
	      	console.log("email already registered");
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
			      <Form.Control type="text" placeholder="Enter Password" name="password" onChange={this.onInputChange} required />
			      <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
			    </Form.Group>

			    <Form.Group as={Col}>
			      <Form.Label>Confirm Password</Form.Label>
			      <Form.Control type="text" placeholder="Enter Confirm Password" name="confirmPassword" onChange={this.onInputChange} required />
			      <Form.Control.Feedback type="invalid">Confirm Password is required</Form.Control.Feedback>
			    </Form.Group>
			  </Form.Row>

			  <Button variant="primary" type="submit">Submit</Button>
			</Form>
		)
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps, actions)(Signup);