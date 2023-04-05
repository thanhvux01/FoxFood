import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { MenuItem } from '@mui/material';
import { Chicken } from '../../assets/png';
let cx = classNames.bind(styles);

const SmallCardItem = ({name,price,quantity}) => {
  return (
    <MenuItem className={cx('container')} >
             <div className={cx('list-item')}>
                 <img src={Chicken} />
                 <label>{name}</label>
                 <label>{quantity*price} VND</label>
             </div>
    </MenuItem>
  )
}

export default SmallCardItem