import { action, makeObservable, observable } from "mobx"
import { RootStores } from "stores"
import { ISettings } from "types"
import { settingsApi } from "./api"

class SettingsStores {
	root: RootStores
	items: ISettings = {}

	constructor(root: RootStores) {
		this.root = root
		makeObservable(
			this,
			{ items: observable, fetchData: action, edit: action },
			{ deep: true },
		)
	}

	edit = async (obj: ISettings): Promise<void> => {
		try {
			const { data } = await settingsApi.update(obj.id, obj)
			this.items = data.data
		} catch (error) {
			console.error(`Ошибка обновления данных: ${error}`)
		}
	}

	fetchData = async (data?: ISettings): Promise<void> => {
		try {
			if (!data) {
				const { data } = await settingsApi.show()
				this.items = data
				return
			}
			this.items = data
		} catch (error) {
			console.error(`Ошибка загруски данных с сервера: ${error}`)
		}
	}
}

export default SettingsStores
