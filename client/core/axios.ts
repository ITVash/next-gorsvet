import axios from "axios"
import cooc from "js-cookie"
axios.defaults.baseURL = `${process.env.API_URL}`
axios.interceptors.request.use(
	(conf) => {
		if (!conf.headers.Authorization) {
			// const token = localStorage.getItem("token")
			const token = cooc.get("token")
			if (token) {
				conf.headers.Authorization = `Bearer ${token}`
			}
		}
		return conf
	},
	(error) => Promise.reject(error),
)

export default axios
