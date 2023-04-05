import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss';
import { useNavigate } from 'react-router';
import classNames from 'classnames/bind';
import { Tomatoes } from '../../assets/png';
import { Button } from '@mui/material';
import axios from 'axios';
import {Alert} from '@mui/material';
import { useCookies } from 'react-cookie';
let cx = classNames.bind(styles);
const Login = () => {
  const Navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['name']);
  const [Error,SetError] = useState(false);
  const userRef = useRef();
  const passwordRef = useRef();
  const Submit = async () => {
    try{
     if(userRef.current.value || passwordRef.current.value.length() > 8){
        const data = await axios.post("http://localhost:8000/api/login",{username:userRef.current.value,password:passwordRef.current.value});
        console.log(data['data']);
        setCookie('fox_token',data['data']['token'],{ path: '/' });
        Navigate('/');
     }}
     catch(error){
       console.log(error);
       SetError(true);
     }
  }
  return (
   <div className={cx('container')}>
     <div className={cx('card')}>
        <div className={cx('top-image')}>
           <img src={Tomatoes} alt='banner'/>
        </div>
        <div className={cx('signin-section')}>
           <div className={cx('label-area')}>
             <label>Sign in</label>
           </div>
           <form className={cx('form-area')}>
               <input className={cx('email','input')} placeholder='YourUsername' name='email' ref={userRef}/>
               <input className={cx('login','input')} placeholder='YourPassword' type='password' name='password' ref={passwordRef}/>
              {Error && <Alert severity="error">Username or password is incorrect</Alert> }
               <Button variant='contained' className={cx('btn')} onClick={Submit}>Sign in</Button>
           </form>
           <div className={cx('sign-up-area')}>
              <p>Not a member? <span className={cx('link')}>Sign up</span></p>
           </div>
        </div>
     </div>
   </div>
  )
}

export default Login