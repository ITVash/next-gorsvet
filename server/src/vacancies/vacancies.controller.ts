import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UseGuards,
} from "@nestjs/common"
import { JwtAuthGuard } from "src/auth/jwt-auth.guard"
import { CreateVacanciesDto } from "./dto/create-vacancies.dto"
import { VacanciesService } from "./vacancies.service"

@Controller("vacancies")
export class VacanciesController {
	constructor(private vacanciesSrvc: VacanciesService) {}
	@UseGuards(JwtAuthGuard)
	@Post()
	create(@Body() dto: CreateVacanciesDto) {
		return this.vacanciesSrvc.create(dto)
	}
	@Get()
	show() {
		return this.vacanciesSrvc.show()
	}
	@UseGuards(JwtAuthGuard)
	@Put("/:id")
	update(@Param("id") id: number, @Body() dto: CreateVacanciesDto) {
		return this.vacanciesSrvc.update(id, dto)
	}
	@UseGuards(JwtAuthGuard)
	@Delete("/:id")
	delete(@Param("id") id: number) {
		return this.vacanciesSrvc.delete(id)
	}
}
