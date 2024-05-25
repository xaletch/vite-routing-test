import { link_icon } from "../../../app/icons";
import { WorkSchemeProps } from "./types/workScheme.interface";

import "./workScheme.css";

export const WorkScheme: React.FC<WorkSchemeProps> = ({
  scheme,
  select,
  handleClick,
}) => {
  return (
    <button
      className={`button_work-scheme ${scheme === select ? "selected" : ""}`}
      onClick={(e) => {
        handleClick();
        e.preventDefault();
      }}
    >
      {scheme}
      <span className="button-icon">
        {select === scheme ? (
          <img src={link_icon.scheme_plus} alt="выбрать" />
        ) : (
          <img src={link_icon.scheme_unselected} alt="выбрать" />
        )}
      </span>
    </button>
  );
};
