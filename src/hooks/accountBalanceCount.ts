// ?
import { useAppSelector } from "../store"
// import { useState } from "react"

const balance_count = () => {
    const items = useAppSelector((state) => state.items.items)
	// const [balanceCount, setBalanceCount] = useState(0)
	let balanceCount:number = 0
	items.forEach(el => {
		balanceCount += el.total_price
	})
	return balanceCount
}

export default balance_count