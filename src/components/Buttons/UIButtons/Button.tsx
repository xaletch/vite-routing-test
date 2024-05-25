import { Link } from "react-router-dom";
import { ButtonProps } from "./types/button.interface";
import "./uiButton.css";

export const Button: React.FC<ButtonProps> = ({
  color,
  colorText,
  name,
  href,
  icon,
  onClick,
}) => {
  return (
    <>
      {href ? (
        <Link
          to={href}
          className="ui-button"
          style={{ background: `${color}`, color: `${colorText}` }}
        >
          {icon && (
            <span>
              <img src={icon} alt={name} />
            </span>
          )}
          {name}
        </Link>
      ) : (
        <button
          className="ui-button"
          style={{ background: `${color}`, color: `${colorText}` }}
          onClick={onClick}
        >
          {icon && (
            <span>
              <img src={icon} alt={name} />
            </span>
          )}
          {name}
        </button>
      )}
    </>
  );
};
