import api from "./api";

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
			console.log(res);
		}).catch(err => {
			console.log(err);
		})
	},

	verify: async () => {
		return await api.post('/auth/verify').then(res => {
			return true
		}).catch(err => {
			return false
		})
	}
}

export default Auth;