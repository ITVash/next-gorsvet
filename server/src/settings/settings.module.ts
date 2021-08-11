import { forwardRef, Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { AuthModule } from "src/auth/auth.module"
import { SettingsController } from "./settings.controller"
import { Settings } from "./settings.model"
import { SettingsService } from "./settings.service"

@Module({
	imports: [
		SequelizeModule.forFeature([Settings]),
		forwardRef(() => AuthModule),
	],
	controllers: [SettingsController],
	providers: [SettingsService],
})
export class SettingsModule {}
