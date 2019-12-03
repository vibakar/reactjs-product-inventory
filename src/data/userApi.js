import axios from 'axios';

export default class UserApi {

	static getAllUsers() {
		return axios.get("http://localhost:4000/users")
				.then(res => res.data);
	}

	static getSingleUser(id) {
		return axios.get("http://localhost:4000/users/" + id)
				.then(res => res.data);
	}
}