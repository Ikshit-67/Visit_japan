import React from "react";
import Styles from "../styles/Header.module.scss";
import { headerData } from "../utils/headerData";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, TextField } from "@mui/material";

const Header = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.headerWrapper}>
        <div className={Styles.logos}>
          <img src={headerData.japanFlag} alt="" />
          <p>Travel</p>
        </div>
        <div className={Styles.mainNav}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Lolm</a>
            </li>
          </ul>
        </div>
        {/* <div className={Styles.search}>
          <img src={headerData.searchIcon} alt="" />
        </div> */}
        <div className={Styles.searchbarDiv}>
          <IconButton className={Styles.search}>
            <SearchIcon />
          </IconButton>
          {/* <div className={Styles.input_wrapper}>
            <TextField variant="standard" size="small" label={""} />
            <IconButton>
              <CloseIcon />
            </IconButton>
          </div> */}
        </div>
      </div>
      <div className={Styles.navbarSlider}>
        <p>i dont know how to make this slider, plij phigur it out</p>
      </div>
    </div>
  );
};

export default Header;
