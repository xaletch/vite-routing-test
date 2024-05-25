import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../utils/localStorage.utils";

interface PlatformSortState {
  platforms: string[];
  selectedPlatform: string;
}

const initialSelectedPlatform = getLocalStorageItem(
  "selected_platform",
  "wildberries"
);

const initialState: PlatformSortState = {
  platforms: ["wildberries", "ozon"],
  selectedPlatform: initialSelectedPlatform,
};

const platformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    setSelectPlatform(state, action: PayloadAction<string>) {
      state.selectedPlatform = action.payload;
      setLocalStorageItem("selected_platform", action.payload);
    },
  },
});

export const { setSelectPlatform } = platformSlice.actions;
export default platformSlice.reducer;
