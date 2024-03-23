import React from "react";
import styles from "./NavBar.module.css";
import { Button } from "../Button/Button";
import Logo from "../../assets/LogoImage.png";
import Search from "../Search/Search";
const NavBar = () => {
  return (
       <div>
            <nav className={styles.navbar}>
                <div className={styles.logoDiv} ><img src={Logo} alt="logo" width={67}/></div>
                <Search search={"Search a song of your choice"}/>
                <Button children="Give Feedback"/>
            </nav>
        </div>
  );
};

export default NavBar;
