import React from 'react';
import Banner from './banner';
import AllProducts from './allProducts';
import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import productsList from '../db';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productsList: []
		};
	}

	componentDidMount() {
		this.setState({productsList: productsList.products});
	}

	render() {
		return (
			<div>
				<Banner></Banner>
				<div style={{marginTop: '20px', marginLeft: '5px'}}>
					<Form>
						<Row className="customize">
							<Col>
							    <Form.Control className="search-field" type="text" placeholder="Search Product" />
							    <Button className="btn-add-product" variant="light">Add Product</Button>
						  	</Col>
						  	<Col>
							  <Form.Group>
							    <Form.Control as="select">
							      <option>All Categories</option>
							      <option>Electronics</option>
							      <option>Furnitures</option>
							      <option>Fashion</option>
							      <option>Books</option>
							    </Form.Control>
							   </Form.Group>
						  	</Col>
						  	<Col>
						  		<Card body className="customize-field">
								  <Form.Group id="formGridCheckbox">
								    <Form.Check inline type="checkbox" label="Image" />
								    <Form.Check inline type="checkbox" label="Description" />
								    <Form.Check inline type="checkbox" label="Price" />
								    <Form.Check inline type="checkbox" label="Quantity" />
								  </Form.Group>
								</Card>
						  	</Col>
						</Row>
					</Form>
				</div>
				<AllProducts productsList={this.state.productsList}></AllProducts>
			</div>
		);
	}
}

export default Home;