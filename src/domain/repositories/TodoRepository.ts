import { Todo } from "../entities/Todo"

export interface TodoRepository {
    GetTodos(): Promise<Todo[]>
    PostTodo(todo: Todo): Todo
    UpdateTodo(todo: Todo): Todo
    DeleteTodo(todo: Todo): boolean
}
