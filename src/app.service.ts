import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getStatus(): string {
    return 'API DIO Bank Status: Online';
  }

}
