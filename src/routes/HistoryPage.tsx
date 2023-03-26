import { useAppSelector } from "../store"


const HistoryPage = () => {
    const histories = useAppSelector((state) => state.history.history)
    return (
        <div>
            {histories.map((el) => (
                <div key={el.id}>
                    <span>Наименование операции: {el.nameOfOperation}</span>
                    <span>Товар: {el.item_name}</span>
                    <span>в количестве: {el.quantity}</span>
                    <span>на сумму: {el.price}</span>
                </div>
            ))}
        </div>
    )
}

export default HistoryPage