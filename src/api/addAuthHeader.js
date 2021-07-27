const addAuthHeader = (apiInstance) => {
	apiInstance.interceptors.request.use(
		config => {
			const token = localStorage.getItem('auth_token');
			if (token) {
			  config.headers.Authorization = token;
			}
			return config;
		  },
	)
}

export default addAuthHeader;