import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";
import {
  faCircleUser,
  faBurger,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Badge, Button } from "@mui/material";
import { Fox } from "../../assets/png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SmallCardItem from "../SmallCartItem";
let cx = classNames.bind(styles);
const Header = ({ ListCart }) => {
  const [Cookies,SetCookie,RemoveCookie] = useCookies();
  const [isLoggin,SetLoggin] = useState();
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
    <div className={cx("container")}>
      <div className={cx("header-box")}>
        <div
          className={cx("icon-box")}
          onClick={() => {
            Navigate("/");
          }}
        >
          <img src={Fox} className={cx("logo")} />
          <label>
            Fox
            <br />
            Food
          </label>
        </div>
        <div className={cx("list-label")}>
          <label
            onClick={() => {
              Navigate("/menu");
            }}
          >
            THỰC ĐƠN
          </label>
          <label>COMBO</label>
          <label>THÔNG TIN LIÊN HỆ</label>
        </div>
        <div className={cx("user-box")}>
          <label>English</label>
          <FontAwesomeIcon
            icon={faCircleUser}
            className={cx("icon")}
            onClick={handleClick}
          />
          <Badge badgeContent={ListCart ? ListCart.length : 0} color="secondary">
            <FontAwesomeIcon icon={faBurger} size="2x" onClick={handleClick2} />
          </Badge>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
           { !Cookies['fox_token'] && <MenuItem
              onClick={() => {
                Navigate("/login");
              }}
            >
              Login
            </MenuItem> }
            { Cookies['fox_token'] &&
            <MenuItem
              onClick={() => {
                
                Navigate("/user");
              }}
            >
              My account
            </MenuItem>
           }
             { Cookies['fox_token'] &&
            <MenuItem
              onClick={() => {
                Navigate("/");
              }}
            >
              Logout
            </MenuItem>
           }
          </Menu>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose2}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {ListCart &&
              ListCart.map((item) => {
                return (
                  <SmallCardItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                );
              })}
            <MenuItem className={cx("btn-bottom")}>
              <Button className={cx("btn")}>Giỏ Hàng</Button>
            </MenuItem>
          </Menu>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
      </div>
    </div>
  );
};

export default Header;
