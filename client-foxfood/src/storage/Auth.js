import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

const Auth = ({children}) => {
  const [Cookies, SetCookie] = useCookies();
  const token = Cookies["fox_token"];
  const Navigate = useNavigate();
  if (!token) {
    Navigate("/login");
  }
  return (
    <div>
       {children}
    </div>
  )
};

export default Auth;
