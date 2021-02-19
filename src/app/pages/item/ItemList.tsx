import React, { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { updateItem, addItem, refreshList, removeItem } from "../../redux/Item/Item.actions"
import { ItemProps, Item } from "../../redux/Item/Item.types"

interface RootState {
    items: any
}

function GetList(props: any) {
    const [show, setShow] = useState(false)
    const [form, setForm] = useState(Object.assign({}, props.item))

    function handleChange(event: any) {
        setForm({ id: form.id, name: event.target.value })
    }
    function itemUpdate(event: any) {
        props.update({ form: form, index: props.index })
        setShow(!show)
    }

    return (
        <li>
            {props.item.name}
            {!show && <button onClick={() => setShow(!show)}>edit</button>}
            {show && <input type="text" value={form.name} onChange={handleChange} />}
            {show && <button onClick={itemUpdate}>update</button>}
            {show && <button onClick={() => setShow(!show)}>cancel</button>}
            <button
                onClick={() => {
                    props.remove(props.index)
                }}
            >
                remove
            </button>
        </li>
    )
}

const ItemList = ({ items }: ItemProps) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({ id: 0, name: "" })
    const handleClick = () => {
        dispatch(refreshList)
    }
    const handleItemRemove = (id: number) => {
        removeItem(dispatch, id)
    }
    const handleItemUpdate = (payload: any) => {
        updateItem(dispatch, payload)
    }

    function handleChangeForm(event: any) {
        setForm({ id: form.id, name: event.target.value })
    }

    const handleItemAdd = (payload: any) => {
        addItem(dispatch, form)
    }
    return (
        <div>
            <button onClick={handleClick}>Refresh</button>
            <br />
            {items.length != 0 && <input type="text" value={form.name} onChange={handleChangeForm} />}
            {items.length != 0 && <button onClick={handleItemAdd}>Add</button>}
            <ul>
                {items.map((item: Item, index) => (
                    <GetList
                        key={item.id}
                        item={item}
                        index={index}
                        update={handleItemUpdate}
                        remove={handleItemRemove}
                    />
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        items: state.items.items,
    }
}

export default connect(mapStateToProps)(ItemList)
