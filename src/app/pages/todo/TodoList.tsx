import React, { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { addTodo, refreshList, removeTodo, updateTodo } from "../../redux/Todo/Todo.actions"
import { TodoProps, Todo } from "../../redux/Todo/Todo.types"

interface RootState {
    todos: any
}

function GetList(props: any) {
    const [show, setShow] = useState(false)
    const [form, setForm] = useState(Object.assign({}, props.todo))

    function handleChange(event: any) {
        setForm({ id: form.id, task: event.target.value, isCompleted: false })
    }
    function todoUpdate(event: any) {
        props.update({ form: form, index: props.index })
        setShow(!show)
    }

    function handleChangeCheckbox(event: any) {
        setForm({ id: form.id, task: form.task, isCompleted: event.target.value })
    }

    return (
        <li>
            {props.index}
            {props.todo.task}
            {!show && <button onClick={() => setShow(!show)}>edit</button>}
            {show && (
                <div>
                    <input type="text" value={form.task} onChange={handleChange} />
                    <input type="checkbox" value={form.isCompleted ? 1 : 0} onChange={handleChangeCheckbox} />
                    <button onClick={todoUpdate}>update</button>
                    <button onClick={() => setShow(!show)}>cancel</button>
                </div>
            )}
            <button
                onClick={() => {
                    props.remove(props.index, props.todo)
                }}
            >
                remove
            </button>
        </li>
    )
}

const TodoList = ({ todos }: TodoProps) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({ id: 0, task: "", isCompleted: false })
    const handleClick = () => {
        dispatch(refreshList)
    }
    const handleTodoRemove = (index: number, todo: any) => {
        removeTodo(dispatch, { index: index, todo: todo })
    }
    const handleTodoUpdate = (payload: any) => {
        updateTodo(dispatch, payload)
    }

    function handleChangeForm(event: any) {
        setForm({ id: form.id, task: event.target.value, isCompleted: form.isCompleted })
    }

    const handleTodoAdd = (payload: any) => {
        addTodo(dispatch, {
            id: 1,
            task: form.task,
            isCompleted: form.isCompleted,
        })
    }

    function handleChangeCheckbox(event: any) {
        setForm({ id: form.id, task: form.task, isCompleted: event.target.value })
    }

    return (
        <div>
            <button onClick={handleClick}>Refresh</button>
            <br />
            {todos.length != 0 && (
                <div>
                    <input type="text" value={form.task} onChange={handleChangeForm} />
                    <input type="checkbox" value={form.isCompleted ? 1 : 0} onChange={handleChangeCheckbox} />
                    <button onClick={handleTodoAdd}>Add</button>
                </div>
            )}
            <ul>
                {todos.map((todo: Todo, index) => (
                    <GetList
                        key={index}
                        todo={todo}
                        index={index}
                        update={handleTodoUpdate}
                        remove={handleTodoRemove}
                    />
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    console.log(state)
    return {
        todos: state.todos.todos,
    }
}

export default connect(mapStateToProps)(TodoList)
