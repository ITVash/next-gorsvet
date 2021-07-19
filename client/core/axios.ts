import axios from "axios"
// axios.defaults.baseURL = `http://localhost:3001/api/`
axios.defaults.baseURL = `${process.env.API_URL}`
//axios.defaults.baseURL = `http://localhost:3001/api/`
/* const intercepter = axios.create({
	baseURL: `${process.env.REACT_APP_URL}/api/`,
}) */

/* const token = !!window ? window.localStorage.getItem("token") : ""
token && (axios.defaults.headers.common["token"] = `${token}`) */

export default axios
