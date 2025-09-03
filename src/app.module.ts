import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from "@nestjs/config"

@Module({
  imports: [
    EventModule,
    ConfigModule.forRoot({ isGlobal: true }), // deixa disponível em toda a aplicação 

    // configuração assíncrona do Mongoose para usar .env
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
