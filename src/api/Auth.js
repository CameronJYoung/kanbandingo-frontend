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
			localStorage.setItem('auth_token', res.data.token)
			console.log(res);
		}).catch(err => {
			console.log(err);
		})
	},

	verify: async () => {
		return await api.post('/auth/verify', {
			headers: {
				Authorization: localStorage.getItem('auth_token')
			}
		}).then(res => {
			return true
		}).catch(err => {
			return false
		})
	}
}

export default Auth;