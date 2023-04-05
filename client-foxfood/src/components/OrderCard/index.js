import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Button } from '@mui/material';
// import { useContext } from 'react';
// import { MenuContext } from '../../storage/menu-context';
let cx = classNames.bind(styles);
const OrderCard = ({img,name,description,AddToCart,id}) => {
//   const data = useContext(MenuContext);
  return (
    <div className={cx('card')}>
       <div className={cx('img-holder')}>
         <img src={img} alt="food" className={cx('img')}/>
       </div>
            <label className={cx('title')}>{name ? name.toUpperCase() : ""}</label>
           <p className={cx('detail')}>{description ? description : ""}</p>
          
            <Button variant='contained' className={cx('btn')}  onClick={()=>{
              AddToCart(id,1)
            }} >Thêm</Button>
    </div>
  )
}

export default OrderCard