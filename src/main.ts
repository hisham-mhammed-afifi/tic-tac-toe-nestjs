import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

const whiteList = (str: string) => {
  if (!str) return '*';
  const arr = str.split(',');
  if (arr.length === 1) return arr[0];
  return arr;
};

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  dotenv.config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: { origin: whiteList(process.env.ORIGIN), credentials: true },
  });
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  const config = new DocumentBuilder()
    .setTitle('Tic Tac Toe')
    .setDescription('Play a new Game')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      customJs:
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.0.0/swagger-ui-bundle.js',
    },
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
