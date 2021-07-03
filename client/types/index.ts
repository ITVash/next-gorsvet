interface developer {
	name: string
	path: string
}
export interface ISettings {
	id?: number
	phoneDis?: string
	slogan?: string
	shel?: string[]
	address?: string
	email?: string
	develop?: developer[]
	tempory?: string[]
}

export interface IRootStoreProps {
	settingsStores?: ISettings
}
