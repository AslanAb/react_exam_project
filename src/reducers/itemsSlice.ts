import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItems, IItem } from "../types";

const initialState: IItems = {
    items: []
}

export const ItemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IItem>) => {
            const index = state.items.findIndex(el => el.name === action.payload.name)
            if (index >= 0) {
                state.items[index] = {
                    id: state.items[index].id,
                    name: state.items[index].name,
                    quantity: state.items[index].quantity + action.payload.quantity,
                    total_cost: state.items[index].total_cost + action.payload.total_cost,
                    total_price: state.items[index].total_price + action.payload.total_price,
                    one_item_average_price: (state.items[index].total_price + action.payload.total_price) / (state.items[index].quantity + action.payload.quantity)
                }
            } else {
                state.items.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    total_cost: action.payload.total_cost,
                    total_price: action.payload.total_price,
                    quantity: action.payload.quantity,
                    one_item_average_price: action.payload.one_item_average_price
                })
            }
        },
        deleteItem: (state, action: PayloadAction<{ id: number, delete_quantity: number }>) => {
            const index = state.items.findIndex(el => el.id === action.payload.id)
            if (state.items[index].quantity > action.payload.delete_quantity) {
                state.items[index] = {
                    id: state.items[index].id,
                    name: state.items[index].name,
                    quantity: state.items[index].quantity - action.payload.delete_quantity,
                    total_cost: state.items[index].total_cost - (state.items[index].total_cost / state.items[index].quantity) * action.payload.delete_quantity,
                    total_price: state.items[index].total_price - state.items[index].one_item_average_price * action.payload.delete_quantity,
                    one_item_average_price: (state.items[index].total_price - state.items[index].one_item_average_price * action.payload.delete_quantity) / (state.items[index].quantity - action.payload.delete_quantity)
                }
            } else if (state.items[index].quantity === action.payload.delete_quantity) {
                state.items.splice(index, 1)
            }
        }
    }
})

export default ItemsSlice.reducer
export const { addItem, deleteItem } = ItemsSlice.actions