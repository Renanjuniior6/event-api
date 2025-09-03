import { Body, Controller, Post } from '@nestjs/common';
import { CreateEventService } from './services/create-event.service';
import type { IEventEntity } from './interfaces/IEventEntity';

@Controller('event')                                                // Vai ser o nome do nosso controller e o nosso endpoint principal, ex: http://localhost:3000/event
export class EventController { 
    constructor(private readonly createEventService: CreateEventService){}

@Post('create')                                                     // Faria post no endpoint http://localhost:3000/event/ caso não tivesse o 'create' iria ser somente um post em '/event'
async create(@Body() event: IEventEntity): Promise<IEventEntity>{
    return this.createEventService.execute(event);
}
}
