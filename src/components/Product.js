import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Product = (props) => {
	return (
	    <div className="col-xs-12 col-sm-6 col-md-3">
	      <Card style={{ width: '19rem', marginBottom: '20px' }}>
		  <Card.Img style={{height: '200px'}} variant="top" src={props.product.image} />
		  <Card.Body>
		    <Card.Title>{props.product.name}</Card.Title>
		    <Card.Text style={{height: '60px'}}>
		      { 
		      	props.product.description.length > 85 ? 
		      	props.product.description.slice(0, 85)+"..." :
		      	props.product.description
		      }
		    </Card.Text>
		  </Card.Body>
		  <ListGroup className="list-group-flush">
		    <ListGroupItem>&#8377;{props.product.price}</ListGroupItem>
		  </ListGroup>
		  <Card.Body>
		    <Card.Link href="#">Edit</Card.Link>
		    <Card.Link href="#">Delete</Card.Link>
		  </Card.Body>
		  </Card>
	    </div>
	)
}

export default Product;