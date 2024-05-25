import { useState } from "react";

import "./sort.css";

export const Sort = () => {
  const [isPopup, setIsPopup] = useState<boolean>(false);

  return (
    <div className={`notifications__sort ${isPopup ? "open" : ""}`}>
      <div
        className={"notifications__sort-select"}
        onClick={() => setIsPopup(!isPopup)}
      >
        <span>{"Непрочитанные"}</span>
        <span
          className={`notifications__sort-select_button ${
            isPopup ? "open" : ""
          }`}
        >
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1.5L9.25269 3.26297C7.85925 4.6689 7.16253 5.37187 6.31333 5.48011C6.10527 5.50663 5.89473 5.50663 5.68667 5.48011C4.83748 5.37187 4.14075 4.6689 2.74731 3.26297L1 1.5"
              stroke="#282735"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
      <div className={`notifications__sort-items ${isPopup ? "open" : ""}`}>
        <div className="notifications__sort-item">1</div>
        <div className="notifications__sort-item">2</div>
        <div className="notifications__sort-item">3</div>
      </div>
    </div>
  );
};
