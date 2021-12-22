import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Nest Blog')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('API Inventario')
    .setDescription(
      'Esta es una API Creada con NestJS con un CRUD básico para un Blog.',
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
};
