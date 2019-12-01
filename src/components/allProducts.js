import React from 'react';
import Product from './product';

const AllProducts = (props) => {
	return (
		<div className="row product-cards">
			{ 
			  props.products.map((product, i) => {
				return <Product key={i} product={product} index={i} {...props}></Product>
			  })
			}
		</div>
	)
}

export default AllProducts;