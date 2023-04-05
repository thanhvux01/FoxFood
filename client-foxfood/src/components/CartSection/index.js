import { Paper } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import CartItem from "../CartItem";
let cx = classNames.bind(styles);
const CartSection = ({ Carts, CheckedHandle }) => {
  return (
    <div className={cx("container")}>
      <Paper elevation={3} className={cx("cart-section")}>
        {Carts &&
          Carts.map((item) => {
            return (
              <CartItem
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                img={item.image}
                key={item.name}
                id={item.id}
                isChecked={item.isChecked}
                CheckedHandle={CheckedHandle}
              />
            );
          })}
      </Paper>
    </div>
  );
};

export default CartSection;
