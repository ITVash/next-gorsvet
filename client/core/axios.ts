import axios from "axios"
axios.defaults.baseURL = `${process.env.API_URL}`

axios.interceptors.request.use(
	(conf) => {
		if (!conf.headers.Authorization) {
			const token =
				typeof Storage !== undefined && localStorage.getItem("token")
			if (token) {
				conf.headers.Authorization = `Bearer ${token}`
			}
		}
		return conf
	},
	(error) => Promise.reject(error),
)

export default axios
