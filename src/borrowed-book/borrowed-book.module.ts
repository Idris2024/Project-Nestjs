import { Module } from '@nestjs/common';
import { BorrowedBookService } from './borrowedBookService/borrowed-book.service';
import { BorrowedBookController } from './borrowedBookcontroller/borrowed-book.controller';

@Module({
    providers: [BorrowedBookService ],
    controllers: [BorrowedBookController]
  })
export class BorrowedBookModule {}
