import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table({ tableName: "news" })
export class News extends Model {
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
	text: string
	@Column({ type: DataType.ARRAY(DataType.STRING) })
	images: string[]
}
