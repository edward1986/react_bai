import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"

export interface TodoService {
    GetTodos(): Promise<Todo[]>
    PostTodo(todo: Todo): Todo
    UpdateTodo(todo: Todo, index: number): Todo
    DeleteTodo(todo: Todo, index: number): boolean
}

export class TodoServiceImpl implements TodoService {
    todoRepo: TodoRepository
    constructor(ir: TodoRepository) {
        this.todoRepo = ir
    }

    async GetTodos(): Promise<Todo[]> {
        return this.todoRepo.GetTodos()
    }

    PostTodo(payload: any): Todo {
        return this.todoRepo.PostTodo(new Todo(payload.id, payload.task, payload.isCompleted))
    }

    DeleteTodo(payload: any, index: number): boolean {
        return this.todoRepo.DeleteTodo(new Todo(payload.id, payload.task, payload.isCompleted), index)
    }

    UpdateTodo(payload: any, index: number): Todo {
        return this.todoRepo.UpdateTodo(new Todo(payload.id, payload.task, payload.isCompleted), index)
    }
}
