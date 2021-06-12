import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { HomeModule } from './home/home.module';
import { NewsModule } from './news/news.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, SettingsModule, HomeModule, NewsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
