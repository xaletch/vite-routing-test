import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../utils/localStorage.utils";

interface PaginationState {
  currentPage: number;
}

const initialCurrentPage = getLocalStorageItem("stock_current_page", 1);

const initialState: PaginationState = {
  currentPage: initialCurrentPage,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
      setLocalStorageItem("stock_current_page", action.payload.toString());
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
