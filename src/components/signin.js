import React from 'react';
import { Form, Button } from 'react-bootstrap';

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			validated: false,
			email: '',
			password: '',
			loginErr: false
		}
	}

	componentDidMount() {
		this.props.getAllUsers();
	}

	handleSubmit = (event) => {
		const form = event.currentTarget;
		event.preventDefault();
	    event.stopPropagation();
	    if (form.checkValidity() === false) {
	      this.setState({validated: true});
	    } else {
	    	let user = this.props.users.find(user => (user.email === this.state.email && user.password === this.state.password));
	    	if(user) {
	    		sessionStorage.setItem('userId', user.id);
	    		this.props.history.push('/');
	    		window.location.reload();
	    	} else {
	    		this.setState({loginErr: true});
	    	}
	    }
	};

	onInputChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};

	render() {
		return(
			<div>
				<p className="text-center text-danger">{this.state.loginErr ? 'Email or Password incorrect' : ''}</p>
				<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
				  <Form.Group controlId="formBasicEmail">
				    <Form.Label>Email</Form.Label>
				    <Form.Control type="email" name="email" placeholder="Enter Email" onChange={this.onInputChange} required/>
				    <Form.Control.Feedback type="invalid">{this.state.email.length === 0 ? 'Email is required' : 'Enter valid email'}</Form.Control.Feedback>
				  </Form.Group>

				  <Form.Group controlId="formBasicPassword">
				    <Form.Label>Password</Form.Label>
				    <Form.Control type="password" name="password" placeholder="Password" onChange={this.onInputChange} required/>
				    <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
				  </Form.Group>

				  <Button variant="primary" type="submit">Submit</Button>
				</Form>
			</div>
		)
	}
}

export default Signin;