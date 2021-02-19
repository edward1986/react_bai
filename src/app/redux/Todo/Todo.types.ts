export const LIST_ADD = "LIST_ADD"
export const LIST_LOAD_REQUEST = "LIST_LOAD_REQUEST"
export const LIST_LOAD_SUCCESS = "LIST_LOAD_SUCCESS"
export const LIST_LOAD_FAILURE = "LIST_LOAD_FAILURE"
export const LIST_REMOVE = "LIST_REMOVE"
export const LIST_UPDATE = "LIST_UPDATE"
export type TodoProps = {
    todos: Todo[]
    refreshList: () => Todo[]
}

export type TodoActionType = RefreshTodoListSuccess

export interface RefreshTodoListSuccess {
    type: typeof LIST_LOAD_SUCCESS
    payload: Todo[]
}

export interface RefreshTodoListSuccess {
    type: typeof LIST_LOAD_SUCCESS
    payload: Todo[]
}

export interface Todo {
    id: number
    name: string
}
