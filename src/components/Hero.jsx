import React, { useEffect, useRef } from "react";
import Styles from "../styles/Hero.module.scss";
import { aniData } from "../utils/animationData";

const Hero = ({ currentCity }) => {
  return (
    <div className={Styles.heroWrapper}>
      <div className={Styles.headingWrapper}>
        <h2>Visit</h2>
        <div className={Styles.cityName}>
          <h1>{currentCity.title}</h1>
        </div>
        <div className={Styles.latNdLong}>
          <p data-content="latitude and longitude">{currentCity.title}</p>
        </div>
      </div>
      <div></div>
      <ul>
        {aniData.map((ele, ind) => {
          return (
            <li className={`${currentCity.id === ind ? Styles.active : ""}`}>
              {ind + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Hero;
