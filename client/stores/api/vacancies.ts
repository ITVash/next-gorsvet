import { AxiosPromise } from "axios"
import { axios } from "core"
import { IVacancies } from "types"
// const token = !!window && localStorage.getItem("token")
export default {
	create: (data: IVacancies): AxiosPromise => axios.post(`vacancies`, data),
	show: (): AxiosPromise => axios.get("vacancies"),
	update: (id: number, data: IVacancies): AxiosPromise =>
		axios.put(`vacancies/${id}`, data),
	delete: (id: number): AxiosPromise => axios.delete(`vacancies/${id}`),
}
