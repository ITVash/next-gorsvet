import { Column, DataType, Model, Table } from "sequelize-typescript"
import { CreateVacanciesDto } from "./dto/create-vacancies.dto"

@Table({ tableName: "vacancies" })
export class Vacancies extends Model<Vacancies, CreateVacanciesDto> {
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
	@Column({ type: DataType.STRING, allowNull: false })
	req: string
	@Column({ type: DataType.STRING, allowNull: false })
	salary: string
}
