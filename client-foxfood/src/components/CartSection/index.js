import { Paper } from '@mui/material'
import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import CartItem from '../CartItem';
let cx = classNames.bind(styles);
const CartSection = () => {
  return (
    <div className={cx('container')}>
        <Paper elevation={3} className={cx('cart-section')}>
                 <CartItem/>
                 <CartItem/>
        </Paper>
    </div>
  )
}

export default CartSection