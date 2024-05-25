import { useRef, useState } from "react";
import "./input.css";
import { InputProps } from "./types/input.interface";

export const Input: React.FC<InputProps> = ({
  name,
  inputType,
  value,
  setValue,
  passwordIcon,
  grid,
  require,
  error,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleNameClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const passwordVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="ui-input__wrapper" style={grid ? { gridColumn: grid } : {}}>
      <div className="ui-input__name" onClick={handleNameClick}>
        {name} {require && <span>*</span>}
      </div>

      <div className="ui-input">
        <input
          className={`ui-input__field ${error ? "require" : ""}`}
          type={isVisible ? "text" : inputType}
          value={value}
          ref={inputRef}
          onChange={(e) => setValue(e.target.value)}
        />
        {value.length > 0 && passwordIcon && (
          <div className="ui-input__button" onClick={passwordVisible}>
            <img src={passwordIcon} alt="смотреть пароль" />
          </div>
        )}
      </div>
    </div>
  );
};
