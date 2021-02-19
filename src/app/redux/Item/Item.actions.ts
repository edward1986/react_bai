import {
    LIST_LOAD_REQUEST,
    LIST_LOAD_SUCCESS,
    LIST_LOAD_FAILURE,
    LIST_REMOVE,
    LIST_ADD,
    LIST_UPDATE,
} from "./Item.types"
import { ItemServiceImpl } from "../../../domain/usecases/ItemService"
import { ItemRepositoryImpl } from "../../../data/repositories/ItemRepositoryImpl"

export const refreshList = async (dispatch: any) => {
    dispatch({ type: LIST_LOAD_REQUEST })
    try {
        const itemRepo = new ItemRepositoryImpl()
        const itemService = new ItemServiceImpl(itemRepo)
        const items = await itemService.GetItems()
        dispatch({ type: LIST_LOAD_SUCCESS, payload: items })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}
export const addItem = async (dispatch: any, payload: any) => {
    const itemRepo = new ItemRepositoryImpl()
    const itemService = new ItemServiceImpl(itemRepo)
    const item = itemService.PostItem(payload)
    Item(dispatch, item, LIST_ADD)
}

export const updateItem = async (dispatch: any, payload: any) => {
    const itemRepo = new ItemRepositoryImpl()
    const itemService = new ItemServiceImpl(itemRepo)
    payload.form = itemService.UpdateItem(payload.form)
    Item(dispatch, payload, LIST_UPDATE)
}

export const removeItem = async (dispatch: any, payload: any) => {
    const itemRepo = new ItemRepositoryImpl()
    const itemService = new ItemServiceImpl(itemRepo)
    itemService.DeleteItem(payload.item)
    Item(dispatch, payload.id, LIST_REMOVE)
}
function Item(dispatch: any, payload: any, type: string) {
    dispatch({ type: LIST_LOAD_REQUEST })
    try {
        dispatch({ type: type, payload: payload })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}
