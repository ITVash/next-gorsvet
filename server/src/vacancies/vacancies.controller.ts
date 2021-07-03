import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { CreateVacanciesDto } from "./dto/create-vacancies.dto"
import { VacanciesService } from "./vacancies.service"

@Controller("vacancies")
export class VacanciesController {
	constructor(private vacanciesSrvc: VacanciesService) {}
	@Post()
	create(@Body() dto: CreateVacanciesDto) {
		return this.vacanciesSrvc.create(dto)
	}
	@Get()
	show() {
		return this.vacanciesSrvc.show()
	}
	@Put("/:id")
	update(@Param("id") id: number, @Body() dto: CreateVacanciesDto) {
		return this.vacanciesSrvc.update(id, dto)
	}
	@Delete("/:id")
	delete(@Param("id") id: number) {
		return this.vacanciesSrvc.delete(id)
	}
}
