import { Todo } from "../entities/Todo"

export interface TodoRepository {
    GetTodos(): Promise<Todo[]>
    PostTodo(todo: Todo): Todo
    UpdateTodo(todo: Todo, index: number): Todo
    DeleteTodo(todo: Todo, index: number): boolean
}
