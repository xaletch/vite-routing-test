import "./subscription.css";

export const Subscription = () => {
  return (
    <div className="subscription">
      <h2 className="page__title">Подписка</h2>
      <div className="subscription__wrapper">
        <p className="subscription__wrapper-text">
          * Подписка продлевается автоматически при наличии достаточных средств
          на лицевом счету
        </p>
        <div className="subscription__balance-card">
          <div className="subscription__card-inner">
            <div className="subscription__card-title">Баланс</div>
            <div className="subscription__balance">
              <span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.38754 20.2632L3.77941 19.6237L3.38754 20.2632ZM1.73683 18.6125L2.37631 18.2206H2.37631L1.73683 18.6125ZM20.2632 18.6125L19.6237 18.2206L20.2632 18.6125ZM18.6125 20.2632L18.2206 19.6237L18.6125 20.2632ZM18.6125 4.7368L18.2206 5.37628L18.6125 4.7368ZM20.2632 6.38751L19.6237 6.77938L20.2632 6.38751ZM3.38754 4.7368L3.77941 5.37628H3.77941L3.38754 4.7368ZM1.73683 6.38751L2.37631 6.77938H2.37631L1.73683 6.38751ZM17.4768 1.54645L18.0181 1.02728V1.02728L17.4768 1.54645ZM2.84425 1.89079L3.29709 2.48865V2.48865L2.84425 1.89079ZM1.85447 2.92267L2.46979 3.35148L1.85447 2.92267ZM18 4.13032H18.75L18.75 4.12662L18 4.13032ZM17.3637 12.6137C17.7779 12.6137 18.1137 12.2779 18.1137 11.8637C18.1137 11.4494 17.7779 11.1137 17.3637 11.1137V12.6137ZM14.6364 11.1137C14.2222 11.1137 13.8864 11.4494 13.8864 11.8637C13.8864 12.2779 14.2222 12.6137 14.6364 12.6137V11.1137ZM9.50003 4.75H12.5V3.25H9.50003V4.75ZM12.5 20.25H9.50003V21.75H12.5V20.25ZM9.50003 20.25C7.84879 20.25 6.66303 20.2492 5.73812 20.1613C4.82436 20.0744 4.24293 19.9078 3.77941 19.6237L2.99566 20.9027C3.73448 21.3554 4.57259 21.5572 5.59614 21.6545C6.60852 21.7508 7.87784 21.75 9.50003 21.75V20.25ZM0.250028 12.5C0.250028 14.1222 0.249237 15.3915 0.345496 16.4039C0.442815 17.4274 0.644597 18.2655 1.09735 19.0044L2.37631 18.2206C2.09226 17.7571 1.92564 17.1757 1.83876 16.2619C1.75082 15.337 1.75003 14.1512 1.75003 12.5H0.250028ZM3.77941 19.6237C3.20755 19.2733 2.72674 18.7925 2.37631 18.2206L1.09735 19.0044C1.57147 19.7781 2.22197 20.4286 2.99566 20.9027L3.77941 19.6237ZM12.5 21.75C14.1222 21.75 15.3915 21.7508 16.4039 21.6545C17.4275 21.5572 18.2656 21.3554 19.0044 20.9027L18.2206 19.6237C17.7571 19.9078 17.1757 20.0744 16.2619 20.1613C15.337 20.2492 14.1513 20.25 12.5 20.25V21.75ZM19.6237 18.2206C19.2733 18.7925 18.7925 19.2733 18.2206 19.6237L19.0044 20.9027C19.7781 20.4286 20.4286 19.7781 20.9027 19.0044L19.6237 18.2206ZM18.2206 5.37628C18.7925 5.72672 19.2733 6.20752 19.6237 6.77938L20.9027 5.99563C20.4286 5.22194 19.7781 4.57144 19.0044 4.09732L18.2206 5.37628ZM9.50003 3.25C7.87784 3.25 6.60852 3.24921 5.59614 3.34547C4.57259 3.44279 3.73448 3.64457 2.99566 4.09732L3.77941 5.37628C4.24293 5.09223 4.82436 4.92561 5.73812 4.83873C6.66303 4.75079 7.84879 4.75 9.50003 4.75V3.25ZM1.75003 12.5C1.75003 10.8488 1.75082 9.663 1.83876 8.73809C1.92564 7.82434 2.09226 7.24291 2.37631 6.77938L1.09735 5.99563C0.644597 6.73445 0.442815 7.57256 0.345496 8.59611C0.249237 9.6085 0.250028 10.8778 0.250028 12.5H1.75003ZM2.99566 4.09732C2.22197 4.57144 1.57147 5.22194 1.09735 5.99563L2.37631 6.77938C2.72674 6.20752 3.20755 5.72672 3.77941 5.37628L2.99566 4.09732ZM9.0531 1.75H14.4218V0.25H9.0531V1.75ZM14.4218 1.75C15.2875 1.75 15.8582 1.75173 16.2814 1.81105C16.6797 1.86687 16.8346 1.96039 16.9355 2.06562L18.0181 1.02728C17.5949 0.586062 17.0659 0.406351 16.4896 0.325567C15.9381 0.248272 15.2434 0.25 14.4218 0.25V1.75ZM9.0531 0.25C7.3929 0.25 6.08497 0.248882 5.04731 0.366088C3.99369 0.485096 3.12972 0.733701 2.3914 1.29293L3.29709 2.48865C3.73482 2.15709 4.29767 1.9603 5.21567 1.85661C6.14962 1.75112 7.35809 1.75 9.0531 1.75V0.25ZM1.75003 9.39563C1.75003 7.63063 1.75098 6.36468 1.85282 5.38472C1.95338 4.41704 2.14552 3.81679 2.46979 3.35148L1.23915 2.49385C0.708978 3.25462 0.473898 4.14188 0.360851 5.22968C0.24908 6.3052 0.250028 7.6627 0.250028 9.39563H1.75003ZM2.3914 1.29293C1.94809 1.62872 1.55947 2.03422 1.23915 2.49385L2.46979 3.35148C2.70137 3.01918 2.98078 2.72823 3.29709 2.48865L2.3914 1.29293ZM18.75 4.12662C18.7467 3.44995 18.7322 2.86358 18.6475 2.37747C18.5594 1.87228 18.3854 1.41025 18.0181 1.02728L16.9355 2.06562C17.0289 2.16295 17.1131 2.30988 17.1698 2.63506C17.2298 2.97932 17.2466 3.44473 17.25 4.13403L18.75 4.12662ZM0.250028 9.39563C0.250028 10.3713 0.229868 11.2642 0.250285 12.0202L1.74974 11.9798C1.72998 11.2482 1.75003 10.424 1.75003 9.39563H0.250028ZM20.5 13.8409H14.6364V15.3409H20.5V13.8409ZM11.1591 11.8637C11.1591 13.7841 12.7159 15.3409 14.6364 15.3409V13.8409C13.5444 13.8409 12.6591 12.9557 12.6591 11.8637H11.1591ZM12.6591 11.8637C12.6591 10.7716 13.5444 9.88638 14.6364 9.88638V8.38638C12.7159 8.38638 11.1591 9.94321 11.1591 11.8637H12.6591ZM17.3637 11.1137H14.6364V12.6137H17.3637V11.1137ZM12.5 4.75C13.8847 4.75 14.9449 4.75032 15.8035 4.8033C16.6613 4.85623 17.261 4.95942 17.7338 5.13895L18.2663 3.73667C17.5862 3.47839 16.8119 3.36267 15.8959 3.30615C14.9807 3.24968 13.8674 3.25 12.5 3.25V4.75ZM17.7338 5.13895C17.9108 5.20619 18.071 5.2846 18.2206 5.37628L19.0044 4.09732C18.771 3.95427 18.5261 3.83534 18.2663 3.73667L17.7338 5.13895ZM17.25 4.13032V4.43781H18.75V4.13032H17.25ZM14.6364 9.88638H20.9444V8.38638H14.6364V9.88638ZM21.75 12.5C21.75 11.1255 21.7504 10.0077 21.693 9.08959L20.1959 9.18316C20.2497 10.0439 20.25 11.108 20.25 12.5H21.75ZM21.693 9.08959C21.6145 7.83476 21.4247 6.84749 20.9027 5.99563L19.6237 6.77938C19.9527 7.3161 20.1224 8.00707 20.1959 9.18316L21.693 9.08959ZM20.25 12.5C20.25 13.2875 20.25 13.9722 20.2399 14.5785L21.7397 14.6034C21.75 13.9821 21.75 13.2839 21.75 12.5H20.25ZM20.2399 14.5785C20.2074 16.537 20.0635 17.5031 19.6237 18.2206L20.9027 19.0044C21.5829 17.8944 21.7077 16.5313 21.7397 14.6034L20.2399 14.5785ZM20.5 15.3409H20.9898V13.8409H20.5V15.3409Z"
                    fill="#8653D4"
                  />
                </svg>
              </span>
              0 ₽
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
