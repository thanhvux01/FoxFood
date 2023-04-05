import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Button, Input, Paper, TextField } from "@mui/material";
import { useCookies } from "react-cookie";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
let cx = classNames.bind(styles);

const CartItem = ({
  name,
  price,
  quantity,
  img,
  id,
  CheckedHandle,
  isChecked,
}) => {
  const [Cookies, setCookies] = useCookies();
  const token = Cookies["fox_token"];
  const [value, setValue] = useState(quantity);

  const handleChange = (event) => {
    CheckedHandle(id);
  };
  const setQuantity = (event) => {
    setValue(event.target.value);
  };
  const updateQuantity = async () => {
    try {
      await axios.put(
        "http://localhost:8000/api/carts",
        { cart_id: id, quantity: value },
        { headers: { Authorization: "Bearer " + token } }
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateQuantity();
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);
  return (
    <div className={cx("container")}>
      <Paper className={cx("item")}>
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <div className={cx("img-area")}>
          <img src={img} />
        </div>
        <label className={cx("title")}>{name}</label>
        <TextField
          type="number"
          size="small"
          className={cx("number")}
          defaultValue={value}
          onChange={(event) => {
            setQuantity(event);
          }}
        ></TextField>
        <label>{value * price} VND</label>
        <Button>Xóa</Button>
      </Paper>
    </div>
  );
};

export default CartItem;
