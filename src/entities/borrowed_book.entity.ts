export default class BorrowedBook {
    bookId: number;
    userId: number;
    borrowedDate: Date;
    returnedDate: Date;
    categoryId: number;

    constructor(bookId:number, userid:number, borrowedDate:Date, returnedDate:Date, dueDate:Date, categoryId:number) {
        this.bookId = bookId
        this.userId = userid;
        this.borrowedDate = borrowedDate;
        this.returnedDate = returnedDate;
        this.categoryId = categoryId
    }
}

