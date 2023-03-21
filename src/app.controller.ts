import { Controller, Get, Header } from '@nestjs/common';
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
  @Header('Content-Type', 'text/css')
  async getSwaggerCss(): Promise<any> {
    const response = await this.appService.getSwaggerCss();
    return response.data;
  }

  @Get('/api/swagger-ui-standalone-preset.js')
  @ApiOperation({ summary: 'Swagger JS.' })
  @Header('Content-Type', 'application/javascript')
  async getSwaggerJs(): Promise<any> {
    const response = await this.appService.getSwaggerJs();
    return response.data;
  }
}
