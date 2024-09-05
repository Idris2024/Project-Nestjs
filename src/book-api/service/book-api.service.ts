import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import Book from 'src/entities/book.entity';
import { book  }from 'src/lib/db'

//get book
@Injectable()
export class BookApiService {
    getBook() {
        return (book);
      }
      // getBookById
    async getBookById(bookId: number) {
        const existingBook = book.find((b) => b.bookId.toString() === bookId.toString() || b.categoryId.toString() === bookId.toString());
        
        if (!existingBook) {
          throw new HttpException('Book not found!', HttpStatus.NOT_FOUND);
        }
        
        return existingBook;
      }
      
}





