import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Paper , Checkbox, Button } from "@mui/material";
let cx = classNames.bind(styles);

const PayBar = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className={cx("container")}>
      <Paper elevation={3} className={cx("pay-bar")}>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <label>Chọn tất cả</label>
        <label>Xóa</label>
        <p className={cx('total')}>Tổng thanh toán ( 2 sản phẩm ) </p>
        <Button variant="contained" className={cx('btn')}>Thanh toán</Button>
      </Paper>
    </div>
  );
};

export default PayBar;
