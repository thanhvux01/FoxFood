import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../../components/Header';
import UserNav from '../../components/UserNav';
import Auth from '../../storage/Auth';
import CartSection from '../../components/CartSection';
import CartBar from '../../components/CartBar';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
let cx = classNames.bind(styles);

const Cart = () => {
  const [Cookies,setCookie] = useCookies();
  const Navigate = useNavigate();
  const token = Cookies["fox_token"];
  const [Total,setTotal] = useState(0);
  const [Carts,SetCarts] = useState();
  const GetCarts = async () => {
     try{
      const data = await axios.get('http://localhost:8000/api/carts',{headers: {Authorization: 'Bearer ' + token, }})
      SetCarts(data['data']['data']);
      
     }catch(err){
        console.log(err);
     }
  }
  const TotalHandle = () => {
        const i = Carts.filter((item)=>{
         return item.isChecked == 1;
        })  
        
        setTotal(i.length);
  }
  const CheckedHandle = (id) => {
       const arr =  Carts.map((item)=>{
              if(item.id==id){
                 item.isChecked = !item.isChecked;
              }
              return item
         })
         SetCarts(arr);
         TotalHandle();
  }
  const GotoPayment = () => {
      Navigate('/payment',{
         state:Carts.filter((item)=>{
            return item.isChecked == 1;
         })
      })
  }
  useEffect(()=>{
      GetCarts();
  },[])

  return (
    <div className={cx('container')}>
       <Auth>
        <Header/>
        <UserNav value={'cart'}/>
        { Carts && <CartSection Carts={Carts} CheckedHandle={CheckedHandle}/>  }
        <CartBar Total={Total} GotoPayment={GotoPayment}/>
       </Auth>
    </div>
  )
}

export default Cart