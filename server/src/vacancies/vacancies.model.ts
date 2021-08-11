import { Column, DataType, Model, Table } from "sequelize-typescript"

interface CreateVacancies {
	title?: string
	text?: string
	req?: string
	salary?: string
}

@Table({ tableName: "vacancies" })
export class Vacancies extends Model<Vacancies, CreateVacancies> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number
	@Column({ type: DataType.STRING })
	title: string
	@Column({ type: DataType.STRING })
	text: string
	@Column({ type: DataType.STRING })
	req: string
	@Column({ type: DataType.STRING })
	salary: string
}
