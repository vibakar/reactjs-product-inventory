import React from 'react';
import Banner from './banner';
import Product from './product';
import { Form, Row, Col, Card } from 'react-bootstrap';

class AllProducts extends React.Component {

	render() {
		return (
			<div>
				<Banner></Banner>
				<div style={{marginTop: '20px', marginLeft: '5px'}}>
					<Form>
						<Row className="customize">
							<Col>
							  <Form.Group>
							    <Form.Control type="text" placeholder="Search Products" />
							  </Form.Group>
						  	</Col>
						  	<Col>
							  <Form.Group>
							    <Form.Control as="select">
							      <option>All</option>
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
								  	<Form.Label>Customize: &nbsp;&nbsp;</Form.Label>
								    <Form.Check inline type="checkbox" label="Image" />
								    <Form.Check inline type="checkbox" label="Description" />
								    <Form.Check inline type="checkbox" label="Price" />
								  </Form.Group>
								</Card>
						  	</Col>
						</Row>
					</Form>
				</div>
				<Product></Product>
			</div>
		);
	}
}

export default AllProducts;