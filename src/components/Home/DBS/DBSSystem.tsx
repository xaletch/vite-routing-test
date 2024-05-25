import styles from "./dbssystem.module.css";

export const DBSSystem = () => {
  return (
    <div className={styles.dbs_content}>
      <div className={styles.content_inner}>
        <div className={styles.content_item}>
          <p className={styles.content__item_text}>
            ИП Ахмедов Бахтовар Бахромович
          </p>
          <div
            className={`${styles.content__item_delivery} ${styles.purple} purple`}
          >
            <span>
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.40012 15.6C1.0745 15.6 0.00012207 14.5238 0.00012207 13.2V2.4C0.00012207 1.07438 1.0745 0 2.40012 0H13.2001C14.5239 0 15.6001 1.07438 15.6001 2.4V3.6H18.0489C18.5739 3.6 19.0726 3.82875 19.4139 4.23L22.3651 7.6725C22.6464 7.99875 22.8001 8.415 22.8001 8.8425V14.4H23.4001C23.7301 14.4 24.0001 14.67 24.0001 15C24.0001 15.33 23.7301 15.6 23.4001 15.6H21.6001C21.6001 17.5875 19.9876 19.2 18.0001 19.2C15.9789 19.2 14.4001 17.5875 14.4001 15.6H9.56637C9.56637 17.5875 7.98762 19.2 5.96637 19.2C3.97887 19.2 2.36637 17.5875 2.36637 15.6H2.40012ZM1.20012 2.4V13.2C1.20012 13.8638 1.7375 14.4 2.40012 14.4H2.60487C3.09912 13.0013 4.43262 12 6.00012 12C7.56762 12 8.90262 13.0013 9.39387 14.4H14.4001V2.4C14.4001 1.73738 13.8639 1.2 13.2001 1.2H2.40012C1.7375 1.2 1.20012 1.73738 1.20012 2.4ZM21.4089 8.4L18.5026 5.01C18.3901 4.875 18.1914 4.8 18.0489 4.8H15.6001V8.4H21.4089ZM15.6001 9.6V12.915C16.2039 12.345 17.0776 12 18.0001 12C19.5676 12 20.9026 13.0013 21.3939 14.4H21.6001V9.6H15.6001ZM6.00012 13.2C4.67637 13.2 3.60012 14.2763 3.60012 15.6C3.60012 16.9237 4.67637 18 6.00012 18C7.32387 18 8.40012 16.9237 8.40012 15.6C8.40012 14.2763 7.32387 13.2 6.00012 13.2ZM18.0001 18C19.3239 18 20.4001 16.9237 20.4001 15.6C20.4001 14.2763 19.3239 13.2 18.0001 13.2C16.6764 13.2 15.6001 14.2763 15.6001 15.6C15.6001 16.9237 16.6764 18 18.0001 18Z"
                  fill="#8653D4"
                />
              </svg>
            </span>
            Доставки
          </div>
        </div>
        <div className={styles.content_item}>
          <p className={styles.content__item_text}>
            ИП Ахмедов Бахтовар Бахромович
          </p>
          <div
            className={`${styles.content__item_delivery} ${styles.green} green`}
          >
            <span>
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.7335 15.6C1.40787 15.6 0.333496 14.5238 0.333496 13.2V2.4C0.333496 1.07438 1.40787 0 2.7335 0H13.5335C14.8572 0 15.9335 1.07438 15.9335 2.4V3.6H18.3822C18.9072 3.6 19.406 3.82875 19.7472 4.23L22.6985 7.6725C22.9797 7.99875 23.1335 8.415 23.1335 8.8425V14.4H23.7335C24.0635 14.4 24.3335 14.67 24.3335 15C24.3335 15.33 24.0635 15.6 23.7335 15.6H21.9335C21.9335 17.5875 20.321 19.2 18.3335 19.2C16.3122 19.2 14.7335 17.5875 14.7335 15.6H9.89975C9.89975 17.5875 8.321 19.2 6.29975 19.2C4.31225 19.2 2.69975 17.5875 2.69975 15.6H2.7335ZM1.5335 2.4V13.2C1.5335 13.8638 2.07087 14.4 2.7335 14.4H2.93825C3.4325 13.0013 4.766 12 6.3335 12C7.901 12 9.236 13.0013 9.72725 14.4H14.7335V2.4C14.7335 1.73738 14.1972 1.2 13.5335 1.2H2.7335C2.07087 1.2 1.5335 1.73738 1.5335 2.4ZM21.7422 8.4L18.836 5.01C18.7235 4.875 18.5247 4.8 18.3822 4.8H15.9335V8.4H21.7422ZM15.9335 9.6V12.915C16.5372 12.345 17.411 12 18.3335 12C19.901 12 21.236 13.0013 21.7272 14.4H21.9335V9.6H15.9335ZM6.3335 13.2C5.00975 13.2 3.9335 14.2763 3.9335 15.6C3.9335 16.9237 5.00975 18 6.3335 18C7.65725 18 8.7335 16.9237 8.7335 15.6C8.7335 14.2763 7.65725 13.2 6.3335 13.2ZM18.3335 18C19.6572 18 20.7335 16.9237 20.7335 15.6C20.7335 14.2763 19.6572 13.2 18.3335 13.2C17.0097 13.2 15.9335 14.2763 15.9335 15.6C15.9335 16.9237 17.0097 18 18.3335 18Z"
                  fill="#54B800"
                />
              </svg>
            </span>
            Доставки
          </div>
        </div>
        <div className={styles.content_item}>
          <p className={styles.content__item_text}>
            ИП Ахмедов Бахтовар Бахромович
          </p>
          <div
            className={`${styles.content__item_delivery} ${styles.orange} orange`}
          >
            <span>
              <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.06687 15.6C1.74125 15.6 0.66687 14.5238 0.66687 13.2V2.4C0.66687 1.07438 1.74125 0 3.06687 0H13.8669C15.1906 0 16.2669 1.07438 16.2669 2.4V3.6H18.7156C19.2406 3.6 19.7394 3.82875 20.0806 4.23L23.0319 7.6725C23.3131 7.99875 23.4669 8.415 23.4669 8.8425V14.4H24.0669C24.3969 14.4 24.6669 14.67 24.6669 15C24.6669 15.33 24.3969 15.6 24.0669 15.6H22.2669C22.2669 17.5875 20.6544 19.2 18.6669 19.2C16.6456 19.2 15.0669 17.5875 15.0669 15.6H10.2331C10.2331 17.5875 8.65437 19.2 6.63312 19.2C4.64562 19.2 3.03312 17.5875 3.03312 15.6H3.06687ZM1.86687 2.4V13.2C1.86687 13.8638 2.40425 14.4 3.06687 14.4H3.27162C3.76587 13.0013 5.09937 12 6.66687 12C8.23437 12 9.56937 13.0013 10.0606 14.4H15.0669V2.4C15.0669 1.73738 14.5306 1.2 13.8669 1.2H3.06687C2.40425 1.2 1.86687 1.73738 1.86687 2.4ZM22.0756 8.4L19.1694 5.01C19.0569 4.875 18.8581 4.8 18.7156 4.8H16.2669V8.4H22.0756ZM16.2669 9.6V12.915C16.8706 12.345 17.7444 12 18.6669 12C20.2344 12 21.5694 13.0013 22.0606 14.4H22.2669V9.6H16.2669ZM6.66687 13.2C5.34312 13.2 4.26687 14.2763 4.26687 15.6C4.26687 16.9237 5.34312 18 6.66687 18C7.99062 18 9.06687 16.9237 9.06687 15.6C9.06687 14.2763 7.99062 13.2 6.66687 13.2ZM18.6669 18C19.9906 18 21.0669 16.9237 21.0669 15.6C21.0669 14.2763 19.9906 13.2 18.6669 13.2C17.3431 13.2 16.2669 14.2763 16.2669 15.6C16.2669 16.9237 17.3431 18 18.6669 18Z"
                  fill="#FF7701"
                />
              </svg>
            </span>
            Доставки
          </div>
        </div>
      </div>
    </div>
  );
};