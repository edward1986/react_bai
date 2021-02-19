import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"

export interface TodoService {
    GetTodos(): Promise<Todo[]>
    PostTodo(todo: Todo): Todo
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
}
