import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setSelectedStyle } from "../../../redux/slice/stock.slice";
import { IconButtonProps } from "./types/IconButton.interface";

import "./iconButton.css";

export const IconButton: React.FC<IconButtonProps> = ({
  styleName,
  children,
}) => {
  const dispatch = useDispatch();
  const selectedStyle = useSelector(
    (state: RootState) => state.stock.selectedStyle
  );

  const selectStyle = (style: string) => {
    dispatch(setSelectedStyle(style));
  };
  return (
    <button
      className={`setup__demo-button ${
        selectedStyle === styleName ? "active" : ""
      }`}
      onClick={() => selectStyle(styleName)}
    >
      {children}
    </button>
  );
};
