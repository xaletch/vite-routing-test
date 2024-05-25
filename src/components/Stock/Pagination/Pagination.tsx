import { useDispatch } from "react-redux";
import { link_icon } from "../../../app/icons";
// import { Item } from "./components/Item";
import "./pagination.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setCurrentPage } from "../../../redux/slice/pagination.slice";
import { PaginationInterface } from "./types/pagination.interface";
import { useEffect } from "react";

export const Pagination: React.FC<PaginationInterface> = ({ totalPages }) => {
  const dispatch = useDispatch();

  const { currentPage } = useSelector((state: RootState) => state.pagination);
  const prevPage = () => {
    dispatch(setCurrentPage(Math.max(currentPage - 1, 1)));
  };

  const nextPage = () => {
    dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)));
  };

  useEffect(() => {
    const storedCurrentPage = JSON.parse(
      localStorage.getItem("stock_current_page") || "1"
    );
    dispatch(setCurrentPage(storedCurrentPage));
  }, [dispatch]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 3;

    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(endPage - maxPageButtons + 1, 1);
    }

    if (endPage < maxPageButtons && totalPages > maxPageButtons) {
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`pagination__item ${currentPage === i ? "selected" : ""}`}
          onClick={() => dispatch(setCurrentPage(i))}
        >
          <div className="pagination__item-num">{i}</div>
        </div>
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <div
          key="right-ellipsis"
          className="pagination__item pagination__item-num"
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
        >
          ...
        </div>
      );
    }

    if (!pageNumbers.find((item) => item.key === totalPages.toString())) {
      pageNumbers.push(
        <div
          key={totalPages}
          className={`pagination__item ${
            currentPage === totalPages ? "selected" : ""
          }`}
          onClick={() => dispatch(setCurrentPage(totalPages))}
        >
          <div className="pagination__item-num">{totalPages}</div>
        </div>
      );
    }

    return pageNumbers;
  };

  return (
    <>
      <button onClick={prevPage}>
        <img src={link_icon.leftArrow} alt="назад" />
      </button>

      <div className="pagination__items">{renderPageNumbers()}</div>
      <button onClick={nextPage}>
        <img src={link_icon.rightArrow} alt="далее" />
      </button>
    </>
  );
};
