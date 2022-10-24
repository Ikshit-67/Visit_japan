import React from "react";
import Styles from "../styles/Hero.module.scss";
import { aniData } from "../utils/animationData";

const Hero = ({ currentCity }) => {
  return (
    <div className={Styles.heroWrapper}>
      <div className={Styles.headingWrapper}>
        <h1>Visit</h1>
        <div className={Styles.cityName}>
          <h1>{currentCity.title}</h1>
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
