import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Event, EventDocument } from "../Schema/events.schema";
import { Model } from "mongoose";
import { IEventEntity } from "../interfaces/IEventEntity";

@Injectable()

export class CreateEventRepository {
    constructor(
        @InjectModel(Event.name) private eventModel: Model<EventDocument>   // Estamos injetando o modelo schema que criamos na pasta Schema e estamos privando a dependencia com o private
    ){}                                                                     // Dentro do parenteses vc vai dizer do o que essa classe depende, ou seja as dependencias da classe. Podem existir classes que não dependam de nada para funcionar a não ser ela mesma

    async execute(event: IEventEntity): Promise<IEventEntity> {             // Estamos tipando o tipo de objeto que vai chegar neste parametro através de uma interface e obrigando o uso de cada uma das props da interface como se fosse um contrato
        const createEvent = new this.eventModel(event);                     // Estamos instanciando o eventModel recebendo os valores de event
        await createEvent.save();                                           // Estamos salvando o modelo na Mongo | Esse .save é herdado de Document que faz parte de um pacote do mongoose, pois estendemos ele ao criar a classe Event
        return createEvent.toObject();                                      // Vai nos retornar os dados limpos somente as que pertencem a entidade sem as propriedades que o Mongo cria

    }
}