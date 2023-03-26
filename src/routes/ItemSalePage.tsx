import { useAppDispatch } from "../store"
import { useAppSelector } from "../store"
import { deleteItem } from "../reducers/itemsSlice"
import { incBalance } from "../reducers/BalanceSlice"
import { addHistory } from "../reducers/HistorySlice"
import { useState } from "react"

const ItemSalePage = () => {
    const [inputValue, setinputValue] = useState(0)
    const dispatch = useAppDispatch()
    const items = useAppSelector((state) => state.items.items)
    const balance = useAppSelector((state) => state.balanse.balance)
    const saleBtn = (id: number, quantity: number, inputValue: number, incValue: number, nameOfOperation: string, item_name: string) => {
        if (quantity >= inputValue) {
            dispatch(deleteItem({ id: id, delete_quantity: inputValue }))
            dispatch(incBalance({ incBalanceValue: incValue }))
            dispatch(addHistory({ id, nameOfOperation, item_name, quantity: inputValue, price: incValue }))
        } else {
            alert("Некорректное число! Вы ввели количество превышающую запасы на складе")
        }
        setinputValue(0)
    }
    return (
        <div>
            <div className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-red-500 hover:-translate-y-1 hover:scale-101 hover:brightness-150 duration-300">
                Общий баланс: {balance}
            </div>
            {items.map((item) => (
                <div key={item.id} className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-red-200 hover:brightness-110 duration-300">
                    <p>Наименование товара: {item.name}</p>
                    <p>Количество товара на складе: {item.quantity}</p>
                    <p>Сумма от продажи: {inputValue ? inputValue * item.one_item_average_price : 0}</p>
                    <span>Количество для продажи: </span>
                    <input type="number" onChange={(e) => setinputValue(e.target.valueAsNumber)} value={inputValue} className="max-w-fit p-1 m-2 h-12 h-fit rounded-lg border-2 border-blue-500/100"/>
                    <button onClick={() => saleBtn(item.id, item.quantity, inputValue, item.one_item_average_price * inputValue, "Продажа", item.name)} className="min-w-fit w-40 h-11 flex justify-center items-center bg-red-600 rounded-xl hover:brightness-200 duration-300">Продать</button>
                </div>
            ))}
        </div>
    )
}

export default ItemSalePage