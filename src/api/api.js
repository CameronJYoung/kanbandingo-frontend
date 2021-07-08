import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASEURL
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.withCredentials = true

export default axios;