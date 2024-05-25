import { useSelector } from "react-redux";

import { Button } from "../../components/Buttons/UIButtons/Button";
import { FBSButtonContainer } from "../../components/FBS/ButtonContainer/FBSButtonContainer";

import "./fbs.css";
import { RootState } from "../../redux/store";

import { useDispatch } from "react-redux";
import { setSelectPlatform } from "../../redux/slice/platform.slice";
import { Wildberries } from "./components/Wildberries";
import { Ozon } from "./components/Ozon";

export const Fbs = () => {
  const dispatch = useDispatch();

  const selectedPlatform = useSelector(
    (state: RootState) => state.platform.selectedPlatform
  );

  return (
    <div className="fbs">
      <div className="fbs__wrapper">
        <div className="fbs__wrapper-head">
          <h2 className="page__title">Клиенты</h2>
          <div className="fbs__wrapper-head-buttons">
            <div className="fbs__buttons-platform">
              <Button
                color={
                  selectedPlatform === "wildberries" ? "#8653d4" : "#ffffff"
                }
                colorText={
                  selectedPlatform === "wildberries" ? "#ffffff" : "#8653d4"
                }
                name={"Wildberries"}
                onClick={() => dispatch(setSelectPlatform("wildberries"))}
              />
              <Button
                color={selectedPlatform === "ozon" ? "#8653d4" : "#ffffff"}
                colorText={selectedPlatform === "ozon" ? "#ffffff" : "#8653d4"}
                name={"OZON"}
                onClick={() => dispatch(setSelectPlatform("ozon"))}
              />
            </div>
            <div className="fbs__buttons-interface setup__demo-wrapper">
              <FBSButtonContainer />
            </div>
          </div>
        </div>
        {selectedPlatform === "wildberries" ? <Wildberries /> : <Ozon />}
      </div>
    </div>
  );
};
