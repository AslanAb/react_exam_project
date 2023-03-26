import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHistories, IHistory } from "../types";

const initialState: IHistories = {
	history: []
}

export const HistorySlice = createSlice({
	name: "history",
	initialState,
	reducers: {
		addHistory: (state, action: PayloadAction<IHistory>) => {
			state.history.push({
				id: action.payload.id,
				nameOfOperation: action.payload.nameOfOperation,
				item_name: action.payload.item_name,
				quantity: action.payload.quantity,
				price: action.payload.price
			})
		}
	}
})

export default HistorySlice.reducer
export const { addHistory } = HistorySlice.actions