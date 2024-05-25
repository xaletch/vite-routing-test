import { CardsValue } from "../../UiPopups/Popup.CardsValue";
import "./cardSetup.css";

import { StockButtonContainer } from "./StockButtonContainer";

export const CardSetup = () => {
  return (
    <div className="stock__setup">
      <CardsValue />
      <div className="setup__demo-wrapper">
        <StockButtonContainer />
      </div>
    </div>
  );
};
