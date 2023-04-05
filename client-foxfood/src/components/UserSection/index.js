import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Button, Paper, TextField, Avatar, Input } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import axios from "axios";
import { useCookies } from "react-cookie";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
let cx = classNames.bind(styles);

const UserSection = () => {
  const [Cookies, SetCookie] = useCookies();
  const token = Cookies['fox_token'];
  const lastnameRef = useRef();
  const firstnameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();
  const GetUserData = async() => {
    try{
    const data = await axios.get("http://localhost:8000/api/users", {
        headers: {
          Authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      });
      console.log(data["data"]["data"]);
    }catch(err){
        console.log(err);
    }
  }
  useEffect(() => {
    GetUserData();
  }, []);

  return (
    <div className={cx("container")}>
      {/* <div className={cx('user-card')}> */}
      <Paper elevation={3} className={cx("user-card")}>
        <form className={cx("form-user")}>
          <div className={cx("input-area")}>
            <label>Họ</label>
            <TextField
              id="outlined-basic"
              // label="Họ"
              variant="outlined"
              className={cx("input")}
              ref={firstnameRef}
              value={'Vu Cong'}
            />
          </div>
          <div className={cx("input-area")}>
            <label>Tên</label>
            <TextField
              id="outlined-basic"
              // label="Tên"
              variant="outlined"
              className={cx("input")}
              ref={lastnameRef}
              value={'Thanh'}
            />
          </div>
          <div className={cx("input-area")}>
            <label>Email</label>
            <TextField
              id="outlined-basic"
              // label="Mail"
              variant="outlined"
              className={cx("input")}
              ref={emailRef}
              value={'congthanhx001@gmail.com'}
            />
          </div>
          <div className={cx("input-area")}>
            <label>Ngày sinh</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="date"
              className={cx("input")}
              ref={dateRef}
              
            />
          </div>
          <FormControl>
      <FormLabel id="radio-gender">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="radio-gender"
        name="row-radio-buttons-group"
        
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
          <Button variant="contained" className={cx("btn")}>
            Sửa
          </Button>
        </form>
        <div className={cx("avatar")}>
          <Avatar
            sx={{ bgcolor: deepOrange[500], width: "80px", height: "80px" }}
          >
            N
          </Avatar>
          {/* <Input type='file'/> */}
          <Input type="file" className={cx("input-image")} />
        </div>
      </Paper>
      {/* </div> */}
    </div>
  );
};

export default UserSection;
