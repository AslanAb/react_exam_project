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
            <div>
                Общий баланс {balance}
            </div>
            {items.map((item) => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <p>Сумма от продажи: {inputValue ? inputValue * item.one_item_average_price : 0}</p>
                    <input type="number" onChange={(e) => setinputValue(e.target.valueAsNumber)} value={inputValue} />
                    <button onClick={() => saleBtn(item.id, item.quantity, inputValue, item.one_item_average_price * inputValue, "Продажа", item.name)}>Sale</button>
                </div>
            ))}
        </div>
    )
}

export default ItemSalePage