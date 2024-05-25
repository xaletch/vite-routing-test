import { stockButton } from "./types/button.interface";

import "./stockButton.css";
import { Link } from "react-router-dom";

export const StockButton: React.FC<stockButton> = ({
  name,
  color,
  link,
  handleClick,
}) => {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={"stock__head-button"}
          style={{ background: `#${color}` }}
        >
          {name}
        </Link>
      ) : (
        <button
          className={"stock__head-button"}
          style={{ background: `#${color}` }}
          onClick={handleClick}
        >
          {name}
        </button>
      )}
    </>
  );
};
