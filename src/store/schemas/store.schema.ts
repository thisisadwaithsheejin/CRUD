import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    ELECTRONICS = 'Electronics',
    DRESS = 'Dress',
    BAGS = 'Bags',
    SHOES ='Shoes',
}

@Schema({
    timestamps:true
})
export class Store{
    
    @Prop()
    s_name:string

    @Prop()
    s_location:string

    @Prop()
    s_phone:number

    @Prop()
    s_category:Category
}

export const StoreSchema = SchemaFactory.createForClass(Store)