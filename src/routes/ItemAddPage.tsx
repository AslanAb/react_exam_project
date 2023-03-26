import { useRef } from "react"
import { decBalance } from "../reducers/BalanceSlice"
import { addHistory } from "../reducers/HistorySlice"
import { addItem } from "../reducers/itemsSlice"
import { useAppDispatch } from "../store"
import { useAppSelector } from "../store"

const ItemAddPage = () => {
    const balance = useAppSelector((state) => state.balanse.balance)
    const name = useRef<string>("")
    const quantity = useRef<number>(0)
    const total_cost = useRef<number>(0)
    const total_price = useRef<number>(0)
    const dispatch = useAppDispatch()
    const addBtn = (id: number, name: string, quantity: number, total_cost: number, total_price: number, one_item_average_price: number, nameOfOperation: string) => {
        if (total_cost <= balance) {
            dispatch(addItem({ id, name, quantity, total_cost, total_price, one_item_average_price }))
            dispatch(decBalance({ decBalanceValue: total_cost }))
            dispatch(addHistory({ id, nameOfOperation, item_name: name, quantity, price: total_cost }))
        } else {
            alert("У Вас недостаточно средств на балансе!")
        }
    }

    return (
        <div>
            <p className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-green-500 hover:-translate-y-1 hover:scale-101 hover:brightness-150 duration-300 m-auto text-2xl m-2 font-extrabold my-8">Покупка товара</p>
            <div className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-green-500 hover:-translate-y-1 hover:scale-101 hover:brightness-150 duration-300">
                Общий баланс: {balance}
            </div>
            <input type="text" placeholder="Наименование товара" onChange={(e) => (name.current = e.target.value)} className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg border-2 border-green-500/100"/>
            <input type="number" placeholder="Количество" onChange={(e) => (quantity.current = e.target.valueAsNumber)} className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg border-2 border-green-500/100"/>
            <input type="number" placeholder="Стоимость закупки" onChange={(e) => (total_cost.current = e.target.valueAsNumber)} className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg border-2 border-green-500/100"/>
            <input type="number" placeholder="Стоимость продажи" onChange={(e) => (total_price.current = e.target.valueAsNumber)} className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg border-2 border-green-500/100"/>
            <button onClick={() => addBtn(Math.random(), name.current, quantity.current, total_cost.current, total_price.current, total_price.current / quantity.current, "Покупка товара")} className="min-w-fit w-40 h-11 flex justify-center items-center mx-3 bg-green-600 rounded-xl hover:brightness-200 duration-300">Добавить на склад</button>
        </div>
    )
}

export default ItemAddPage