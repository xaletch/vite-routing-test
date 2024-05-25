import { useSelector } from "react-redux";
import { link_icon } from "../../../app/icons";
import { Item } from "../../../components/FBS/CardItem/Item";
import { Information } from "../../../components/FBS/Information/Information";
import { RootState } from "../../../redux/store";
import { updateInformation } from "../../../processes/updateInformation";

export const Wildberries = () => {
  const selectedStyle = useSelector(
    (state: RootState) => state.stock.selectedStyle
  );

  return (
    <div className="fbs__wrapper-content">
      <div className="fbs__content-information">
        <Information icon={link_icon.green_box} name={"Новые:"} count={6} />
        <Information icon={link_icon.assembly} name={"На сборке:"} count={8} />
        <Information icon={link_icon.delivery} name={"В доставке:"} count={4} />
      </div>
      <div
        className={`fbs__content-wrapper fbs__content-wrapper_${selectedStyle}`}
      >
        {selectedStyle === "table" && (
          <div className="fbs__content-table-head">
            <div className="fbs__content-table-inner">
              <div className="fbs__content-table-item">Клиент</div>
              <div className="fbs__content-table-item">Новые задания</div>
              <div className="fbs__content-table-item">На сборке</div>
              <div className="fbs__content-table-item">В доставке</div>
            </div>
          </div>
        )}
        <div className={`fbs__content fbs__content_${selectedStyle}`}>
          <Item
            clientName={"ИП Ахмедов Бахтовар Бахромович"}
            handleClick={updateInformation}
            box_count={1}
            assembly_count={2}
            delivery_count={8}
            id={1}
          />
          <Item
            clientName={"ИП Ахмедов Бахтовар Бахромович"}
            handleClick={updateInformation}
            box_count={5}
            assembly_count={3}
            delivery_count={0}
            id={2}
          />
          <Item
            clientName={"ИП Ахмедов Бахтовар Бахромович"}
            handleClick={updateInformation}
            box_count={6}
            assembly_count={0}
            delivery_count={1}
            id={3}
          />
          <Item
            clientName={"ИП Ахмедов Бахтовар Бахромович"}
            handleClick={updateInformation}
            box_count={4}
            assembly_count={0}
            delivery_count={2}
            id={4}
          />
          <Item
            clientName={"ИП Ахмедов Бахтовар Бахромович"}
            handleClick={updateInformation}
            box_count={6}
            assembly_count={0}
            delivery_count={1}
            id={5}
          />
        </div>
      </div>
    </div>
  );
};
