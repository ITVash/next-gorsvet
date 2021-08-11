import { forwardRef, Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { AuthModule } from "src/auth/auth.module"
import { VacanciesController } from "./vacancies.controller"
import { Vacancies } from "./vacancies.model"
import { VacanciesService } from "./vacancies.service"

@Module({
	imports: [
		SequelizeModule.forFeature([Vacancies]),
		forwardRef(() => AuthModule),
	],
	controllers: [VacanciesController],
	providers: [VacanciesService],
})
export class VacanciesModule {}
