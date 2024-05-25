import styles from "./style.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <h2 className="page__title">Главная</h2>
      <div className={styles.home__grid}>
        <div className={styles.home__grid_card}>1</div>
        <div className={styles.home__grid_card}>2</div>
        <div className={styles.home__grid_card}>3</div>
        <div className={styles.home__grid_card}>4</div>
        <div className={styles.home__grid_card}>5</div>
        <div className={styles.home__grid_card}>6</div>
      </div>
      {/*  */}
      <div className={styles.home__bottom_grid}>
        <div className={styles.home__grid_card}>8</div>
        <div className={styles.home__grid_card}>9</div>
        <div className={styles.home__grid_card}>10</div>
      </div>
    </div>
  );
};
