import React from 'react'
import Header from '../../components/Header'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import OrderBar from '../../components/OrderBar';
import SummarySection from '../../components/SummarySection';
import AddressBar from '../../components/AddressBar';
import { useLocation } from 'react-router';
let cx = classNames.bind(styles);
const Payment = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className={cx('container')}>
     <Header/>
     <OrderBar/>
     <AddressBar/>
     <SummarySection/>
    </div>
  )
}

export default Payment