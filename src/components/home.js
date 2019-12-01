import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Banner from './banner';
import AllProducts from './allProducts';
import * as actions from '../actions/productActions';

class Home extends React.Component {

	constructor() {
		super();
		let userId = sessionStorage.getItem('userId');
		this.state = {
			products: [],
			isLoggedIn: userId ? true : false,
			displayPrice: true,
			displayQuantity: false,
			displayDesc: true
		};
	}

	componentDidMount() {
		this.props.getAllProducts();
	}

	componentWillReceiveProps(newProps) {
		this.setState({products: newProps.products});
	}

	triggerDeleteProduct = (id, index) => {
		this.props.deleteProduct(id, index);
	}

	onSearch = (e) => {
		let filteredProducts = this.props.products.filter(product => {
			return product.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0;
		});
		this.setState({products: filteredProducts});
	}

	handleFieldChange = (e) => {
		this.setState({[e.target.name]: e.target.checked});
	}

	render() {
		return (
			<div>
				<Banner></Banner>
				<div style={{marginTop: '20px', marginLeft: '5px'}}>
					<div className="row rm">
						<div className={this.state.isLoggedIn ? "col-md-4" : "col-md-6"}>
						    <Form.Control type="text" placeholder="Search Product" onChange={this.onSearch}/>
					  	</div>
					  	{
					  		this.state.isLoggedIn ?
					  		<div className="col-md-4">
						  		<Link to="/add-product">
						  			<Button variant="light" style={{width: '100%', border: '1px solid #ced4da'}}>Add Product</Button>
						  		</Link>
						  	</div>: ''
						 }
					  	<div className={this.state.isLoggedIn ? "col-md-4" : "col-md-6"}>
					  		<Card body className="customize-field">
							  <Form.Group id="formGridCheckbox">
							    <Form.Check inline type="checkbox" name="displayPrice" onChange={this.handleFieldChange} label="Price" checked={this.state.displayPrice}/>
							    <Form.Check inline type="checkbox" name="displayQuantity" onChange={this.handleFieldChange} label="Quantity" checked={this.state.displayQuantity}/>
							    <Form.Check inline type="checkbox" name="displayDesc" onChange={this.handleFieldChange} label="Description" checked={this.state.displayDesc}/>
							  </Form.Group>
							</Card>
					  	</div>
					</div>
				</div>
				<AllProducts {...this.state} triggerDeleteProduct={this.triggerDeleteProduct}></AllProducts>
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