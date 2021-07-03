import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { User } from "./user.model"
import { UsersService } from "./users.service"

@Controller("users")
export class UsersController {
	constructor(private userSrvc: UsersService) {}
	@Post()
	create(@Body() dto: CreateUserDto) {
		return this.userSrvc.createUser(dto)
	}

	@Get()
	show(): Promise<User[]> {
		return this.userSrvc.show()
	}

	@Get("/:id")
	showID(@Param("id") id: number): Promise<User> {
		return this.userSrvc.showID(id)
	}

	@Put("/:id")
	updateID(@Param("id") id: number, @Body() dto: CreateUserDto): Promise<User> {
		return this.userSrvc.update(id, dto)
	}

	@Delete("/:id")
	deleteID(@Param("id") id: number): Promise<void> {
		return this.userSrvc.delete(id)
	}
}
