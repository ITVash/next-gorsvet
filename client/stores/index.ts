import SettingsStores from "./settingsStores"

export class RootStores {
	settingsStores: SettingsStores

	constructor() {
		this.settingsStores = new SettingsStores(this)
	}
}
// export { getSettingsStores } from "./settingsStores"
