import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookApiModule } from './book-api/module/book-api.module';
import { AuthModule } from './auth/modules/auth.module';

@Module({
  imports: [BookApiModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
