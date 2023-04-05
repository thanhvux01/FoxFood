import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router';

let cx = classNames.bind(styles);
const UserNav = ({value}) => {
    
    const Navigate = useNavigate();
    const handleChange = (event, newValue) => {
       if(newValue === 'user'){
         Navigate('/user');
       }else if(newValue === 'cart'){
        Navigate('/cart');
       }
    };
  return (
    <div className={cx('container')}>

  
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
    <BottomNavigationAction
      label="Recents"
      value="user"
      icon={<AccountCircleIcon />}
    />
    <BottomNavigationAction
      label="Favorites"
      value="cart"
      icon={<ShoppingCartIcon />}
    />
    <BottomNavigationAction
      label="Nearby"
      value="nearby"
      icon={<LocationOnIcon />}
    />
    <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
  </BottomNavigation>
  </div>
  )
}

export default UserNav