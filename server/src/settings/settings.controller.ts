import { Body, Controller, Get, Param, Put, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "src/auth/jwt-auth.guard"
import { UpdateSettingsDto } from "./dto/update-settings.dto"
import { SettingsService } from "./settings.service"

@Controller("settings")
export class SettingsController {
	constructor(private settingsSrvc: SettingsService) {}
	@Get()
	show() {
		return this.settingsSrvc.show()
	}
	@UseGuards(JwtAuthGuard)
	@Put("/:id")
	update(@Param("id") id: number, @Body() dto: UpdateSettingsDto) {
		return this.settingsSrvc.update(id, dto)
	}
}
