import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Hello world.' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/swagger-ui.css')
  @ApiOperation({ summary: 'Swagger CSS.' })
  async getSwaggerCss(): Promise<any> {
    const response = await this.appService.getSwaggerCss();
    return response.data;
  }

  @Get('/api/swagger-ui-standalone-preset.js')
  @ApiOperation({ summary: 'Swagger JS.' })
  async getSwaggerJs(): Promise<any> {
    const response = await this.appService.getSwaggerJs();
    return response.data;
  }
}
