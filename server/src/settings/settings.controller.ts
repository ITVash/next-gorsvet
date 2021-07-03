import { Body, Controller, Get, Param, Put } from "@nestjs/common"
import { UpdateSettingsDto } from "./dto/update-settings.dto"
import { SettingsService } from "./settings.service"

@Controller("settings")
export class SettingsController {
	constructor(private settingsSrvc: SettingsService) {}
	@Get()
	show() {
		return this.settingsSrvc.show()
	}
	@Put("/:id")
	update(@Param("id") id: number, @Body() dto: UpdateSettingsDto) {
		return this.settingsSrvc.update(id, dto)
	}
}
