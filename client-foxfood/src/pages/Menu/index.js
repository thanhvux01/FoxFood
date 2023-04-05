import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useCookies } from 'react-cookie';
import Header from '../../components/Header';
import OrderBar from '../../components/OrderBar';
import FoodBar from '../../components/FoodBar';
import OrderSection from '../../components/OrderSection';
import axios from 'axios';
let token;
let cx = classNames.bind(styles);
const Menu = () => {
  const [Cookies,SetCookie] = useCookies();
  const [Carts,SetCart] = useState();
  const GetCart = async () => {
      try{
        const data = await axios.get("http://localhost:8000/api/carts",{headers: {
          Authorization: "Bearer " + token, //the token is a variable which holds the token
        }});
        SetCart(data['data']['data']);
      }
      catch(err){
        console.log(err.request.status);
      }
  }
  const AddToCart =  async (id,quantity) => {
      
       try{
        await axios.post('http://localhost:8000/api/carts',{dish_id:id.toString(),quantity:quantity},{headers: {
          Authorization: "Bearer " + token, //the token is a variable which holds the token
        }});
        GetCart();
      }catch(err){
         console.log(err);
      }
  }
  const [Category,SetCategory] = useState("all");
  const [ListFood,SetListFood] = useState([]);
  const GetData = async (str) => {
    const data =  await axios.get(str);
    SetListFood(data["data"]["data"]);
  }
  const HandleCategory = (str) => {
      SetCategory(str);
  }
  useEffect(()=>{
    if(Cookies['fox_token']){
      token = Cookies['fox_token']
      GetCart();
   }
  },[])
  useEffect(()=>{
    switch(Category){
      case "chicken":
        GetData("http://localhost:8000/api/sort-category/1");
        break;
      case "drink":
        GetData("http://localhost:8000/api/sort-category/3");
      break;
      case "fry":
        GetData("http://localhost:8000/api/sort-category/5");
      break;
      case "fry":
        GetData("http://localhost:8000/api/sort-category/2");
      break;
      case "lightfood":
        GetData("http://localhost:8000/api/sort-category/4");
      break;
      case "all":
        GetData("http://localhost:8000/api/dishes");
        break;
         
    }
  },[Category])
  return (
    <div className={cx('main')}>
        <Header ListCart={Carts}/>
        <OrderBar/>
        <FoodBar HandleCategory={HandleCategory}/>
        <OrderSection ListFood={ListFood} AddToCart={AddToCart}/>
    </div>
  
  )
}

export default Menu