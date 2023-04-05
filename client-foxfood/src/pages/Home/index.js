import React from "react";
import classNames from "classnames/bind";
import styles from './styles.module.scss';
import Banner from "../../components/Home/Banner";
import Category from "../../components/Home/Category";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
let cx = classNames.bind(styles);
// const homeHeader = cx("home-header");
const Home = () => {
  // const cookies = new Cookies();
  // const token = cookies.get('fox_token');
  // console.log(token);
  // const [Cookies,setCookie] = useCookies();
  // console.log(Cookies)
  return (
    <div className={cx("main")}>
        <Header/> 
        <Banner/>
        <Category/>
        <Footer/>
    </div>
  );
};

export default Home;
