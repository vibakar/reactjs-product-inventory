import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<Form>
			 <Form.Row>
			    <Form.Group as={Col}>
			      <Form.Label>First Name</Form.Label>
			      <Form.Control type="text" placeholder="Enter First Name" />
			    </Form.Group>

			    <Form.Group as={Col}>
			      <Form.Label>Last Name</Form.Label>
			      <Form.Control type="text" placeholder="Enter Last Name" />
			    </Form.Group>
			  </Form.Row>

			  <Form.Row className="rm">
			      <Form.Label>Email</Form.Label>
			      <Form.Control type="email" placeholder="Enter email" />
			  </Form.Row>
			  <br/>
			  <Form.Row>
			    <Form.Group as={Col}>
			      <Form.Label>Password</Form.Label>
			      <Form.Control type="text" placeholder="Enter Password" />
			    </Form.Group>

			    <Form.Group as={Col}>
			      <Form.Label>Confirm Password</Form.Label>
			      <Form.Control type="text" placeholder="Enter Confirm Password" />
			    </Form.Group>
			  </Form.Row>

			  <Button variant="primary">Submit</Button>
			</Form>
		)
	}
}

export default Signup;