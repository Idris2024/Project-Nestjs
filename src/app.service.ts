import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getName(): string {
    return 'My name is Jamiu Ademosu';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
