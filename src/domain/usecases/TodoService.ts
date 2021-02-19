import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"

export interface TodoService {
    GetTodos(): Promise<Todo[]>
    PostTodo(todo: Todo): Todo
    UpdateTodo(todo: Todo): Todo
    DeleteTodo(todo: Todo): boolean
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

    UpdateTodo(payload: Todo): Todo {
        return this.todoRepo.UpdateTodo(new Todo(payload.id, payload.task, payload.isCompleted))
    }

    DeleteTodo(payload: any): boolean {
        return this.todoRepo.DeleteTodo(new Todo(payload.id, payload.task, payload.isCompleted))
    }
}
