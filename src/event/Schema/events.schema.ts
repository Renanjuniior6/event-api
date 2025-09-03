import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>; // Estamos criando um apelido (alias) para quando for chamar a classe Events ela ser atendida por EventDocument

@Schema() // Decorator para o nosso modelo do banco de dados (schema do Mongo)
export class Event extends Document { // Vai estender Document que é uma classe que faz parte do pacote do mongoose
  
  @Prop({ required: true }) // Vai validar os dados como se fosse o Yup
  name: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  hour: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  value: number;
}

export const EventSchema = SchemaFactory.createForClass(Event) // Vai converter essa classe em um schema real