import { action, makeObservable, observable } from "mobx"
import { RootStores } from "stores"
import { INews } from "types"
import { newsApi } from "./api"

class NewsStores {
	root: RootStores
	items: INews[] = []
	current: INews = {}

	constructor(root: RootStores) {
		this.root = root
		makeObservable(
			this,
			{ items: observable, fetchData: action, edit: action },
			{ deep: true },
		)
	}

	create = async (obj: INews | any): Promise<void> => {
		try {
			const { data } = await newsApi.create(obj)
			this.items.push(data)
			alert("Данные успешно сохранены!")
		} catch (error) {
			console.error(`Ошибка обновления данных: ${error}`)
		}
	}

	edit = async (obj: INews | any): Promise<void> => {
		try {
			const { data } = await newsApi.update(
				Number(obj.get("id").toString()),
				obj,
			)
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
			await newsApi.delete(id)
			this.items = this.items.filter((item) => item.id !== id)
			alert("Данные успешно удалены!")
		} catch (error) {
			console.error(`Ошибка удаления данных: ${error}`)
		}
	}

	fetchData = async (data?: INews[]): Promise<void> => {
		try {
			if (!data) {
				const { data } = await newsApi.show()
				this.items = data
				return
			}
			this.items = data
		} catch (error) {
			console.error(`Ошибка загруски данных с сервера: ${error}`)
		}
	}
}

export default NewsStores
