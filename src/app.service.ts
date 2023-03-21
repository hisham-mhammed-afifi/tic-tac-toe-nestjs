import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getSwaggerCss() {
    return await this.httpService
      .get('https://cdn.jsdelivr.net/npm/swagger-ui-dist@3.20.3/swagger-ui.css')
      .toPromise();
  }

  async getSwaggerJs() {
    return await this.httpService
      .get(
        'https://cdn.jsdelivr.net/npm/swagger-ui-dist@3.20.3/swagger-ui-standalone-preset.js',
      )
      .toPromise();
  }
}
