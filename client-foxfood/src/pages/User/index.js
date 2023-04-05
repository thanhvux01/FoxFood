import React, { useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../../components/Header';
import UserNav from '../../components/UserNav';
import UserSection from '../../components/UserSection';
import Auth from '../../storage/Auth';
let cx = classNames.bind(styles);

const User = () => {



  return (
    <div className={cx('container')}>
       <Auth>
        <Header/>
        <UserNav value={'user'}/>
        <UserSection/>
       </Auth>
    </div>
  )
}

export default User