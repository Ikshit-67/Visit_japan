import React, { useEffect, useRef } from "react";
import Styles from "../styles/Header.module.scss";
import { headerData } from "../utils/headerData";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";

const Header = () => {
  const links = useRef();

  return (
    <div className={Styles.header}>
      <div className={Styles.headerWrapper}>
        <div className={Styles.logos}>
          <img src={headerData.japanFlag} alt="" />
          <p>Travel</p>
        </div>
        <div className={Styles.mainNav}>
          <ul>
            <li ref={links} className="links">
              <a href="#">Home</a>
            </li>
            <li ref={links}>
              <a href="#" className="links">
                About
              </a>
            </li>
            <li ref={links} className="links">
              <a href="#">Contact</a>
            </li>
            <li ref={links} className="links">
              <a href="#">Lolm</a>
            </li>
          </ul>
        </div>
        {/* <div className={Styles.search}>
          <img src={headerData.searchIcon} alt="" />
        </div> */}
        <div className={Styles.searchbarDiv}>
          <IconButton className={`${Styles.search} links`}>
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
