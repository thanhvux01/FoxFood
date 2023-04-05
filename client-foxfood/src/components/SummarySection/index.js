import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Paper } from '@mui/material';
import { Chicken } from '../../assets/png';
import SummaryItem from './SummaryItem';
let cx = classNames.bind(styles);

const SummarySection = () => {
  return (
    <div className={cx('container')}>
            <Paper className={cx('main')} elevation={3}>
                <div className={cx('top')}>
                <div className={cx('title')}>
                    <label>Sản phẩm</label>
                </div>
                <div className={cx('price')}>
                   <label>Đơn giá</label>
                </div>
                <div className={cx('quantity')}>
                   <label>Số lượng</label>
                </div>
                <div className={cx('total')}>
                   <label>Thành tiền</label>
                </div>
                </div>
                <SummaryItem/>
                
            </Paper>
            
    </div>
  )
}

export default SummarySection