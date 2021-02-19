import { Item } from "../entities/Item"
import { ItemRepository } from "../repositories/ItemRepository"

export interface ItemService {
    GetItems(): Promise<Item[]>
    PostItem(item: Item): Item
    UpdateItem(item: Item): Item
    DeleteItem(item: Item): boolean
}

export class ItemServiceImpl implements ItemService {
    itemRepo: ItemRepository
    constructor(ir: ItemRepository) {
        this.itemRepo = ir
    }

    async GetItems(): Promise<Item[]> {
        return this.itemRepo.GetItems()
    }

    PostItem(payload: any): Item {
        return this.itemRepo.PostItem(new Item(payload.id, payload.name))
    }

    UpdateItem(payload: Item): Item {
        return this.itemRepo.UpdateItem(new Item(payload.id, payload.name))
    }

    DeleteItem(payload: any): boolean {
        return this.itemRepo.DeleteItem(new Item(payload.id, payload.name))
    }
}
