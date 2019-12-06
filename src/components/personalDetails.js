import React from 'react';
import { Accordion, Card, Button, Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/userActions';

class PersonalDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  user: {},
		  disableFields: true,
		  showUpdateBtn: false,
		  validated: false
		};
	}

	componentWillMount() {
		let userId = sessionStorage.getItem('userId');
		this.props.getUserDetails(userId);
	}

	componentWillReceiveProps(newProps) {
		this.setState({user: newProps.users[0]});
	}

	onInputChange = (e) => {
		let user = this.state.user;
		user[e.target.name] = e.target.value;
		this.setState({user: user});
	}

	enableFields = () => {
		this.setState({disableFields: false, showUpdateBtn: true});
	}

	disableFields = () => {
		this.setState({disableFields: true, showUpdateBtn: false});
	}

	handleSubmit = (event) => {
		const form = event.currentTarget;
		event.preventDefault();
	    event.stopPropagation();
	    if (form.checkValidity() === false) {
	      this.setState({validated: true});
	    } else {
	      this.props.updateUser(this.state.user);
	      this.setState({disableFields: true, showUpdateBtn: false});
	    }
	}

	render() {
		return (
			<div className="row rm pt-20">
				<div className="col-md-1"></div>
				<div className="col-md-10">
					<Accordion defaultActiveKey="0">
						  <Card>
						    <Card.Header>
						      <Accordion.Toggle as={Button} variant="link" eventKey="0">
						        <span>Personal Details</span>
						      </Accordion.Toggle>
						    </Card.Header>
						    <Accordion.Collapse eventKey="0">
						      <Card.Body>
						      	<Form validated={this.state.validated} onSubmit={this.handleSubmit}>
									<Form.Row>
										<Form.Group as={Col}>
											<Form.Label>First Name</Form.Label>
											<Form.Control type="text" placeholder="Enter First Name" name="firstName" onChange={this.onInputChange}
											 defaultValue={this.state.user.firstName} disabled={this.state.disableFields} required/>
											 <Form.Control.Feedback type="invalid">First Name is required</Form.Control.Feedback>
										</Form.Group>

										<Form.Group as={Col}>
											<Form.Label>Last Name</Form.Label>
											<Form.Control type="text" placeholder="Enter Last Name" name="lastName" onChange={this.onInputChange}
											 defaultValue={this.state.user.lastName} disabled={this.state.disableFields} required/>
											 <Form.Control.Feedback type="invalid">Last Name is required</Form.Control.Feedback>
										</Form.Group>
									</Form.Row>

									<Form.Row>
										<Form.Group as={Col}>
											<Form.Label>Email</Form.Label>
											<Form.Control type="email" placeholder="Enter email"  name="email" onChange={this.onInputChange}
											 defaultValue={this.state.user.email} disabled={this.state.disableFields} required/>
										</Form.Group>

										<Form.Group as={Col}>
											<Form.Label>City</Form.Label>
											<Form.Control type="text" placeholder="Enter City" name="city" onChange={this.onInputChange}
											 defaultValue={this.state.user.city} disabled={this.state.disableFields} minLength="2"/>
											 <Form.Control.Feedback type="invalid">Enter valid city name</Form.Control.Feedback>
										</Form.Group>
									</Form.Row>

									<Form.Row>
										<Form.Group as={Col}>
											<Form.Label>Mobile</Form.Label>
											<Form.Control type="text" placeholder="Enter Mobile No" name="mobile" onChange={this.onInputChange}
											 defaultValue={this.state.user.mobile} disabled={this.state.disableFields} minLength="10" maxLength="10"/>
											 <Form.Control.Feedback type="invalid">Mobile No should have 10 digits</Form.Control.Feedback>
										</Form.Group>
										<Form.Group as={Col}></Form.Group>
									</Form.Row>
								  	{this.state.showUpdateBtn ? <Button variant="primary" type="submit">Update</Button> : '' }
									{!this.state.showUpdateBtn ? <Button variant="primary" onClick={this.enableFields}>Edit</Button> : '' }&nbsp;&nbsp;
									{this.state.showUpdateBtn ? <Button variant="secondary" onClick={this.disableFields}>Cancel</Button> : '' }
								</Form>
						      </Card.Body>
						    </Accordion.Collapse>
						  </Card>
						  <Card>
						  </Card>
					</Accordion>
				</div>
				<div className="col-md-1"></div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps, actions)(PersonalDetails);