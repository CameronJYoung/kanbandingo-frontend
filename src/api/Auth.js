import api from "./api";
import addAuthHeader from "./addAuthHeader";

const Auth = {
	register: (details) => {
		api.post('/auth/register', details).then(res => {
			console.log(res);
		}).catch(err => {
			console.log(err);
		})
	},
	
	login: (details) => {
		api.post('/auth/login', details).then(res => {
			localStorage.setItem('auth_token', res.data.token)
			console.log(res);
		}).catch(err => {
			console.log(err);
		})
	},

	verify: async () => {
		addAuthHeader(api);

		return await api.post('/auth/verify').then(res => {
			return true
		}).catch(err => {
			return false
		})
	}
}

export default Auth;