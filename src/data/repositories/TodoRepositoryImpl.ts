import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class TodoDTO {
    id = 0
    task = ""
    isCompleted = false
}
// eslint-disable-next-line prefer-const
let todos = [new Todo(0, "test todo", false)]
export class TodoRepositoryImpl implements TodoRepository {
    jsonUrl =
        "https://gist.githubusercontent.com/janithl/6bfbd787a0361c170ac760e8fb5ba0fd/raw/a0ffacb7c0fc21a0266371f632cf4107f80362f4/todolist.json"

    async GetTodos(): Promise<Todo[]> {
        return todos.map((todo: TodoDTO) => new Todo(todo.id, todo.task, todo.isCompleted))
    }

    PostTodo(todo: Todo): Todo {
        todos.push(todo)
        return todo
    }
}
