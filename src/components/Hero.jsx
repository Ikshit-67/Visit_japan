import React, { useEffect, useRef } from "react";
import Styles from "../styles/Hero.module.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { aniData } from "../utils/animationData";

const Hero = ({ currentCity }) => {
  return (
    <div className={Styles.heroWrapper}>
      <div className={Styles.headingWrapper}>
        <h2>Visit</h2>
        <div className={`${Styles.cityName} highlight`}>
          <h1>{currentCity.title}</h1>
        </div>
        <div className={Styles.latNdLong}>
          <div className={Styles.latLongWrapper}>
            <LocationOnIcon />
            <p data-content="latitude and longitude">{currentCity.cords}</p>
          </div>
        </div>
      </div>
      <div></div>
      <ul>
        {aniData.map((ele, ind) => {
          return (
            <li
              className={`${currentCity.id === ind ? Styles.active : ""} links`}
            >
              <p> {ind + 1}</p>
              <div className={Styles.neonEffect}></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Hero;
