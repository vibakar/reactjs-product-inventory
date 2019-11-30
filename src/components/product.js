import React from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Product = (props) => {
	return (
	    <div className="col-xs-12 col-sm-6 col-md-3">
	      <Card style={{ width: '19rem', marginBottom: '20px' }}>
	      <Link to={`/productDetail/${props.product.id}`}>
		  	<Card.Img style={{height: '200px'}} variant="top" src={props.product.image} />
		  </Link>
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
		    <Link to={`edit-product/${props.product.id}`}>Edit</Link>
		    &nbsp;&nbsp;&nbsp;&nbsp;
		    <Link to={`delete-product/${props.product.id}`}>Delete</Link>
		  </Card.Body>
		  </Card>
	    </div>
	)
}

export default Product;