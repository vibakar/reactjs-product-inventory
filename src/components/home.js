import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Banner from './banner';
import AllProducts from './allProducts';
import * as actions from '../actions/productActions';

class Home extends React.Component {

	componentDidMount() {
		this.props.getAllProducts();
	}

	render() {
		return (
			<div>
				<Banner></Banner>
				<div style={{marginTop: '20px', marginLeft: '5px'}}>
					<div className="row rm">
						<div className="col-md-4">
						    <Form.Control type="text" placeholder="Search Product" />
					  	</div>
					  	<div className="col-md-4">
					  		<Link to="/add-product">
					  			<Button variant="light" style={{width: '100%', border: '1px solid #ced4da'}}>Add Product</Button>
					  		</Link>
					  	</div>
					  	<div className="col-md-4">
					  		<Card body className="customize-field">
							  <Form.Group id="formGridCheckbox">
							    <Form.Check inline type="checkbox" label="Price" />
							    <Form.Check inline type="checkbox" label="Quantity" />
							    <Form.Check inline type="checkbox" label="Description" />
							  </Form.Group>
							</Card>
					  	</div>
					</div>
				</div>
				<AllProducts productsList={this.props.products}></AllProducts>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps, actions)(Home);