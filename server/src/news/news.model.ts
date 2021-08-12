import { Column, DataType, Model, Table } from "sequelize-typescript"

interface INews {
	title?: string
	link?: string
	text?: string
	images?: string[]
}
@Table({ tableName: "news" })
export class News extends Model<News, INews> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number
	@Column({ type: DataType.STRING, allowNull: false })
	title: string
	@Column({ type: DataType.STRING, allowNull: false })
	link: string
	@Column({ type: DataType.STRING, allowNull: false })
	text: string
	@Column({ type: DataType.ARRAY(DataType.STRING) })
	images: string[]
}
