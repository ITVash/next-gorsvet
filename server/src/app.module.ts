import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { SequelizeModule } from "@nestjs/sequelize"
import { SettingsModule } from "./settings/settings.module"
import { UsersModule } from "./users/users.module"
import { VacanciesModule } from "./vacancies/vacancies.module"
import { NewsModule } from "./news/news.module"
import { AuthModule } from "./auth/auth.module"
import { User } from "./users/user.model"
import { Settings } from "./settings/settings.model"
import { Vacancies } from "./vacancies/vacancies.model"
import { News } from "./news/news.model"
import { ServeStaticModule } from "@nestjs/serve-static"
import { FilesModule } from './files/files.module';
import path from "path"

@Module({
	controllers: [],
	providers: [],
	imports: [
		ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
		// ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, "imgnews") }),
		SequelizeModule.forRoot({
			dialect: "postgres",
			host: process.env.PG_HOST,
			port: Number(process.env.PG_PORT),
			username: process.env.PG_USER,
			password: process.env.PG_PASS,
			database: process.env.PG_DB,
			models: [User, Settings, Vacancies, News],
			autoLoadModels: true,
			/* synchronize: true, */
		}),
		SettingsModule,
		UsersModule,
		VacanciesModule,
		NewsModule,
		AuthModule,
		FilesModule,
	],
})
export class AppModule {}
