import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import {users, book, booksInventory, borrowedBooks, bookInventoryBooks, } from 'src/lib/db'
import { AvailabilityStatus } from 'src/enum/availability.enum';
import BorrowedBook from 'src/entities/borrowed_book.entity';
import LibraryInventory from 'src/entities/book_inventory.entity'


@Injectable()
export class BorrowedBookService {
    getBorrowedBooks(){
        return (borrowedBooks);
      }

    // BorrowedBookService
    async borrowBook(borrowedBooksData: BorrowedBook) {
        const { bookId, userId, categoryId } = borrowedBooksData;

        // Check if the book has already been borrowed by the user in the same category
        const existingBorrowedBook = borrowedBooks.some(
            (bb) => bb.bookId === bookId && bb.userId === userId && bb.categoryId === categoryId
        );

        if (existingBorrowedBook) {
            throw new HttpException('This book is already borrowed by the user in the same category!', HttpStatus.CONFLICT);
        }

        // Check if the requested book exists and matches the category
        const bookToBorrow = book.find((b) => b.bookId === bookId && b.categoryId === categoryId);
        if (!bookToBorrow) {
            throw new HttpException('Book not available or does not exist!', HttpStatus.NOT_FOUND);
        }
        
        // Check if the book is available in the inventory
        const isBookAvailable = bookInventoryBooks.some(
            (avi) => avi.bookId === bookId && avi.availability_status === AvailabilityStatus.AVAILABLE
        );

        if (!isBookAvailable) {
            throw new HttpException('Book is not available', HttpStatus.NOT_FOUND);
        }
        
        // Create a new borrowed book record
        const newBorrowedBook = {
            id: borrowedBooks.length + 1, // Unique ID assignment
            ...borrowedBooksData,
            borrowedDate: new Date(), // Auto-set the borrowed date
            dueDate: this.calculateDueDate(), // Calculate the due date
        };

        borrowedBooks.push(newBorrowedBook);
        return newBorrowedBook;
    }

    // Method to calculate the due date (e.g., 2 weeks from today)
    private calculateDueDate(): Date {
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14); // Adds 14 days
        return dueDate;
    }
}

    
    






