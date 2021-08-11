import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { CreateVacanciesDto } from "./dto/create-vacancies.dto"
import { Vacancies } from "./vacancies.model"

@Injectable()
export class VacanciesService {
	constructor(
		@InjectModel(Vacancies) private vacanciesModel: typeof Vacancies,
	) {}

	async create(dto: CreateVacanciesDto): Promise<Vacancies> {
		try {
			const vac = await this.vacanciesModel.create(dto)
			return vac
		} catch (error) {
			throw new HttpException(
				"Ошибка при создании вакансии!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async show(): Promise<Vacancies[]> {
		try {
			const vac = await this.vacanciesModel.findAll({ include: { all: true } })
			return vac
		} catch (error) {
			throw new HttpException(
				"Ошибка при отображении вакансий!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async update(id: number, dto: CreateVacanciesDto): Promise<Vacancies> {
		try {
			const vac = await this.vacanciesModel.findByPk(id)
			await vac.update({ ...dto })
			await vac.save()
			return vac
		} catch (error) {
			throw new HttpException(
				"Ошибка при обновлении вакансий!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async delete(id: number): Promise<void> {
		try {
			const vac = await this.vacanciesModel.findByPk(id)
			await vac.destroy()
		} catch (error) {
			throw new HttpException(
				"Ошибка при создании настроек!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
}
