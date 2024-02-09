import { Category } from "../schemas/store.schema"

export class createStoreDto{
    readonly s_name:string
    readonly s_location:string
    readonly s_phone:number
    readonly s_category:Category    
}