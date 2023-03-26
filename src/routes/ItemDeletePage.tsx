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
            <p className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-blue-500 hover:-translate-y-1 hover:scale-101 hover:brightness-150 duration-300 m-auto text-2xl m-2 font-extrabold my-8">Удаление товара</p>
            {items.map((item) => (
                <div key={item.id} className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-sky-200 hover:brightness-110 duration-300">
                    <p>Наименование товара: {item.name}</p>
                    <p>Количество товара на складе: {item.quantity}</p>
                    <span>Количество для удаления: </span>
                    <input type="number" onChange={(e) => setinputValue(e.target.valueAsNumber)} value={inputValue} className="max-w-fit p-1 m-2 h-12 h-fit rounded-lg border-2 border-blue-500/100"/>
                    <button onClick={() => deleteBtn(item.id, item.quantity, inputValue, "Удаление", item.name, inputValue * (item.total_cost / item.quantity))} className="min-w-fit w-40 h-11 flex justify-center items-center bg-blue-600 rounded-xl hover:brightness-200 duration-300">delete</button>
                </div>
            ))}
        </div>
    )
}

export default ItemDeletePage