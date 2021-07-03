import SettingsStores from "./settingsStores"
import VacanciesStores from "./vacanciesStores"

export class RootStores {
	settingsStores: SettingsStores
	vacanciesStores: VacanciesStores

	constructor() {
		this.settingsStores = new SettingsStores(this)
		this.vacanciesStores = new VacanciesStores(this)
	}
}
// export { getSettingsStores } from "./settingsStores"
