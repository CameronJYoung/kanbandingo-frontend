

import api from "./api";

const Kanban = {
	getUserBoards: async () => {
		return await api.get('/user/board', {
	withCredentials: true,
	headers: {
		Authorization: localStorage.getItem('auth_token')
	}
}).then(res => {
			return res;
		}).catch(err => {
			console.log(localStorage.getItem('auth_token'));
			return err;
		})
	},

	getBoardById: async (id) => {
		return await api.get(`/kanban/board/${id}`, {
	withCredentials: true,
	headers: {
		Authorization: localStorage.getItem('auth_token')
	}
}).then(res => {
			return res;
		}).catch(err => {
			return err;
		})
	},

	getColumnsByBoardId: async (id) => {
		return await api.get(`/kanban/board/${id}/columns`, {
	withCredentials: true,
	headers: {
		Authorization: localStorage.getItem('auth_token')
	}
}).then(res => {
			return res;
		}).catch(err => {
			return err;
		})
	},

	getTicketsByColumnId: async (id) => {
		return await api.get(`/kanban/column/${id}/tickets`, {
	withCredentials: true,
	headers: {
		Authorization: localStorage.getItem('auth_token')
	}
}).then(res => {
			return res;
		}).catch(err => {
			return err;
		})
	},

	getTicketById: async (id) => {
		return await api.get(`/kanban/ticket/${id}`, {
	withCredentials: true,
	headers: {
		Authorization: localStorage.getItem('auth_token')
	}
}).then(res => {
			return res;
		}).catch(err => {
			return err;
		})
	},

	getCommentsByTicketId: async (id) => {
		return await api.get(`/kanban/ticket/${id}/comments`, {
	withCredentials: true,
	headers: {
		Authorization: localStorage.getItem('auth_token')
	}
}).then(res => {
			return res;
		}).catch(err => {
			return err;
		})
	},

	postCommentByTicketId: async (id, content) => {
		return await api.post(`/user/comment/${id}`,{
			content: content
		}, {
	withCredentials: true,
	headers: {
		Authorization: localStorage.getItem('auth_token')
	}
}).then(res => {
			return res;
		}).catch(err => {
			return err;
		})
	},

	postTicketByColumnId: async (id, description) => {
		return await api.post(`/user/ticket/${id}`,{
			description: description
		}, {
	withCredentials: true,
	headers: {
		Authorization: localStorage.getItem('auth_token')
	}
}).then(res => {
			return res;
		}).catch(err => {
			return err;
		})
	},

	postColumnByBoardId: async (id, name) => {
		return await api.post(`/user/column/${id}`,{
			name: name
		}, {
	withCredentials: true,
	headers: {
		Authorization: localStorage.getItem('auth_token')
	}
}).then(res => {
			return res;
		}).catch(err => {
			return err;
		})
	},

	postBoard: async (name) => {
		return await api.post(`/user/board`,{
			name: name
		}, {
	withCredentials: true,
	headers: {
		Authorization: localStorage.getItem('auth_token')
	}
}).then(res => {
			return res;
		}).catch(err => {
			return err;
		})
	}
}

export default Kanban;