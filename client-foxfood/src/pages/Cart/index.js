import React, { useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../../components/Header';
import UserNav from '../../components/UserNav';
import Auth from '../../storage/Auth';
import CartSection from '../../components/CartSection';
import PayBar from '../../components/PayBar';
let cx = classNames.bind(styles);

const Cart = () => {
  return (
    <div className={cx('container')}>
       <Auth>
        <Header/>
        <UserNav value={'cart'}/>
        <CartSection/>  
        <PayBar/>
       </Auth>
    </div>
  )
}

export default Cart