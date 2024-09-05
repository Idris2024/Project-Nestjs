import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookApiModule } from './book-api/module/book-api.module';
import { AuthModule } from './auth/modules/auth.module';
import { BorrowedBookService } from './borrowed-book/borrowedBookService/borrowed-book.service';
import { BorrowedBookController } from './borrowed-book/borrowedBookcontroller/borrowed-book.controller';
import { BorrowedBookModule } from './borrowed-book/borrowed-book.module';
@Module({
  imports: [BookApiModule, AuthModule, BorrowedBookModule],
  controllers: [AppController, BorrowedBookController],
  providers: [AppService, BorrowedBookService],
})
export class AppModule {}
