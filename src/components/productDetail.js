import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/productActions';

class ProductDetail extends React.Component {
	componentDidMount() {
		let productId = this.props.match.params.id;
		this.props.getSingleProduct(productId);
	}

	render() {
		return (
			<div>
				<div className="row rm" style={{ marginTop: '5%' }}>
					<div className="col-sm-12 col-md-12">
						<Card>
						  <Card.Body style={{textAlign: 'center'}}>
						  	<strong>{this.props.product[0].name}</strong>
						  </Card.Body>
						</Card>
					</div>
				</div>
				<div className="row rm">
					<div className="col-sm-6 col-md-4">
						<Card style={{ width: '19rem', marginTop: '5%' }}>
						  <Card.Body>
						    <Card.Img variant="top" src={this.props.product[0].image} />
						  </Card.Body>
						</Card>
					</div>
					<div className="col-sm-6 col-md-6">
						<ListGroup variant="flush" style={{marginTop: '5%'}}>
						  <ListGroup.Item><strong>Manufacturer:</strong> {this.props.product[0].manufacturer}</ListGroup.Item>
						  <ListGroup.Item><strong>Quantity:</strong> {this.props.product[0].quantity}</ListGroup.Item>
						  <ListGroup.Item><strong>Price:</strong> &#8377;{this.props.product[0].price}</ListGroup.Item>
						  <ListGroup.Item><strong>Description:</strong> {this.props.product[0].description}</ListGroup.Item>
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
		product: state.products
	}
}

export default connect(mapStateToProps, actions)(ProductDetail);