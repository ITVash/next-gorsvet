import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { UpdateSettingsDto } from "./dto/update-settings.dto"
import { Settings } from "./settings.model"

@Injectable()
export class SettingsService {
	constructor(@InjectModel(Settings) private settingsModel: typeof Settings) {}

	async create(dto: UpdateSettingsDto): Promise<Settings> {
		try {
			const sett = await this.settingsModel.create(dto)
			return sett
		} catch (error) {
			throw new HttpException(
				"Ошибка при создании настроек!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}

	async show(dto?: UpdateSettingsDto): Promise<Settings> {
		try {
			const sett = await this.settingsModel.findAll({ include: { all: true } })
			if (sett.length <= 0) {
				const obj: UpdateSettingsDto = {
					address: "г. Донецк, ул. Горького, 50",
					phoneDis: "+380 (62) 338 07 50",
					email: "gorsvet_pr@mail.ru",
					slogan: "Делаем жизнь в нашем городе ярче!",
					shel: [
						"Многолетний опыт работы по оформлению и содержанию системы наружного	освещения г. Донецка;",
						"Праздничное оформления площадей, скверов, парков, улиц с	изготавлением и установкой иллюминации;",
						"Подсветка административных, общественных зданий, памятников культуры, искусства и архитектуры;",
						"Сотрудничество с ведущими производителями светотехнической	продукции;",
						"Высококвалифицированые специалисты;",
						"Спецтехника для проведения работ;",
						"Автоматизированная система управления городским освещением;",
						"Качество выполняемых работ и доступность расценок на них;",
					],
					develop: [
						{ name: "Vash", path: "https://t.me/ITVash" },
						{ name: "Zh3ka", path: "https://www.instagram.com/zh3kon/" },
						{
							name: "Petrichenko_dn",
							path: "https://www.instagram.com/petrechenko_ph/",
						},
					],
					tempory: [],
				}
				const createSettings = await this.create(obj)
				return createSettings
			}
			return sett[0]
		} catch (err) {
			throw new HttpException(
				"Ошибка при отображени настроек!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async update(id: number, dto: UpdateSettingsDto): Promise<Settings> {
		try {
			const sett = await this.settingsModel.findByPk(id)
			await sett.update({ ...dto })
			await sett.save()
			return sett
		} catch (error) {
			throw new HttpException(
				"Ошибка при обновлении настроек!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
}
