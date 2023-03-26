import { useAppSelector } from "../store"


const HistoryPage = () => {
    const histories = useAppSelector((state) => state.history.history)
    return (
        <div>
            <ul>
                {histories.map((el) => (
                    <li key={el.id} className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-orange-200 hover:brightness-110 duration-300">
                        <div>
                            <span>{el.nameOfOperation}</span>
                            <span> товара: {el.item_name},</span>
                            <span> в количестве: {el.quantity},</span>
                            <span> на сумму: {el.price}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HistoryPage