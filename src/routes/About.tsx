import { useAppSelector } from "../store"
import ChartComponent from "../components/ChartComponent"


const About = () => {
    const items = useAppSelector((state) => state.items.items)
    const balance = useAppSelector((state) => state.balanse.balance)

    const total_quantity = () => {
        let total = 0
        items.forEach(el => total += el.quantity)
        return total
    }
    const total_cost = () => {
        let total = 0
        items.forEach(el => total += el.total_cost)
        return total
    }
    const total_price = () => {
        let total = 0
        items.forEach(el => total += el.total_price)
        return total
    }

    return (
        <div>
            {/* <div>
                {items.map((item) => (
                    <div key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.one_item_average_price}</p>
                        <p>{item.quantity}</p>
                        <p>{item.total_cost}</p>
                        <p>{item.total_price}</p>
                    </div>
                ))}
            </div> */}
            <div className="h-full">
                <p className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-yellow-500 hover:-translate-y-1 hover:scale-101 hover:brightness-150 duration-300">Общая сумма денег на балансе склада: {balance}</p>
                <p className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-yellow-500 hover:-translate-y-1 hover:scale-101 hover:brightness-150 duration-300">Общее количество товаров: {total_quantity()}</p>
                <p className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-yellow-500 hover:-translate-y-1 hover:scale-101 hover:brightness-150 duration-300">Общая сумма себестоимости товаров: {total_cost()}</p>
                <p className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-yellow-500 hover:-translate-y-1 hover:scale-101 hover:brightness-150 duration-300">Общая сумма продажи товаров: {total_price()}</p>
                <p className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-yellow-500 hover:-translate-y-1 hover:scale-101 hover:brightness-150 duration-300">Больше всего товара:
                    {items.length > 0
                        ? items.find(el => el.quantity === Math.max(...items.map(el => el.quantity)))?.name
                        : " нету товаров"}
                    <span> - в количестве
                        {items.length > 0
                            ? Math.max(...items.map(el => el.quantity))
                            : " 0"}
                    </span>
                </p>
                <p className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-yellow-500 hover:-translate-y-1 hover:scale-101 hover:brightness-150 duration-300">Меньше всего товара:
                    {items.length > 0
                        ? items.find(el => el.quantity === Math.min(...items.map(el => el.quantity)))?.name
                        : " нету товаров"}
                    <span> - в количестве
                        {items.length > 0
                            ? Math.min(...items.map(el => el.quantity))
                            : " 0"}
                    </span>
                </p>
                <p className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-yellow-500 hover:-translate-y-1 hover:scale-101 hover:brightness-150 duration-300">Наибольшая общая стоимость продажи у товара:
                    {items.length > 0
                        ? items.find(el => el.total_price === Math.max(...items.map(el => el.total_price)))?.name
                        : " нету товаров"}
                    <span> - в размере
                        {items.length > 0
                            ? Math.max(...items.map(el => el.total_price))
                            : " 0"}
                    </span>
                </p>
                <p className="max-w-fit p-2 m-2 h-12 h-fit rounded-lg bg-yellow-500 hover:-translate-y-1 hover:scale-101 hover:brightness-150 duration-300">Наименьшая общая стоимость продажи у товара: 
                {items.length > 0
                    ? items.find(el => el.total_price === Math.min(...items.map(el => el.total_price)))?.name
                    : " нету товаров"}
                    <span> - в размере {items.length > 0
                    ? Math.min(...items.map(el => el.total_price))
                    : " 0"}
                    </span>
                    </p>
            </div>
            <div className="border-2 border-indigo-500/100">
                <ChartComponent items={items} />
            </div>
        </div>
    )
}

export default About