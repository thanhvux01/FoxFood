import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);
const Footer = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
      <div className={cx("column", "Menu")}>
          <label>Menu</label>
          <a>Combo 1 người</a>
          <a>Combo nhóm</a>
          <a>Nước ngọt</a>
          <a>Tráng miệng</a>
        </div>
        <div className={cx("column", "menu")}>
          <label>Liên hệ</label>
          <a>Theo dõi đơn hàng</a>
          <a>Hệ thống nhà hàng</a>
          <a>Liên hệ</a>
        </div>
        <div className={cx("column", "policy")}>
          <label>Chính sách</label>
          <a>Theo dõi đơn hàng</a>
          <a>Hệ thống nhà hàng</a>
          <a>Liên hệ</a>
        </div>
        <div className={cx("column", "policy")}>
          <label>Thông tin</label>
          <a>Thông tin cửa hàng</a>
          <a>Tin tức</a>
          <a>Câu chuyện</a>
        </div>
      </div>
      <label>Copyright © 2023 FoxFood </label>
    </div>
  );
};

export default Footer;
