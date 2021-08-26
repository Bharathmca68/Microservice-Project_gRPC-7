import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SubscribersDocument = Subscribers & Document;

@Schema()
export class Subscribers {
    @Prop()
    id: string;

    @Prop({ unique: true })
    email: string;

    @Prop()
    name: string;
}

export const subscribersSchema = SchemaFactory.createForClass(Subscribers);