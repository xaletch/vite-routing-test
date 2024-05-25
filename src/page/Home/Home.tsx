import { Calendar } from "../../components/Home/Calendar/Calendar";
import { CallCenter } from "../../components/Home/CallCenter/CallCenter";
import { CardHead } from "../../components/Home/CardHead/CardHead";
import { FBSClients } from "../../components/Home/FBSClients/FBSClients";
import { Documents } from "../../components/Home/Documents/Documents";
import { Employees } from "../../components/Home/Employees/Employees";
import styles from "./home.module.css";
import { Clients } from "../../components/Home/Clients/Clients";
import { Warehouse } from "../../components/Home/Warehouse/Warehouse";
import { Orders } from "../../components/Home/CRM/Orders";
import { DBSSystem } from "../../components/Home/DBS/DBSSystem";

export const Home = () => {
  console.log("home");
  return (
    <div className={styles.home}>
      <h2 className="page__title">Главная</h2>
      <div className={styles.home__grid}>
        <div className={styles.home__grid_card}>
          <CardHead name={"Склад"} link="Смотреть все" href="stock">
            <Warehouse />
          </CardHead>
        </div>
        <div className={styles.home__grid_card}>
          <CardHead name={"Клиенты"} link="Смотреть все" href="clients">
            <Clients />
          </CardHead>
        </div>
        <div className={styles.home__grid_card}>
          <CardHead name={"FBS Клиенты"} link="Смотреть все" href="fbs">
            <FBSClients />
          </CardHead>
        </div>
        <div className={styles.home__grid_card}>
          <CardHead
            name={"Центр заявок"}
            link="Смотреть все"
            href="call-center"
          >
            <CallCenter />
          </CardHead>
        </div>
        <div className={styles.home__grid_card}>
          <CardHead name={"Документы"} link="Смотреть все" href="documents">
            <Documents />
          </CardHead>
        </div>
        <div className={styles.home__grid_card}>
          <CardHead name={"Сотрудники"} link="Смотреть всех" href="employees">
            <Employees />
          </CardHead>
        </div>
      </div>
      {/*  */}
      <div className={styles.home__bottom_grid}>
        <div className={styles.home__grid_card}>
          <CardHead name={"CRM - заказы"} link="Смотреть все" href="crm">
            <Orders />
          </CardHead>
        </div>
        <div className={styles.home__grid_card}>
          <CardHead name={"DBS"} link="Смотреть всех" href="dbs">
            <DBSSystem />
          </CardHead>
        </div>
        <div className={styles.home__grid_card}>
          <CardHead name={"Календарь"} link="Весь календарь" href="calendar">
            <Calendar />
          </CardHead>
        </div>
      </div>
    </div>
  );
};
