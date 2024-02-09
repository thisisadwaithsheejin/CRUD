import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StoreService } from './store.service';
import { Store } from './schemas/store.schema';
import { createStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller('stores')
export class StoreController {
    constructor(private storeService:StoreService){}

    @Get()
    async getAllStores():Promise<Store[]>{
        return this.storeService.findAll()
    }

    @Post()
    async createStore(
        @Body()
        store:createStoreDto
        ): Promise<Store>{
        return this.storeService.create(store);
    }

    @Get(':id')
    async getStore(
        @Param('id')
        id:string,
    ):Promise<Store>{
        return this.storeService.findById(id);
    }
    @Put(':id')
    async UpdateStore(
        @Param('id')
        id:string,
        @Body()
        store:UpdateStoreDto
        ): Promise<Store>{
        return this.storeService.updateById(id,store)
    }
    @Delete(':id')
    async deleteStore(
        @Param('id')
        id:string,
    ):Promise<Store>{
        return this.storeService.deleteById(id);
    }

}
