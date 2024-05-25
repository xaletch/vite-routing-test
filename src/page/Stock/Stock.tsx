import { useDispatch, useSelector } from "react-redux";
import { StockButton } from "../../components/Stock/Button/StockButton";
import { CardItem } from "../../components/Stock/Card/CardItem";
import { CardSetup } from "../../components/Stock/CardSetup/CardSetup";
import { Pagination } from "../../components/Stock/Pagination/Pagination";
import { Sort } from "../../components/Stock/Sort/Sort";

import "./stock.css";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import {
  setSelectDateBefore,
  setSelectDateFrom,
  setSelectedClients,
  setSelectedStatus,
} from "../../redux/slice/stock.slice";
import { link_img } from "../../app/images/link_img";
import { ModalWindow } from "../../components/ModalsWindow/ModalWindow";
import { ModalMenu } from "../../components/ModalsWindow/Menu/ModalMenu";
import { Search } from "../../components/UiInputs/Search/Search";
import { Button } from "../../components/Buttons/UIButtons/Button";
import { Input } from "../../components/UiInputs/Input/Input";

export const Stock = () => {
  const dispatch = useDispatch();

  const {
    selectedNum,
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
  const [isModalMenu, setIsModalMenu] = useState<boolean>(false);

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

  // ПОИСК
  const [searchStock, setSearchStock] = useState("");
  const stockSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStock(e.target.value);
  };

  const handleSearch = () => {
    try {
      console.log("поиск: ", searchStock);
    } catch (err) {
      console.log(err);
    }
  };

  // form Перенос в ячейку
  const [cell, setCell] = useState<string>("");
  const [boxNum, setBoxNum] = useState<string>("");

  const handleSubmit = async () => {
    const cellNumber = parseInt(cell);
    const boxNumNumber = parseInt(boxNum);
    try {
      if (!isNaN(cellNumber) && !isNaN(boxNumNumber)) {
        const cellNumber = parseInt(cell);
        const boxNumNumber = parseInt(boxNum);

        const response = await { cell: cellNumber, box: boxNumNumber };

        console.log(response);

        if (response) {
          setCell("");
          setBoxNum("");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="stock">
        <div className="stock__wrapper">
          <div className="stock__head">
            <h2 className="page__title">Склад</h2>
            <div className="stock__head-control">
              <Search
                value={searchStock}
                placeholder="Баркод, артикул, клиент, ресурс, короб"
                onChange={stockSearch}
                handleSearch={handleSearch}
              />
              <div className="stock__head-control_button">
                <StockButton
                  name={"Номинальная приемка"}
                  color={"ff7701"}
                  link={"nominal"}
                />
                <StockButton
                  name={"Перенести в ячейку"}
                  color={"54b800"}
                  handleClick={() => setIsModalMenu(!isModalMenu)}
                />
                <StockButton name={"Коробки"} color={"f8b712"} />
                <StockButton name={"Список складов"} color={"8653d4"} />
              </div>
            </div>
          </div>
          <CardSetup />
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
                setSelected={(date: string) =>
                  dispatch(setSelectDateFrom(date))
                }
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
                <div className="stock__card-head_wrapper">
                  <div className="stock__card-head_item-checkbox"></div>
                  <div className="stock__card-head_item">Фото</div>
                  <div className="stock__card-head_item">Баркод</div>
                  <div className="stock__card-head_item">Артикул</div>
                  <div className="stock__card-head_item">Клиент</div>
                  <div className="stock__card-head_item">Ячейка</div>
                  <div className="stock__card-head_item">Статус</div>
                  <div className="stock__card-head_item">Короб.</div>
                  <div className="stock__card-head_item">Ресурс</div>
                  <div className="stock__card-head_item">Кол.</div>
                  <div className="stock__card-head_item">Время</div>
                </div>
              </div>
            )}
            <div className={`stock__card-wrapper-${selectedStyle}`}>
              {Array(selectedNum)
                .fill(null)
                .map((_, index) => (
                  <CardItem
                    key={index}
                    index={index}
                    selectedStyle={selectedStyle}
                    image={link_img.nega}
                    barcode={2038590377750}
                    article={"Течфлис-черный"}
                    client={"Ахмедов Бахтовар Бахромович"}
                    cell={1}
                    status={"Прибытие"}
                    box={"WH-B-19"}
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
          <div className="stock__pagination">
            <div className="stock__pagination-wrapper">
              <Pagination totalPages={10} />
            </div>
          </div>
        </div>
      </div>
      {isModalMenu && (
        <ModalWindow setIsModalMenu={setIsModalMenu}>
          <ModalMenu
            menuName={"Перенос в ячейку"}
            setIsModalMenu={setIsModalMenu}
          >
            <Input
              name={"Ячейка"}
              inputType={"number"}
              value={cell}
              setValue={setCell}
              require={true}
            />
            <Input
              name={"Номер коробки"}
              inputType={"number"}
              value={boxNum}
              setValue={setBoxNum}
              require={true}
            />

            <Button
              color={"#f1f0fe"}
              colorText={"#8653d4"}
              name={"Отменить"}
              onClick={() => setIsModalMenu(false)}
            />
            <Button
              color={"#8653d4"}
              colorText={"#ffffff"}
              name={"Перенести"}
              onClick={handleSubmit}
            />
          </ModalMenu>
        </ModalWindow>
      )}
    </>
  );
};
