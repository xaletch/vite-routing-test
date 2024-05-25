import { link_icon } from "../../../app/icons";
import "./textarea.css";
import { TextareaInterface } from "./types/textarea.interface";

export const Textarea: React.FC<TextareaInterface> = ({
  name,
  value,
  setValue,
}) => {
  return (
    <div className="ui-textarea__wrapper">
      <div className="ui-textarea__name">{name}</div>

      <textarea
        className="ui-textarea__field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>

      <div className="ui-textarea__warning">
        <div className="ui-textarea__warning-inner">
          <img src={link_icon.integration_error} alt="предупреждение" />
          <p className="ui-textarea__warning-text">
            Данное сообщение будет отправленно всем клиентам у которых имеются
            привязка к телеграмм боту
          </p>
        </div>
      </div>
    </div>
  );
};
