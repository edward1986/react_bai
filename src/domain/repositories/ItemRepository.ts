import { Item } from "../entities/Item"

export interface ItemRepository {
    GetItems(): Promise<Item[]>
    PostItem(item: Item): Item
    UpdateItem(item: Item): Item
    DeleteItem(item: Item): boolean
}
