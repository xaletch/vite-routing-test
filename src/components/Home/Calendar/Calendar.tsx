import { link_icon } from "../../../app/icons";
import styles from "./calendar.module.css";

export const Calendar = () => {
  return (
    <div className={styles.calendar__block}>
      <div className={styles.calendar__head}>
        <div className={styles.calendar_date}>13 – 19 нояб. 2023 г.</div>
        <div className={styles.calendar_buttons}>
          <button>
            <img src={link_icon.leftArrow} alt="left" />
          </button>
          <button>
            <img src={link_icon.rightArrow} alt="right" />
          </button>
        </div>
      </div>
      {/*  */}
      <div className={styles.calendar_content}>
        <div className={styles.calendar__content_inner}>
          <div className={styles.calendar_item}>
            <div className={styles.calendar__item_date}>пн 13.11</div>
            <div
              className={`${styles.calendar__item_cell} ${styles.today}`}
            ></div>
          </div>

          {/*  */}
          <div className={styles.calendar_item}>
            <div className={styles.calendar__item_date}>вт 14.11</div>
            <div className={styles.calendar__item_cell}></div>
          </div>

          {/*  */}
          <div className={styles.calendar_item}>
            <div className={styles.calendar__item_date}>ср 15.11</div>
            <div className={styles.calendar__item_cell}></div>
          </div>

          {/*  */}
          <div className={styles.calendar_item}>
            <div className={styles.calendar__item_date}>чт 16.11</div>
            <div className={`${styles.calendar__item_cell} ${styles.note}`}>
              <div className={styles.calendar__item_note}>
                <span>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.0001 22.5002H22.0001V14.5002C21.9985 13.1746 21.4712 11.9037 20.5338 10.9664C19.5965 10.029 18.3257 9.50174 17.0001 9.50015H13.0001V6.53915C13.4455 6.34473 13.8247 6.02467 14.0911 5.61813C14.3575 5.21159 14.4996 4.73621 14.5001 4.25015C14.2299 2.97193 13.6214 1.78974 12.7381 0.827152C12.6444 0.724682 12.5304 0.642846 12.4033 0.586857C12.2762 0.530868 12.1389 0.501953 12.0001 0.501953C11.8612 0.501953 11.7239 0.530868 11.5968 0.586857C11.4698 0.642846 11.3558 0.724682 11.2621 0.827152C10.3787 1.78974 9.7702 2.97193 9.50006 4.25015C9.50051 4.73621 9.64263 5.21159 9.90904 5.61813C10.1754 6.02467 10.5546 6.34473 11.0001 6.53915V9.50015H7.00006C5.67447 9.50174 4.40362 10.029 3.46628 10.9664C2.52894 11.9037 2.00165 13.1746 2.00006 14.5002V22.5002H1.00006C0.734845 22.5002 0.480491 22.6055 0.292954 22.793C0.105418 22.9806 6.10352e-05 23.2349 6.10352e-05 23.5002C6.10352e-05 23.7654 0.105418 24.0197 0.292954 24.2073C0.480491 24.3948 0.734845 24.5002 1.00006 24.5002H23.0001C23.2653 24.5002 23.5196 24.3948 23.7072 24.2073C23.8947 24.0197 24.0001 23.7654 24.0001 23.5002C24.0001 23.2349 23.8947 22.9806 23.7072 22.793C23.5196 22.6055 23.2653 22.5002 23.0001 22.5002ZM7.00006 11.5002H17.0001C17.7957 11.5002 18.5588 11.8162 19.1214 12.3788C19.684 12.9414 20.0001 13.7045 20.0001 14.5002V16.4802C19.0641 16.3802 18.5001 15.7802 18.5001 15.5002C18.5001 15.2349 18.3947 14.9806 18.2072 14.793C18.0196 14.6055 17.7653 14.5002 17.5001 14.5002C17.2348 14.5002 16.9805 14.6055 16.793 14.793C16.6054 14.9806 16.5001 15.2349 16.5001 15.5002C16.5001 15.8432 15.8181 16.5002 14.7501 16.5002C13.6611 16.5002 13.0001 15.8062 13.0001 15.5002C13.0001 15.2349 12.8947 14.9806 12.7072 14.793C12.5196 14.6055 12.2653 14.5002 12.0001 14.5002C11.7348 14.5002 11.4805 14.6055 11.293 14.793C11.1054 14.9806 11.0001 15.2349 11.0001 15.5002C11.0001 15.8432 10.3181 16.5002 9.25006 16.5002C8.16106 16.5002 7.50006 15.8062 7.50006 15.5002C7.50006 15.2349 7.3947 14.9806 7.20717 14.793C7.01963 14.6055 6.76528 14.5002 6.50006 14.5002C6.23484 14.5002 5.98049 14.6055 5.79295 14.793C5.60542 14.9806 5.50006 15.2349 5.50006 15.5002C5.50006 15.8152 4.92106 16.3882 4.00006 16.4812V14.5002C4.00006 13.7045 4.31613 12.9414 4.87874 12.3788C5.44135 11.8162 6.20441 11.5002 7.00006 11.5002ZM4.00006 18.4792C4.91876 18.4384 5.79799 18.0941 6.50006 17.5002C7.27142 18.1432 8.24314 18.4965 9.24736 18.4993C10.2516 18.502 11.2252 18.1539 12.0001 17.5152C12.7749 18.1539 13.7486 18.502 14.7528 18.4993C15.757 18.4965 16.7287 18.1432 17.5001 17.5002C18.2023 18.0937 19.0815 18.4377 20.0001 18.4782V22.5002H4.00006V18.4792Z"
                      fill="#FF7701"
                    />
                  </svg>
                </span>
                <div className={styles.calendar__note_text}>
                  <p>Фаррух Ниезов</p>
                  <span>Водитель</span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className={styles.calendar_item}>
            <div className={styles.calendar__item_date}>пт 17.11</div>
            <div className={styles.calendar__item_cell}></div>
          </div>

          {/*  */}
          <div className={styles.calendar_item}>
            <div className={styles.calendar__item_date}>сб 18.11</div>
            <div className={styles.calendar__item_cell}></div>
          </div>

          {/*  */}
          <div className={styles.calendar_item}>
            <div className={styles.calendar__item_date}>вс 19.11</div>
            <div className={styles.calendar__item_cell}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
