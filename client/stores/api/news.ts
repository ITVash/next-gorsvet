import { AxiosPromise } from "axios"
import { axios } from "core"
import { INews } from "types"
// const token = !!window && localStorage.getItem("token")
export default {
	create: (data: INews | any): AxiosPromise => axios.post(`news`, data),
	show: (): AxiosPromise => axios.get("news"),
	showOne: (link: string): AxiosPromise => axios.get(`news/${link}`),
	update: (id: number | string, data: INews | any): AxiosPromise =>
		axios.put(`news/${id}`, data),
	delete: (id: number): AxiosPromise => axios.delete(`news/${id}`),
}
