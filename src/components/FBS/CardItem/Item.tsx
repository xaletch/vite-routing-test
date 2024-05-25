import { FBSItemProps } from "./types/item.interface";

import "./fbs.card.css";
import { link_icon } from "../../../app/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const Item: React.FC<FBSItemProps> = ({
  clientName,
  handleClick,
  box_count,
  assembly_count,
  delivery_count,
  id,
}) => {
  const selectedStyle = useSelector(
    (state: RootState) => state.stock.selectedStyle
  );

  return (
    <div className={`fbs__content-card fbs__content-card_${selectedStyle}`}>
      <div className="fbs__content-card-inner">
        {selectedStyle === "table" ? (
          <>
            <div className="fbs__content-card-item">{clientName}</div>
            <div className="fbs__content-card-item">{box_count}</div>
            <div className="fbs__content-card-item">{assembly_count}</div>
            <div className="fbs__content-card-item">{delivery_count}</div>
            <div className="fbs__content-card-item_buttons">
              <button className="fbs__content-card-item_button">
                <img src={link_icon.box_sm} alt="статус" />
              </button>
              <button
                className="fbs__content-card-item_button"
                onClick={() => handleClick(id)}
              >
                <img src={link_icon.update_icon} alt="обновить" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="fbs__content-card-head">
              <p className="fbs__content-card-name">{clientName}</p>
              <button
                className="fbs__content-card-update"
                onClick={() => handleClick(id)}
              >
                <img src={link_icon.update_icon} alt="обновить" />
              </button>
            </div>
            <div className="fbs__content-card-bottom">
              <div
                className={`fbs__content-card-item ${
                  selectedStyle === "grid" ? "green" : ""
                }`}
              >
                <div className="fbs__content-card-item_inner">
                  <img src={link_icon.box_sm} alt="новые" />
                  <p className="fbs__content-card-count">{box_count}</p>
                </div>
              </div>
              <div
                className={`fbs__content-card-item ${
                  selectedStyle === "grid" ? "orange" : ""
                }`}
              >
                <div className="fbs__content-card-item_inner">
                  <img src={link_icon.assembly_sm} alt="на сборке" />
                  <p className="fbs__content-card-count">{assembly_count}</p>
                </div>
              </div>
              <div
                className={`fbs__content-card-item ${
                  selectedStyle === "grid" ? "purple" : ""
                }`}
              >
                <div className="fbs__content-card-item_inner">
                  <img src={link_icon.delivery_sm} alt="в доставке" />
                  <p className="fbs__content-card-count">{delivery_count}</p>
                </div>
              </div>
              <div className="fbs__content-card-task">
                Новые задания: <span>{box_count}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
