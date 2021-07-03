import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table({ tableName: "vacancies" })
export class Vacancies extends Model<Vacancies> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number
	@Column({ type: DataType.STRING, allowNull: false })
	text: string
}
