import { forwardRef, Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { AuthModule } from "src/auth/auth.module"
import { User } from "./user.model"
import { UsersController } from "./users.controller"
import { UsersService } from "./users.service"

@Module({
	imports: [SequelizeModule.forFeature([User]), forwardRef(() => AuthModule)],
	controllers: [UsersController],
	providers: [UsersService],
	exports: [UsersService],
})
export class UsersModule {}
