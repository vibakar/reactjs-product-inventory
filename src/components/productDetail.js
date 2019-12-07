import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/productActions';
import { ruppeeFormat, isAuthenticated } from '../helper';

class ProductDetail extends React.Component {
	constructor(props) {
		super(props);
		this.authenticate();
	}

	componentDidMount() {
		let productId = this.props.match.params.id;
		this.props.getSingleProduct(productId);
	}

	authenticate = () => {
		if(!isAuthenticated()) {
			alert("Please login to view product details!");
			this.props.history.push('/');
		} else {
			this.props.getUserDetails(sessionStorage.getItem("userId"));
			setTimeout(() => {
				this.updateViews();
			}, 1500);
		}
	}

	updateViews = () => {
		let productId = this.props.match.params.id;
		let user = this.props.users[0];
		if(user.views && user.views[productId])
	        user.views[productId] = user.views[productId] + 1;
	    else{
	    	user.views = {};
	        user.views[productId] = 1;
	    }
	    this.props.updateUser(user);
	}

	render() {
		return (
			<div>
				<div className="row rm" style={{ marginTop: '5%' }}>
					<div className="col-sm-12 col-md-12">
						<Card>
						  <Card.Body style={{textAlign: 'center'}}>
						  	<strong>{this.props.product.length > 0 ? this.props.product[0].name : ''}</strong>
						  </Card.Body>
						</Card>
					</div>
				</div>
				<div className="row rm">
					<div className="col-sm-6 col-md-4">
						<Card style={{ width: '19rem', marginTop: '5%' }}>
						  <Card.Body>
						    {this.props.product.length > 0 ? <Card.Img variant="top" src={this.props.product[0].image} /> : '' }
						  </Card.Body>
						</Card>
					</div>
					<div className="col-sm-6 col-md-6">
						<ListGroup variant="flush" style={{marginTop: '5%'}}>
						  <ListGroup.Item><strong>Manufacturer:</strong> {this.props.product.length > 0 ? this.props.product[0].manufacturer : ''}</ListGroup.Item>
						  <ListGroup.Item><strong>Quantity:</strong> {this.props.product.length > 0 ? this.props.product[0].quantity : ''}</ListGroup.Item>
						  <ListGroup.Item><strong>Price:</strong> &#8377;{this.props.product.length > 0 ? ruppeeFormat(this.props.product[0].price) : ''}</ListGroup.Item>
						  <ListGroup.Item><strong>Description:</strong> {this.props.product.length > 0 ? this.props.product[0].description : ''}</ListGroup.Item>
						  <ListGroup.Item><Link to="/"><Button variant="secondary">Back</Button></Link></ListGroup.Item>
						  <ListGroup.Item style={{border: 'none'}}></ListGroup.Item>
						</ListGroup>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		product: state.products,
		users: state.users
	}
}

export default connect(mapStateToProps, actions)(withRouter(ProductDetail));