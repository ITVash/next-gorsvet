import { Column, DataType, Model, Table } from "sequelize-typescript"

interface developer {
	name: string
	path: string
}
interface ISettings {
	phoneDis: string
	slogan: string
	shel: string[]
	address: string
	email: string
	develop: developer[]
	tempory: string[]
}

@Table({ tableName: "settings", timestamps: false })
export class Settings extends Model<Settings, ISettings> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number
	@Column({
		type: DataType.STRING,
		allowNull: false,
		defaultValue: "999-99-99",
	})
	phoneDis: string
	@Column({
		type: DataType.STRING,
		allowNull: false,
		defaultValue: "Слоган Донецкгорсвет",
	})
	slogan: string
	@Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: [] })
	shel: string[]
	@Column({ type: DataType.STRING, defaultValue: "Адресс" })
	address: string
	@Column({ type: DataType.STRING, defaultValue: "Email" })
	email: string
	@Column({ type: DataType.ARRAY(DataType.JSON), defaultValue: [] })
	develop: developer[]
	@Column({
		type: DataType.ARRAY(DataType.STRING),
		allowNull: true,
		defaultValue: [],
	})
	tempory: string[]
}
