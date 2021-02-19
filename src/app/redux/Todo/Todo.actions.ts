import { TodoServiceImpl } from "../../../domain/usecases/TodoService"
import { TodoRepositoryImpl } from "../../../data/repositories/TodoRepositoryImpl"
import { LIST_ADD, LIST_LOAD_FAILURE, LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS } from "./Todo.types"
export const refreshList = async (dispatch: any) => {
    dispatch({ type: LIST_LOAD_REQUEST })
    try {
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todos = await todoService.GetTodos()
        dispatch({ type: LIST_LOAD_SUCCESS, payload: todos })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}
export const addTodo = async (dispatch: any, payload: any) => {
    const todoRepo = new TodoRepositoryImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    const todo = todoService.PostTodo(payload)
    Todo(dispatch, todo, LIST_ADD)
}

function Todo(dispatch: any, payload: any, type: string) {
    dispatch({ type: LIST_LOAD_REQUEST })
    try {
        dispatch({ type: type, payload: payload })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}
