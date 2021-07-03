import { action, makeObservable, observable } from "mobx"
import { RootStores } from "stores"
import { IVacancies } from "types"
import { vacanciesApi } from "./api"

class VacanciesStores {
	root: RootStores
	items: IVacancies[] = []

	constructor(root: RootStores) {
		this.root = root
		makeObservable(
			this,
			{ items: observable, fetchData: action, edit: action },
			{ deep: true },
		)
	}

	create = async (obj: IVacancies): Promise<void> => {
		try {
			const { data } = await vacanciesApi.create(obj)
			this.items.push(data)
			alert("Данные успешно сохранены!")
		} catch (error) {
			console.error(`Ошибка обновления данных: ${error}`)
		}
	}

	edit = async (obj: IVacancies): Promise<void> => {
		try {
			const { data } = await vacanciesApi.update(obj.id, obj)
			this.items = this.items.map((item) =>
				item.id === data.id ? (item = data) : item,
			)
			alert("Данные успешно обновленны!")
		} catch (error) {
			console.error(`Ошибка обновления данных: ${error}`)
		}
	}

	delete = async (id: number): Promise<void> => {
		try {
			await vacanciesApi.delete(id)
			this.items = this.items.filter((item) => item.id !== id)
			alert("Данные успешно удалены!")
		} catch (error) {
			console.error(`Ошибка обновления данных: ${error}`)
		}
	}

	fetchData = async (data?: IVacancies[]): Promise<void> => {
		try {
			if (!data) {
				const { data } = await vacanciesApi.show()
				this.items = data
				return
			}
			this.items = data
		} catch (error) {
			console.error(`Ошибка загруски данных с сервера: ${error}`)
		}
	}
}

export default VacanciesStores
