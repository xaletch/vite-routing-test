import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";

import stockSlice from "./slice/stock.slice";
import paginationSlice from "./slice/pagination.slice";
import platformSlice from "./slice/platform.slice";
import { crm } from "./api/api";

export const store = configureStore({
  reducer: {
    stock: stockSlice,
    pagination: paginationSlice,
    platform: platformSlice,
    //
    [crm.reducerPath]: crm.reducer,
  },
  // API
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(crm.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
