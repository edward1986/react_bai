import { Item } from "../../../domain/entities/Item"
import {
    LIST_LOAD_REQUEST,
    LIST_LOAD_SUCCESS,
    LIST_LOAD_FAILURE,
    LIST_REMOVE,
    LIST_UPDATE,
    LIST_ADD,
} from "./Item.types"

const initialState = {
    loading: false,
    items: [],
    showEdit: false,
}
class ItemDTO {
    id = 0
    name = ""
}
function items(state = initialState, action: any) {
    switch (action.type) {
        case LIST_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LIST_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case LIST_LOAD_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            }
        case LIST_ADD:
            return {
                ...state,
                items: [...state.items, action.payload],
                loading: false,
            }
        case LIST_REMOVE:
            return {
                ...state,
                items: [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1)],
                loading: false,
            }
        case LIST_UPDATE:
            const form = action.payload.form
            const index = action.payload.index
            return {
                ...state,
                items: state.items.map((item: ItemDTO, i) => (i === index ? form : item)),
                loading: false,
            }
        default:
            return state
    }
}
export default items
