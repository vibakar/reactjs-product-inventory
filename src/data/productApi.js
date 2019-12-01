import axios from 'axios';

export default class ProductApi {

	static getAllProducts() {
		return axios.get("http://localhost:4000/products")
				.then(res => res.data);
	}

	static getSingleProduct(id) {
		return axios.get("http://localhost:4000/products/" + id)
				.then(res => res.data);
	}

	static addProduct(product) {
		return axios.post("http://localhost:4000/products", product)
				.then(res => res.data);
	}

	static editProduct(product) {
		return axios.put("http://localhost:4000/products/" + product.id, product)
				.then(res => res.data);
	}

	static deleteProduct(id) {
		return axios.delete("http://localhost:4000/products/" + id)
				.then(res => res.data);
	}
}