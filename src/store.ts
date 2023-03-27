import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { BalanceSlice } from "./reducers/BalanceSlice";
import { HistorySlice } from "./reducers/HistorySlice";
import { ItemsSlice } from "./reducers/ItemsSlice";


export const store = configureStore({
    reducer: {
        items: ItemsSlice.reducer,
        balanse: BalanceSlice.reducer,
        history: HistorySlice.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector