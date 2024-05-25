import { useDispatch, useSelector } from "react-redux";

import "../stock.css";
import { useEffect, useState } from "react";
import {
  setSelectDateBefore,
  setSelectDateFrom,
  setSelectedClients,
  setSelectedStatus,
} from "../../../redux/slice/stock.slice";
import { RootState } from "../../../redux/store";
import { Sort } from "../../../components/Stock/Sort/Sort";
import { link_img } from "../../../app/images/link_img";
import { link_icon } from "../../../app/icons";
import { Link } from "react-router-dom";
import { NominalCardItem } from "../../../components/Stock/NominalCard/NominalCard";
import { Search } from "../../../components/UiInputs/Search/Search";
import { CardsValue } from "../../../components/UiPopups/Popup.CardsValue";

export const StockNominal = () => {
  const dispatch = useDispatch();

  const {
    // selectedNum,
    selectedStyle,
    sortStatus,
    selectedStatus,
    clients,
    selectedClients,
    selectDateFrom,
    selectDateBefore,
  } = useSelector((state: RootState) => state.stock);

  const [openPopup, setOpenPopup] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<{
    [key: number]: boolean;
  }>({});

  // ПОИСК
  const [searchNominal, setSearchNominal] = useState("");
  const nominalSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchNominal(e.target.value);
  };

  const handleSearch = () => {
    try {
      console.log("поиск: ", searchNominal);
    } catch (err) {
      console.log(err);
    }
  };

  //
  const handlePopupToggle = (name: string) => {
    openPopup === name ? setOpenPopup(null) : setOpenPopup(name);
  };

  useEffect(() => {
    const storedSelections = JSON.parse(
      localStorage.getItem("selectedItems") || "{}"
    );
    setSelectedItems(storedSelections);
  }, []);

  const handleSelectionChange = (index: number, isSelected: boolean) => {
    const newSelections = { ...selectedItems };
    if (isSelected) {
      newSelections[index] = isSelected;
    } else {
      delete newSelections[index];
    }
    setSelectedItems(newSelections);
    localStorage.setItem("selectedItems", JSON.stringify(newSelections));
  };

  return (
    <div className="stock">
      <div className="stock__wrapper">
        <div className="stock__head">
          <h2 className="page__title">Склад</h2>
          <div className="stock__head-control">
            <Search
              value={searchNominal}
              placeholder="Баркод, артикул, ресурс"
              onChange={nominalSearch}
              handleSearch={handleSearch}
            />
            <div className="stock__head-control_button">
              <Link to={"/stock"} className="stock__head-button_back">
                <span>
                  <img src={link_icon.back_arrow} alt="назад" />
                </span>
                Назад
              </Link>
            </div>
          </div>
        </div>
        <CardsValue />
        <div className="stock__sort">
          <div className="stock__sort-wrapper">
            <Sort
              name="Статус"
              selectValue={selectedStatus}
              list={sortStatus}
              isOpen={openPopup === "Статус"}
              setSelected={(value) => dispatch(setSelectedStatus(value))}
              togglePopup={() => handlePopupToggle("Статус")}
            />
            <Sort
              name="Клиент"
              selectValue={selectedClients}
              list={clients}
              isOpen={openPopup === "Клиент"}
              setSelected={(value) => dispatch(setSelectedClients(value))}
              togglePopup={() => handlePopupToggle("Клиент")}
            />
            <Sort
              name="От"
              selectValue={selectDateFrom}
              isOpen={openPopup === "От"}
              togglePopup={() => handlePopupToggle("От")}
              setSelected={(date: string) => dispatch(setSelectDateFrom(date))}
            />
            <Sort
              name="До"
              selectValue={selectDateBefore}
              isOpen={openPopup === "До"}
              togglePopup={() => handlePopupToggle("До")}
              setSelected={(date: string) =>
                dispatch(setSelectDateBefore(date))
              }
            />
          </div>
        </div>
        <div className="stock__selected-product">
          Выбранно Продуктов: <span>{Object.keys(selectedItems).length}</span>
        </div>
        <div className="stock__card">
          {selectedStyle === "table" && (
            <div className="stock__card-head">
              <div className="stock__card-head_wrapper nominal__card-head_wrapper">
                <div className="stock__card-head_item-checkbox"></div>
                <div className="stock__card-head_item">Фото</div>
                <div className="stock__card-head_item">Баркод</div>
                <div className="stock__card-head_item">Артикул</div>
                <div className="stock__card-head_item">Статус</div>
                <div className="stock__card-head_item">Клиент</div>
                <div className="stock__card-head_item">Ресурс</div>
                <div className="stock__card-head_item">Кол.</div>
                <div className="stock__card-head_item">Время</div>
              </div>
            </div>
          )}
          <div className={`stock__card-wrapper-${selectedStyle}`}>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <NominalCardItem
                  key={index}
                  index={index}
                  selectedStyle={selectedStyle}
                  image={link_img.nega}
                  barcode={2038590377750}
                  article={"Течфлис-черный"}
                  status={"Прибытие"}
                  client={"Ахмедов Бахтовар Бахромович"}
                  resource={"WH-R-2185"}
                  qty={50}
                  time={"18.10.2023 12:37"}
                  isSelected={!!selectedItems[index]}
                  onSelectionChange={handleSelectionChange}
                  hidden={
                    selectedStatus !== "Все" && selectedStatus !== "Прибытие"
                  }
                />
              ))}
          </div>
        </div>
        {/* <div className="stock__pagination">
          <div className="stock__pagination-wrapper">
            <Pagination totalPages={10} />
          </div>
        </div> */}
      </div>
    </div>
  );
};
