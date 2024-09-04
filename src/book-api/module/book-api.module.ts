import { Module } from '@nestjs/common';
import { BookApiService } from '../service/book-api.service';
import { BookApiController } from '../controllers/book-api.controller';

@Module({
  providers: [BookApiService],
  controllers: [BookApiController]
})
export class BookApiModule {}
