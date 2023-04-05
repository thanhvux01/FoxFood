import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Button, Input, Paper, TextField } from "@mui/material";
import { Chicken } from "../../assets/png";
import Checkbox from "@mui/material/Checkbox";
let cx = classNames.bind(styles);

const CartItem = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  
  return (
    <div className={cx("container")}>
      <Paper className={cx("item")}>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <div className={cx("img-area")}>
          <img src={Chicken} />
        </div>
        <label className={cx("title")}>Gà Hoàng Kim</label>
        <TextField
          type="number"
          size="small"
          className={cx("number")}
        ></TextField>
        <label>350.000 VND</label>
        <Button>Xóa</Button>
      </Paper>
    </div>
  );
};

export default CartItem;
