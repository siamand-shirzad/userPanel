import axios from 'axios';
// users section
export const getUsers = async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/users');
	return response.data;
};

export const createUserService = async data => {
	return axios({
		url: 'https://jsonplaceholder.typicode.com/users',
		method: 'POST',
		data,
		headers: { 'Content-type': 'application/json; charset=UTF-8' }
	});
};

export const updateUserService = async (id, data) => {
	return axios({
		url: `https://jsonplaceholder.typicode.com/users/${id}`,
		method: 'PUT',
		data,
		headers: { 'Content-type': 'application/json; charset=UTF-8' }
	});
};

export const deleteUserService = async id => {
	return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
};
// post section
export const getPosts = async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
	return response.data;
};
