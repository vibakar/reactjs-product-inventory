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

	static updateUser(user) {
		return axios.put("http://localhost:4000/users/" + user.id, user)
				.then(res => res.data);
	}

	static addUser(user) {
		return axios.post("http://localhost:4000/users/", user)
				.then(res => res.data);
	}

	static updateViews(userId, productId) {
		return axios.get("http://localhost:4000/users/" + userId)
				.then(res => {
					let user = res.data
					if(user.views) {
				          user.views[productId] = user.views[productId] ? user.views[productId] + 1 : 1;
				    }
				    else {
				        user.views = {};
				        user.views[productId] = 1;
				    }
				    return UserApi.updateUser(user)
				});
	}
}