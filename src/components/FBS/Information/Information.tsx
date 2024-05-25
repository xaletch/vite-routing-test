import { FBSInformationProps } from "./types/information.interface";

import "./information.css";

export const Information: React.FC<FBSInformationProps> = ({
  icon,
  name,
  count,
}) => {
  return (
    <div className="fbs__information-card">
      <div className="fbs__information-card-inner">
        <img className="fbs__information-card-icon" src={icon} alt={name} />
        <p className="fbs__information-card-name">{name}</p>
        <div className="fbs__information-card-count">{count}</div>
      </div>
    </div>
  );
};
