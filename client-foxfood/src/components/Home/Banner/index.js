import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Shipping, Bento, Banner1, Combo } from "../../../assets/png";
import { Button } from "@mui/material";
import OrderBar from "../../OrderBar";
let cx = classNames.bind(styles);
const Banner = () => {
  const [MouseDown, SetMouseDown] = useState(0);
  const [Width, SetWidth] = useState({ 1: 100, 2: 0, 3: 0 });
  const [Index, SetIndex] = useState(true);
  const OnMouseDown = (e) => {
    SetMouseDown(e.clientX);
  };
  const OnMouseUp = () => {
    SetMouseDown(0);
    if (Width["2"] < 30) {
      SetWidth({ 1: 100, 2: 0, 3: 0 });
    } else {
      SetWidth({ 1: 100, 2: 0, 3: 0 });
      SetIndex((prev) => {
        return !prev;
      });
    }
  };
  const DragImage = (e) => {
    if (MouseDown > 0 && MouseDown > e.clientX) {
      SetWidth({
        1: `${100 - ((MouseDown * 100) / e.clientX - 100)}`,
        2: `${(MouseDown * 100) / e.clientX - 100}`,
        3: "0",
      });
    }
  };
  return (
    <div className={cx("container")}>
      <OrderBar/>
      <div className={cx("banner-section")}>
        <div
          className={cx("img-box")}
          onMouseMove={DragImage}
          onMouseDown={OnMouseDown}
          onMouseUp={OnMouseUp}
        >
          {Index ? (
            <img
              src={Banner1}
              style={{ width: `${Width["1"]}%` }}
              draggable={false}
            />
          ) : (
            <img
              src={Combo}
              style={{ width: `${Width["1"]}%` }}
              draggable={false}
            />
          )}
          {Index ? (
            <img
              src={Combo}
              style={{ width: `${Width["2"]}%` }}
              draggable={false}
            />
          ) : (
            <img
              src={Banner1}
              style={{ width: `${Width["2"]}%` }}
              draggable={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
