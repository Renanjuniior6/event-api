import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { CreateEventService } from './services/create-event.service';
import { CreateEventRepository } from './repositories/create-event.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './Schema/events.schema';

@Module({                                                                 // Estamos injetando e exportando as classes dentro de Modules
  imports: [ 
    MongooseModule.forFeature([{name: Event.name, schema: EventSchema}])  // Configuração necessária em relação com o pacote do Mongoose que instalamos
  ],
  controllers: [EventController], 
  providers: [CreateEventService, CreateEventRepository],                 // Eu estou dizendo aqui do que esse Module precisa para trabalhar
  exports: [CreateEventService, CreateEventRepository]                    // Estou exportando essas classes caso algum outro Module precise acessar essas classes
})
export class EventModule {}
