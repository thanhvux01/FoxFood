import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const FoodBar = ({HandleCategory}) => {
  return (
    <div className={cx('container')}>
        <div className={cx('category-box')}>
            <div className={cx('category-item')}>
                <label className={cx('active')} onClick={()=>{HandleCategory('all')}}>MÓN MỚI</label>
            </div>
            <div className={cx('category-item')} onClick={()=>{HandleCategory('fry')}} >
                <label >MÓN CHIÊN</label>
            </div>
        
            <div className={cx('category-item')} onClick={()=>{HandleCategory('drink')}}>
                <label >NƯỚC GIẢI KHÁT</label>
            </div>  
            <div className={cx('category-item')} onClick={()=>{HandleCategory('chicken')}}>
                <label >MÓN GÀ</label>
            </div>
            <div className={cx('category-item')} onClick={()=>{HandleCategory('lightfood')}}>
                <label >ĐỒ ĂN NHẸ</label>
            </div>
            <div className={cx('category-item')}>
                <label >COMBO 1 NGƯỜI</label>
            </div>
            <div className={cx('category-item')}>
                <label >COMBO NHÓM</label>
            </div>         
        </div>
    </div>
  )
}

export default FoodBar