import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Shipping, Bento } from "../../assets/png";
import { Button } from '@mui/material';
let cx = classNames.bind(styles);

const OrderBar = () => {
  return (
    <div className={cx('container')}>
    <div className={cx("order-section")}>
    <div className={cx("label-box")}>
      <label>Đặt ngay</label>
    </div>
    <div className={cx("label-box")}>
      <label>Giao hàng</label>
      <img src={Shipping} />
    </div>
    <div className={cx("label-box")}>
      <label>Hoặc mang đi</label>
      <img src={Bento} />
    </div>
    <Button variant="contained" className={cx("btn")}>
      Bắt đầu đặt hàng
    </Button>
  </div>
  </div>
  )
}

export default OrderBar