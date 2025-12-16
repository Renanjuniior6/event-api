import { Injectable } from "@nestjs/common";
import { CreateEventRepository } from "../repositories/create-event.repository";
import { IEventEntity } from "../interfaces/IEventEntity";

@Injectable()

export class CreateEventService {                                                       // Service vai ser dependente do repository, service precisa ter o repository injetado nela
    constructor(private readonly createEventRepository: CreateEventRepository){}        // (private) Quem for acessar a classe de service NÃO vai poder chamar as dependencias repository que está dentro do constructor da classe de serviços
                                                                                        // readonly você não pode alterar repository através da classe service, somente a leitura do repository
    async execute(event: IEventEntity): Promise<IEventEntity> {
        let newEvent = await this.createEventRepository.execute(event);                 // Sempre que for acessar uma injeção de dependencias do constructor nós temos que usar o this para acessar essas dependencias 
        return newEvent;
    }

    async findEvents() {
        return await this.createEventRepository.getEvents();
    }

    async findById() {
        
    }
}