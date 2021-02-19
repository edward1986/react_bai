import { Todo } from "../../../domain/entities/Todo"
import {
    LIST_ADD,
    LIST_LOAD_FAILURE,
    LIST_LOAD_REQUEST,
    LIST_LOAD_SUCCESS,
    LIST_REMOVE,
    LIST_UPDATE,
} from "./Todo.types"
const initialState = {
    loading: false,
    todos: [],
    showEdit: false,
}
function todos(state = initialState, action: any) {
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
                todos: action.payload,
                loading: false,
            }
        case LIST_ADD:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                loading: false,
            }
        default:
            return state
    }
}
export default todos
