import { forwardRef, Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { AuthModule } from "src/auth/auth.module"
import { NewsController } from "./news.controller"
import { News } from "./news.model"
import { NewsService } from "./news.service"

@Module({
	controllers: [NewsController],
	providers: [NewsService],
	imports: [SequelizeModule.forFeature([News]), forwardRef(() => AuthModule)],
})
export class NewsModule {}
