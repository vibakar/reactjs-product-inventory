import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/userActions';

class TopViewedProduct extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: {
				  labels: [],
				  datasets: [
				    {
				      label: 'Products',
				      fill: false,
				      lineTension: 0.1,
				      backgroundColor: 'rgba(75,192,192,0.4)',
				      borderColor: 'rgba(75,192,192,1)',
				      borderCapStyle: 'butt',
				      borderDash: [],
				      borderDashOffset: 0.0,
				      borderJoinStyle: 'miter',
				      pointBorderColor: 'rgba(75,192,192,1)',
				      pointBackgroundColor: '#fff',
				      pointBorderWidth: 1,
				      pointHoverRadius: 5,
				      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				      pointHoverBorderColor: 'rgba(220,220,220,1)',
				      pointHoverBorderWidth: 2,
				      pointRadius: 1,
				      pointHitRadius: 10,
				      data: []
				    }
				  ]
				},
			count: 5
		}
	}

	componentWillMount() {
		let userId = sessionStorage.getItem('userId');
		this.props.getUserDetails(userId);
		this.props.getAllProducts();
	}

	componentWillReceiveProps(newProps) {
		let views = newProps.users[0].views ? newProps.users[0].views : {};
		this.sortAndMapProducts(views, 5);
	}

	sortAndMapProducts(views, count) {
		let sortedProducts = [];
	  	for (var productId in views) {
	  	  let pId = parseInt(productId);
	      let prodDetail = this.props.products.find((product) => product.id === pId);
	      if(prodDetail) {
	  	    sortedProducts.push([prodDetail.name, views[productId]]);
	      }
	  	}
	    sortedProducts.sort(function(a, b) {
		    return b[1] - a[1];
	    });
		let data = this.state.data;
		data.labels = [];
		data.datasets[0].data = [];
		let len = (count <= sortedProducts.length) ? count : sortedProducts.length;
		for (var i = 0; i < len; i++) {
	    	data.labels.push(sortedProducts[i][0]);
	    	data.datasets[0].data.push(sortedProducts[i][1]);
	    }
		this.setState({data: data, count: count});
	}

	onCountChange = (e) => {
		let views = this.props.users[0].views ? this.props.users[0].views : {};
		this.sortAndMapProducts(views, e.target.value);
	}

	render() {
		return (
			<div className="row rm pt-20">
				<div className="col-md-1"></div>
				<div className="col-md-10 pb-50">
					<Accordion defaultActiveKey="0">
						  <Card>
						    <Card.Header>
						      <Accordion.Toggle as={Button} variant="link" eventKey="0">
						        <span>Top Viewed Products</span>
						      </Accordion.Toggle>
						    </Card.Header>
						    <Accordion.Collapse eventKey="0">
						      <Card.Body>
						      	<div className="row rm">
						      		<div className="col-md-9"></div>
						      		<div className="col-md-3">
						      			<Form.Group>
										    <Form.Control as="select" onChange={this.onCountChange} value={this.state.count}>
										      <option>3</option>
										      <option>5</option>
										      <option>10</option>
										    </Form.Control>
										</Form.Group>
						      		</div>
						      	</div>
						      	<div className="w-100">
							      	<Bar
									  data={this.state.data}
									  width={80}
									  height={350}
									  options={{ maintainAspectRatio: false }}
									/>
								</div>
						      </Card.Body>
						    </Accordion.Collapse>
						  </Card>
						  <Card>
						  </Card>
					</Accordion>
				</div>
				<div className="col-md-1"></div>
			</div>

		)
	}
}

function mapStateToProps(state) {
	return {
		users: state.users,
		products: state.products
	}
}

export default connect(mapStateToProps, actions)(withRouter(TopViewedProduct));