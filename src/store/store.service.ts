import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Store } from './schemas/store.schema';

@Injectable()
export class StoreService {

    constructor(
        @InjectModel(Store.name)
        private storeModel : mongoose.Model<Store>
    ){}

    async findAll(): Promise<Store[]>{
        const stores = await this.storeModel.find()
        return stores;   
    }

    async create(store:Store):Promise<Store>{
        const res = await this.storeModel.create(store)
        return res
    }

    async findById(id:string):Promise<Store>{
        const sid = await this.storeModel.findById(id)
        if(!sid){
            throw new NotFoundException('Store not found')
        }   
        return sid
    }

    async updateById(id:string,sid:Store):Promise<Store>{
        return await this.storeModel.findByIdAndUpdate(id,sid,{
            new :true ,
            runValidators: true
        });
    }

    async deleteById(id:string):Promise<Store>{
        return await this.storeModel.findByIdAndDelete(id);
        }
    }
