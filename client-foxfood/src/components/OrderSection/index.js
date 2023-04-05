import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import OrderCard from '../OrderCard';
let cx = classNames.bind(styles);

const OrderSection = ({ListFood,AddToCart}) => {
 
  return (
    <div className={cx('container')}>
       <div className={cx('grid-container')}>
          {ListFood.map((item)=>{
            return <OrderCard key={item.name} img={item.image} description={item.description} name={item.name} AddToCart={AddToCart} id={item.dish_id} />
          })}
       </div>
    </div>
  )
}

export default OrderSection