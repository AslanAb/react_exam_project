import { useAppSelector } from "../store"


const HistoryPage = () => {
    const histories = useAppSelector((state) => state.history.history)
    return (
        <ol>
            {histories.map((el) => (
                <li key={el.id} className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-orange-200 hover:brightness-110 duration-300">
                    <span>Наименование операции: {el.nameOfOperation}</span>
                    <span>Товар: {el.item_name}</span>
                    <span>в количестве: {el.quantity}</span>
                    <span>на сумму: {el.price}</span>
                </li>
            ))}
        </ol>
    )
}

export default HistoryPage