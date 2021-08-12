import NewsStores from "./newsStores"
import SettingsStores from "./settingsStores"
import VacanciesStores from "./vacanciesStores"

export class RootStores {
	settingsStores: SettingsStores
	vacanciesStores: VacanciesStores
	newsStores: NewsStores

	constructor() {
		this.settingsStores = new SettingsStores(this)
		this.vacanciesStores = new VacanciesStores(this)
		this.newsStores = new NewsStores(this)
	}
}
// export { getSettingsStores } from "./settingsStores"
