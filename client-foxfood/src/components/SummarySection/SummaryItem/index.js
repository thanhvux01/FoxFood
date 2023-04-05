import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Chicken } from '../../../assets/png';
let cx = classNames.bind(styles);

const SummaryItem = () => {
  return (
    <div className={cx('row')}>
       <div className={cx('thumbnail')}>
                   <div className={cx('img-holder')}>
                      <img src={Chicken} />
                   </div>
                   <h3>Gà Hoàng Kim</h3>
                </div>
                <div className={cx('price-detail')}>
                   <label>355.000</label>
                </div>
                <div className={cx('quantity-detail')}>
                   <label>6</label>
                </div>
                <div className={cx('total-detail')}>
                   <label>2.300.000 VND</label>
                </div>
    </div>
  )
}

export default SummaryItem