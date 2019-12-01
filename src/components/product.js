import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Modal, Button, Badge } from 'react-bootstrap';
import { ruppeeFormat } from '../helper';

const Product = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteProduct = () => {
  	setShow(false);
  	props.triggerDeleteProduct(props.product.id, props.index);
  }

  return (
    <div className="col-xs-12 col-sm-6 col-md-3">
      <Card style={{ width: '19rem', marginBottom: '20px' }}>
      <Link to={`/productDetail/${props.product.id}`}>
	  	<Card.Img style={{height: '200px'}} variant="top" src={props.product.image} />
	  </Link>
	  <Card.Body>
	    <Card.Title>{props.product.name}</Card.Title>
      {
        props.displayDesc ? 
    	    <Card.Text style={{height: '60px'}}>
    	      { 
    	      	props.product.description.length > 85 ? 
    	      	props.product.description.slice(0, 85)+"..." :
    	      	props.product.description
    	      }
    	    </Card.Text> : ''
      }
	  </Card.Body>
	  <ListGroup className="list-group-flush">
      {
        props.displayPrice ? <ListGroupItem>&#8377;{ruppeeFormat(props.product.price)}</ListGroupItem> : ''
      }
      {
        props.displayQuantity ? <ListGroupItem>
                                 <Badge pill variant="secondary">
                                    Q-{props.product.quantity}
                                 </Badge>
                                </ListGroupItem> : ''
      }
	  </ListGroup>
	  {
      props.isLoggedIn ? <Card.Body>
                          <Link to={`edit-product/${props.product.id}`}>Edit</Link>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <a href="#!" onClick={handleShow}>Delete</a>
                        </Card.Body> : ''
    }
	  </Card>

	  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete {props.product.name} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteProduct}>
            Ok
          </Button>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
	)
}

export default Product;