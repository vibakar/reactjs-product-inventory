import React from 'react';
import { Form, Button, Card, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/productActions';
import { isAuthenticated } from '../helper';
import { Prompt } from "react-router-dom";

class AddProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: {
				name: '',
				manufacturer: '',
				quantity: '',
				price: '',
				image: '',
				description: ''
			},
			validated: false,
			isEditProduct: false,
			isUnsaved: false
		}
		this.authenticate();
	}

	componentDidMount() {
		let productId = this.props.match.params.id;
		if(productId) {
	      this.setState({isEditProduct: true});
	      this.props.getSingleProduct(productId);
		}
	}


	authenticate = () => {
		if(!isAuthenticated()) {
			alert("Please login to add or edit product!");
			this.props.history.push('/');
		}
	}

	handleSubmit = (event) => {
		const form = event.currentTarget;
		event.preventDefault();
	    event.stopPropagation();
	    if (form.checkValidity() === false) {
	      this.setState({validated: true});
	    } else {
	    	if(this.state.isEditProduct) {
	    		this.props.editProduct(this.state.product, this.props.history);
	    	} else {
	      		this.props.addProduct(this.state.product, this.props.history);
	    	}
	    }
	};

	onInputChange = (event) => {
		let product = this.state.product;
		product[event.target.name] = event.target.value;

		let keys = Object.keys(product);
		let isAllEmpty = keys.every(k => product[k] === '');		
		if(isAllEmpty)
			this.setState({product: product, isUnsaved: false});
		else {
			let isAllFilled = keys.every(k => product[k] !== '');
			if(isAllFilled)
				this.setState({product: product, isUnsaved: false});
			else
				this.setState({product: product, isUnsaved: true});
		}
	}

	componentWillReceiveProps(newProps) {
		let product = this.state.product;
		product.id = newProps.products[0].id;
		product.name = newProps.products[0].name;
		product.manufacturer = newProps.products[0].manufacturer;
		product.quantity = newProps.products[0].quantity;
		product.price = newProps.products[0].price;
		product.image = newProps.products[0].image;
		product.description = newProps.products[0].description;
		this.setState({product: product});
	}

	cancel = () => {
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
			  {!this.state.isEditProduct ? 
			  <Prompt
			   when={this.state.isUnsaved}
               message={location => 'There are some unsaved changes, are you sure to leave this page?'}
              /> : '' }
			  <div className="add-prod-title">
			  	<strong>{this.state.isEditProduct ? 'Edit Product' : 'Add Product'}</strong>
			  </div>
			  <Card className="add-prod-form" body>
				<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
			      <Form.Row>  
			        <Form.Group as={Col} controlId="validationCustom01">
			          <Form.Label>Product Name</Form.Label>
			          <Form.Control
			            required
			            type="text"
			            name="name"
			            placeholder="Product Name"
			            defaultValue={(this.state.isEditProduct && this.props.products.length > 0) ? this.props.products[0].name : ''}
			            onChange={this.onInputChange}
			          />
			          <Form.Control.Feedback type="invalid">Product Name is required</Form.Control.Feedback>
			        </Form.Group>

			        <Form.Group as={Col} controlId="validationCustom02">
			          <Form.Label>Manufacturer</Form.Label>
			          <Form.Control
			            type="text"
			            name="manufacturer"
			            placeholder="Manufacturer"
			            defaultValue={(this.state.isEditProduct && this.props.products.length > 0) ? this.props.products[0].manufacturer : ''}
			            onChange={this.onInputChange}
			            required
			          />
			          <Form.Control.Feedback type="invalid">Manufacturer is required</Form.Control.Feedback>
			        </Form.Group>
			       </Form.Row>

			        <Form.Row>
				        <Form.Group as={Col} controlId="validationCustom04">
				          <Form.Label>Quantity</Form.Label>
				            <Form.Control
				              type="number"
				              name="quantity"
				              placeholder="Quantity"
				              onChange={this.onInputChange}
				              defaultValue={(this.state.isEditProduct && this.props.products.length > 0) ? this.props.products[0].quantity : ''}
				              required
				            />
				            <Form.Control.Feedback type="invalid">
				              Quantity is required
				            </Form.Control.Feedback>
				        </Form.Group>

				        <Form.Group as={Col} controlId="validationCustom05">
				          <Form.Label>Price</Form.Label>
				            <Form.Control
				              type="number"
				              name="price"
				              placeholder="Price"
				              defaultValue={(this.state.isEditProduct && this.props.products.length > 0) ? this.props.products[0].price : ''}
				              onChange={this.onInputChange}
				              required
				            />
				            <Form.Control.Feedback type="invalid">
				              Price is required
				            </Form.Control.Feedback>
				        </Form.Group>
			        </Form.Row>

			        <Form.Group controlId="validationCustom05">
			          <Form.Label>Image URL</Form.Label>
			            <Form.Control
			              type="text"
			              name="image"
			              placeholder="Image URL"
			              defaultValue={(this.state.isEditProduct && this.props.products.length > 0) ? this.props.products[0].image : ''}
			              onChange={this.onInputChange}
			              required
			            />
			            <Form.Control.Feedback type="invalid">
			              Image URL is required
			            </Form.Control.Feedback>
			        </Form.Group>

			        <Form.Group controlId="validationCustom06">
			          <Form.Label>Description</Form.Label>
			            <Form.Control
			              as="textarea"
			              name="description"
			              rows="3"
			              cols="40"
			              placeholder="Description"
			              defaultValue={(this.state.isEditProduct && this.props.products.length > 0) ? this.props.products[0].description : ''}
			              onChange={this.onInputChange}
			              required
			            />
			            <Form.Control.Feedback type="invalid">
			              Description is required
			            </Form.Control.Feedback>
			        </Form.Group>
			        <Button variant="info" onClick={this.cancel}>Cancel</Button> &nbsp;
			      	<Button type="submit">{this.state.isEditProduct ? 'Update' : 'Submit'}</Button>
			    </Form>
			  </Card>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps, actions)(withRouter(AddProduct));