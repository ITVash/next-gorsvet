import { Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { CreateUserDto } from "src/users/dto/create-user.dto"
import { User } from "src/users/user.model"
import { UsersService } from "src/users/users.service"

@Injectable()
export class AuthService {
	constructor(
		private userService: UsersService,
		private jwtService: JwtService,
	) {}
	async login(userDto: CreateUserDto) {
		const user = await this.validationUser(userDto)
		return this.generateToken(user)
	}
	private async generateToken(user: User) {
		const payload = { login: user.login, id: user.id }
		return {
			token: this.jwtService.sign(payload),
		}
	}

	private async validationUser(userDto: CreateUserDto) {
		const user = await this.userService.showLogin(userDto.login)
		if (userDto.password === user.password) {
			return user
		}
		throw new UnauthorizedException({
			message: "Некорректный логин или пароль",
		})
	}
}
