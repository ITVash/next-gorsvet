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
import { CreateUserDto } from "./dto/create-user.dto"
import { User } from "./user.model"
import { UsersService } from "./users.service"

@Controller("users")
export class UsersController {
	constructor(private userSrvc: UsersService) {}
	@UseGuards(JwtAuthGuard)
	@Post()
	create(@Body() dto: CreateUserDto) {
		return this.userSrvc.createUser(dto)
	}

	@UseGuards(JwtAuthGuard)
	@Get()
	show(): Promise<User[]> {
		return this.userSrvc.show()
	}

	@UseGuards(JwtAuthGuard)
	@Get("/:id")
	showID(@Param("id") id: number): Promise<User> {
		return this.userSrvc.showID(id)
	}

	@UseGuards(JwtAuthGuard)
	@Put("/:id")
	updateID(@Param("id") id: number, @Body() dto: CreateUserDto): Promise<User> {
		return this.userSrvc.update(id, dto)
	}

	@UseGuards(JwtAuthGuard)
	@Delete("/:id")
	deleteID(@Param("id") id: number): Promise<void> {
		return this.userSrvc.delete(id)
	}
}
