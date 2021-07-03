import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { VacanciesController } from "./vacancies.controller"
import { Vacancies } from "./vacancies.model"
import { VacanciesService } from "./vacancies.service"

@Module({
	imports: [SequelizeModule.forFeature([Vacancies])],
	controllers: [VacanciesController],
	providers: [VacanciesService],
})
export class VacanciesModule {}
