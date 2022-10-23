import React from 'react'
import Styles from "../styles/Header.module.scss"
import { headerData } from "../utils/headerData"

const Header = () => {
  return (
    <div className={Styles.header}>
        <div className={Styles.logos}>
            <img src={headerData.japanFlag} alt="" />
            <p>Travel</p>
        </div>
        <div className={Styles.mainNav}>
            <ul>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
            </ul>
        </div>
        <div className={Styles.search}>
            <img src={headerData.searchIcon} alt="" />
        </div>
    </div>
  );
};

export default Header;
