import { useSelector } from "react-redux";
import { link_icon } from "../../../app/icons";
// import { Item } from "../../../components/FBS/CardItem/Item";
import { Information } from "../../../components/FBS/Information/Information";
import { RootState } from "../../../redux/store";

export const Ozon = () => {
  const selectedStyle = useSelector(
    (state: RootState) => state.stock.selectedStyle
  );
  return (
    <div className="fbs__wrapper-content">
      <div className="fbs__content-information">
        <Information icon={link_icon.green_box} name={"Новые:"} count={0} />
        <Information icon={link_icon.assembly} name={"На сборке:"} count={0} />
        <Information icon={link_icon.delivery} name={"В доставке:"} count={0} />
      </div>
      <div
        className={`fbs__content-wrapper fbs__content-wrapper_${selectedStyle}`}
      ></div>
    </div>
  );
};
