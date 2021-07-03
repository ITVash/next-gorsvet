interface developer {
	readonly name: string
	readonly path: string
}
export class UpdateSettingsDto {
	readonly phoneDis: string
	readonly slogan: string
	readonly shel: string[]
	readonly address: string
	readonly email: string
	readonly develop: developer[]
	readonly tempory: string[]
}
