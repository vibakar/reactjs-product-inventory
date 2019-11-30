import React from 'react';
import Product from './product';

const AllProducts = (props) => {
	return (
		<div className="row product-cards">
			{ 
			  props.productsList.map((product, i) => {
				return <Product key={i} product={product}></Product>
			  })
			}
		</div>
	)
}

export default AllProducts;