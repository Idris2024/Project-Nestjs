import { Controller, Get, Param } from '@nestjs/common';
import {BookApiService} from '../service/book-api.service'
import { book } from 'src/lib/db';
import Book from 'src/entities/book.entity';
@Controller('book-api') 
 export class BookApiController { 
constructor(private readonly bookApiService: BookApiService) {}

    @Get('/Booklist')
    getBook(){
        return this.bookApiService.getBook();
      }
      @Get('view/:id/:catId')
        async BooKId(
          @Param('id'||'categoryId') bookIdData: number) {
             const message = await this.bookApiService.getBookById(bookIdData)
          return message;

  }
}