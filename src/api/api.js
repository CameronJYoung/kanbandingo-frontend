import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASEURL
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
if (localStorage.getItem('auth_token')) {
	console.log(localStorage.getItem('auth_token'));
	axios.defaults.headers.post['Authorization'] = localStorage.getItem('auth_token');
	axios.defaults.headers.get['Authorization'] = localStorage.getItem('auth_token');
}
axios.defaults.withCredentials = true

export default axios;