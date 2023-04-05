import React from "react";
import { Route,Routes } from "react-router";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import { CookiesProvider } from "react-cookie";
import './global.scss';
import User from "./pages/User";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

const App = () => {
  return (
 <React.Fragment>
  <CookiesProvider>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/menu" element={<Menu/>} >
        </Route>
       {/* <Route path="/auth"  >
             <Route index element={<Authentication/>}/>
             <Route path=":switch" element={<Authentication/>}/>
        </Route> */}
          <Route path="/login" element={<Login/>} ></Route>
          <Route path="/user" element={<User/>} > </Route>
          <Route path="/cart" element={<Cart/>} > </Route>
          <Route path="/payment" element={<Payment/>} > </Route>
      

      </Routes>
      </CookiesProvider>
 </React.Fragment>
  );
};

export default App;
