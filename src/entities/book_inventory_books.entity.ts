import { AvailabilityStatus } from "../enum/availability.enum";

export default class BookInventoryBooks {
    bookId: number;
    bookInventoryId: number;
    availability_status: AvailabilityStatus

    constructor(bookId:number, bookInventoryId:number, availability_status:AvailabilityStatus){
        this.bookId =bookId;
        this.bookInventoryId = bookInventoryId;
        this.availability_status = availability_status;
    }
}