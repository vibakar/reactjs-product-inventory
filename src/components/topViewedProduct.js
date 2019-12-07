import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Accordion, Card, Button } from 'react-bootstrap';
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
				}
		}
	}

	componentWillMount() {
		let userId = sessionStorage.getItem('userId');
		this.props.getUserDetails(userId);
		this.props.getAllProducts();
	}

	componentWillReceiveProps(newProps) {
		let views = newProps.users[0].views ? newProps.users[0].views : {};
		let keys = Object.keys(views);
		let data = this.state.data;
		data.datasets[0].data = Object.values(views);
		data.labels = this.getProductNames(keys);
		this.setState({data: data});
	}

	getProductNames(keys) {
		let productNames = [];
		keys.forEach(k => {
			this.props.products.forEach(p => {
				let key = parseInt(k);
				if(key === p.id)
					productNames.push(p.name)
			});
		});
		return productNames;
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
						      	<Bar
								  data={this.state.data}
								  width={80}
								  height={350}
								  options={{ maintainAspectRatio: false }}
								/>
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