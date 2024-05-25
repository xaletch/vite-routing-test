import { FormBlockProps } from "./types/client.formBlock.interface";

import "./client.formBlock.css";

export const FormBlock: React.FC<FormBlockProps> = ({
  title,
  styleClass,
  children,
  hasCheckbox,
  checkboxState,
  onCheckboxChange,
}) => {
  return (
    <div className={`create-client__form-block ${styleClass}`}>
      <div className="form__block-inner">
        <div className="form__block-head">
          <h3 className="form__head-name">{title}</h3>
          {hasCheckbox && (
            <div className="form__head-button" onClick={onCheckboxChange}>
              <div
                className={`form__head-button-checkbox ${
                  checkboxState ? "active" : ""
                }`}
              >
                {checkboxState && (
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 0.75L8.95699 5.60161C7.35489 7.52413 6.55384 8.48539 5.5 8.48539C4.44616 8.48539 3.64511 7.52413 2.043 5.60161L1 4.35"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>
              <span>Банковские реквизиты</span>
            </div>
          )}
        </div>
        <div className="form__block-content">{children}</div>
      </div>
    </div>
  );
};
