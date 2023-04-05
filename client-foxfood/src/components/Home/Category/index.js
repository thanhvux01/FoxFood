import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import FoodCard from '../../FoodCard';
import { CategoryArray } from './config';
let cx = classNames.bind(styles);

const Category = () => {
  return (
    <div className={cx('container')}>
         <div className={cx('category-box')}>
              <div className={cx('header')}>
              <label>DANH MỤC MÓN ĂN</label>
              <div className={cx('border-line')}></div>
              </div>
              <div className={cx('bottom-menu')}>
                {CategoryArray.map((item)=><FoodCard description={item.description} name={item.name} img={item.image}/>)}
              </div>
         </div>
    </div>
  )
}

export default Category