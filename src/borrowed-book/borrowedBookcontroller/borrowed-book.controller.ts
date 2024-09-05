import { Body, Controller, Get, Post } from '@nestjs/common';
import { BorrowedBookService } from '../borrowedBookService/borrowed-book.service';
import BorrowedBook from 'src/entities/borrowed_book.entity';

@Controller('borrowed-book')
export class BorrowedBookController {
    constructor(private borrowedBookService:BorrowedBookService ) {
        //
    }
    @Post('/BorrowBook')
    async signin(@Body() borrowedBooksData: BorrowedBook) {
        return await this.borrowedBookService.borrowBook(borrowedBooksData);
}

@Get('/BorrowBooklist')
getBorrowedBooks(){
    return this.borrowedBookService.getBorrowedBooks();
  }
  }




 