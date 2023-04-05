import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Button, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
let cx = classNames.bind(styles);


const AddressBar = () => {
  return (
    <div className={cx('container')}>
        <Paper className={cx('address-section')}>
            <div className={cx('title')}>
              <LocationOnIcon className={cx('icon')}/>
              <label>Địa chỉ nhận hàng</label>
            </div>
            <div className={cx('detail')}>
                  <div className={cx('number-section')}>
                  <label>Vũ Công Thành (+84) 0901427050</label>
                  </div>
                 <div className={cx('address-detail')}>
                 <h4>Thành Phố Thủ Đức, TP. Hồ Chí Minh</h4>
                 </div>
                 
                 <Button className={cx('btn')}>Thay đổi</Button>
            </div>
        </Paper>
    </div>
  )
}

export default AddressBar