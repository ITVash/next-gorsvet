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
	vacanciesStores?: IVacancies[]
	newsStores?: INews[]
}

export interface IVacancies {
	id?: number
	title?: string
	text?: string
	req?: string
	salary?: string
}

export interface INews {
	id?: number
	title?: string
	link?: string
	text?: string
	images?: string[]
	updatedAt?: string
	createdAt?: string
}
