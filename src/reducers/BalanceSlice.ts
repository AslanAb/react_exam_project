import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBalance } from "../types";

const initialState: IBalance = {
	balance: 1000
}

export const BalanceSlice = createSlice({
	name: "balance",
	initialState,
	reducers: {
		incBalance: (state, action: PayloadAction<{ incBalanceValue: number }>) => {
			state.balance += action.payload.incBalanceValue
		},
		decBalance: (state, action: PayloadAction<{ decBalanceValue: number }>) => {
			if (state.balance >= action.payload.decBalanceValue) {
				state.balance -= action.payload.decBalanceValue
			}
		}
	}
})

export default BalanceSlice.reducer
export const { incBalance, decBalance } = BalanceSlice.actions