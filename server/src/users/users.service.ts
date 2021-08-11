import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { CreateUserDto } from "./dto/create-user.dto"
import { User } from "./user.model"
import { generateMD5, generatePass } from "src/utils/createMD5"

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User)
		private userModel: typeof User,
	) {}
	async createUser(dto: CreateUserDto): Promise<User> {
		try {
			const user = await this.userModel.create({
				login: dto.login,
				password: dto.password,
			})
			return user
		} catch (error) {
			throw new HttpException(
				"Ошибка при создании пользователя!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async show(): Promise<User[]> {
		try {
			const user = await this.userModel.findAll({ include: { all: true } })
			if (user.length <= 0) {
				const adm1: CreateUserDto = {
					login: "zh3ka",
					password: generateMD5("gorsvet062gubira49"),
				}
				const adm2: CreateUserDto = {
					login: "Vash",
					password: generateMD5("dtkjcbgtl2909gorsvet"),
				}
				await this.userModel.create(adm1)
				await this.userModel.create(adm2)
			}
			return user
		} catch (error) {
			throw new HttpException(
				"Ошибка при получении всех пользователей!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async showLogin(login: string): Promise<User> {
		try {
			const user = await this.userModel.findOne({
				where: { login },
				include: { all: true },
			})
			return user
		} catch (error) {
			throw new HttpException(
				"Ошибка при получении данных пользователя!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async showID(id: number): Promise<User> {
		try {
			const user = await this.userModel.findOne({
				where: { id },
				include: { all: true },
			})
			return user
		} catch (error) {
			throw new HttpException(
				"Ошибка при получении данных пользователя!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async update(id: number, dto: CreateUserDto): Promise<User> {
		try {
			const user = await this.userModel.findByPk(id)
			await user.update({ ...dto })
			await user.save()
			return user
		} catch (error) {
			throw new HttpException(
				"Ошибка при обновлении пользователя!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async delete(id: number): Promise<void> {
		try {
			const user = await this.userModel.findByPk(id)
			await user.destroy()
		} catch (error) {
			throw new HttpException(
				"Ошибка при попытке удаления пользователя!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
}
