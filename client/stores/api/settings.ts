import { AxiosPromise } from "axios"
import { axios } from "core"
import { ISettings } from "types"
// const token = !!window && localStorage.getItem("token")
export default {
	show: (): AxiosPromise => axios.get("settings"),
	update: (id: number, data: ISettings): AxiosPromise =>
		axios.put(`settings/${id}`, data),
}
