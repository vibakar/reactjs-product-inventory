import React from 'react';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../helper';
import PersonalDetails from './personalDetails';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.authenticate();
	}

	authenticate = () => {
		if(!isAuthenticated()) {
			alert("Please login to view product details!");
			this.props.history.push('/');
		}
	}

	render() {
		return (
			<div>
				<PersonalDetails></PersonalDetails>
			</div>
		)
	}
}

export default withRouter(Profile);