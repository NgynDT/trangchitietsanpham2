import styles from "./form-container.module.css";

const FormContainer = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerChild} />
      <div className={styles.logoStore}>
        <img
          className={styles.logoStoreChild}
          alt=""
          src="/rectangle-2@2x.png"
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-3.svg" />
          <img className={styles.searchIcon} alt="" src="/search.svg" />
          <div className={styles.tmKim}>TÌM KIẾM</div>
        </div>
        <img className={styles.userIcon} alt="" src="/user.svg" />
        <div className={styles.shoppingCart}>
          <img
            className={styles.shoppingCartIcon}
            alt=""
            src="/shoppingcart.svg"
          />
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <div className={styles.div}>1</div>
          </div>
        </div>
      </div>
      <div className={styles.navBar}>
        <div className={styles.giCBit}>GIÁ ĐẶC BIỆT</div>
        <div className={styles.qunOParent}>
          <div className={styles.qunO}>QUẦN ÁO</div>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className={styles.oSMi}>ÁO SƠ MI</div>
        <div className={styles.oSMi}>POLO</div>
      </div>
    </div>
  );
};

export default FormContainer;
