import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EventModule,
    MongooseModule.forRoot('mongodb+srv://junior679_db_user:OmhFmEG9xc9GNaha@nestjs-cluster.xwxdkxx.mongodb.net/?retryWrites=true&w=majority&appName=Nestjs-Cluster') // Não esquce de colocar a senha do usuario
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
