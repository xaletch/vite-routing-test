import { useEffect } from "react";
import { setSelectedStyle } from "../redux/slice/stock.slice";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

export const useInitializeStyle = (availableStyles: string[]) => {
  const dispatch = useDispatch();
  const selectedStyle = useSelector(
    (state: RootState) => state.stock.selectedStyle
  );

  useEffect(() => {
    if (!availableStyles.includes(selectedStyle)) {
      const defaultStyle = "grid";
      dispatch(setSelectedStyle(defaultStyle));
      localStorage.setItem("page_style", defaultStyle);
    }
  }, [availableStyles, selectedStyle, dispatch]);
};
