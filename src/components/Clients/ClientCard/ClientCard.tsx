import { link_icon } from "../../../app/icons";
import { ClientCardProps } from "./types/clientCard.interface";

import "./clientCard.css";

export const ClientCard: React.FC<ClientCardProps> = ({
  clientName,
  telephone,
  integrationWB,
  integrationOzon,
  partners,
  children,
}) => {
  return (
    <div className="clients__card">
      <div className="clients__card-inner">
        <div className="clients__card-item">{clientName}</div>
        <div className="clients__card-item card__item-swap">{telephone}</div>
        <div className="clients__card-item clients__card-integration card__item-swap">
          <div className="clients__integrations-item">
            <span className="integration__item-name">Wildberries:</span>
            <img
              src={
                integrationWB
                  ? link_icon.integration_success
                  : link_icon.integration_error
              }
              alt="интеграция"
            />
          </div>
          <div className="clients__integrations-item">
            <span className="integration__item-name">Ozon:</span>
            <img
              src={
                integrationOzon
                  ? link_icon.integration_success
                  : link_icon.integration_error
              }
              alt="интеграция"
            />
          </div>
        </div>
        <div className="clients__card-item">{partners}</div>
        <div className="clients__card-control">{children}</div>
      </div>
    </div>
  );
};
