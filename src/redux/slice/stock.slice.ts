import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../utils/localStorage.utils";

interface StockSortState {
  num: number[];
  selectedNum: number;

  //
  selectedStyle: string;

  // sort status
  sortStatus: string[];
  selectedStatus: string;
  // sort clients
  clients: string[];
  selectedClients: string;

  // select date
  selectDateFrom: string;
  selectDateBefore: string;
}

const initialSelectedNum = getLocalStorageItem("stock_filter", 10);
const initialSelectedStyle = getLocalStorageItem("page_style", "grid");
// sort status
const initialSelectedStatus = getLocalStorageItem("stock_status", "Все");
// sort clients
const initialSelectedClients = getLocalStorageItem("stock_clients", "Все");

// select date
const initialSelectedDateFrom = getLocalStorageItem(
  "stock_date_from",
  "Выбрать дату"
);
const initialSelectedDateBefore = getLocalStorageItem(
  "stock_date_before",
  "Выбрать дату"
);

const initialState: StockSortState = {
  num: [10, 20, 30],
  selectedNum: initialSelectedNum,

  //
  selectedStyle: initialSelectedStyle,

  // sort status
  sortStatus: ["Все", "Прибытие", "Отбытие"],
  selectedStatus: initialSelectedStatus,
  // sort clients
  clients: ["Все", "Ахмедов Бахтовар Бахромович", "Клиент 2", "Клиент 3"],
  selectedClients: initialSelectedClients,

  // select date
  selectDateFrom: initialSelectedDateFrom,
  selectDateBefore: initialSelectedDateBefore,
};

const stockSlice = createSlice({
  name: "stockSort",
  initialState,
  reducers: {
    setSelectedNum(state, action: PayloadAction<number>) {
      state.selectedNum = action.payload;
      setLocalStorageItem("stock_filter", action.payload.toString());
    },
    setSelectedStyle(state, action: PayloadAction<string>) {
      state.selectedStyle = action.payload;
      setLocalStorageItem("page_style", action.payload.toString());
    },
    // sort status
    setSelectedStatus(state, action: PayloadAction<string>) {
      state.selectedStatus = action.payload;
      setLocalStorageItem("stock_status", action.payload.toString());
    },
    // sort clients
    setSelectedClients(state, action: PayloadAction<string>) {
      state.selectedClients = action.payload;
      setLocalStorageItem("stock_clients", action.payload.toString());
    },

    // select date
    setSelectDateFrom(state, action: PayloadAction<string>) {
      state.selectDateFrom = action.payload;
      setLocalStorageItem("stock_date_from", action.payload);
    },
    setSelectDateBefore(state, action: PayloadAction<string>) {
      state.selectDateBefore = action.payload;
      setLocalStorageItem("stock_date_before", action.payload);
    },
  },
});

export const {
  setSelectedNum,
  setSelectedStyle,
  setSelectedStatus,
  setSelectedClients,
  setSelectDateFrom,
  setSelectDateBefore,
} = stockSlice.actions;
export default stockSlice.reducer;
