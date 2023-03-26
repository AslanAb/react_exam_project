import { useAppDispatch } from "../store"
import { useAppSelector } from "../store"
import { deleteItem } from "../reducers/itemsSlice"
import { useState } from "react"
import { addHistory } from "../reducers/HistorySlice"


const ItemDeletePage = () => {
    const [inputValue, setinputValue] = useState(0)
    const dispatch = useAppDispatch()
    const items = useAppSelector((state) => state.items.items)

    const deleteBtn = (id: number, quantity: number, delete_quantity: number, nameOfOperation: string, name: string, price: number) => {
        if (quantity >= delete_quantity) {
            dispatch(deleteItem({ id: id, delete_quantity: delete_quantity }))
            dispatch(addHistory({ id, nameOfOperation, item_name: name, quantity:delete_quantity, price }))
        } else {
            alert("Некорректное число! Вы ввели количество превышающую запасы на складе")
        }
        setinputValue(0)
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <input type="number" onChange={(e) => setinputValue(e.target.valueAsNumber)} value={inputValue} />
                    <button onClick={() => deleteBtn(item.id, item.quantity, inputValue, "Удаление", item.name, inputValue * (item.total_cost / item.quantity))}>delete</button>
                </div>
            ))}
        </div>
    )
}

export default ItemDeletePage