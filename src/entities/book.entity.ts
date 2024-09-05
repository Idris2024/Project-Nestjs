import { Injectable } from '@nestjs/common';

@Injectable()
export default class Book {
    bookId: number;
    title: string;
    categoryId: number;
    author: String;
    description: String;
    publication_year: Number

    constructor(title:string, categoryId:number, author:string, description:string, publication_year:Number){
        this.bookId = 0;
        this.title = title;
        this.categoryId = categoryId;
        this.author = author;
        this.description = description;
        this.publication_year = publication_year
    }
}