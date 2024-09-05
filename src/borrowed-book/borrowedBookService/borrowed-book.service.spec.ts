import { Test, TestingModule } from '@nestjs/testing';
import { BorrowedBookService } from 'src/borrowed-book/borrowedBookService/borrowed-book.service';

describe('BorrowedBookService', () => {
  let service: BorrowedBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BorrowedBookService],
    }).compile();

    service = module.get<BorrowedBookService>(BorrowedBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
