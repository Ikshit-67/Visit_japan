import React from "react";
import Styles from "../styles/Hero.module.scss";

const Hero = ({ currentCity }) => {
  return (
    <div className={Styles.heroWrapper}>
      <div className={Styles.headingWrapper}>
        <h1>Visit</h1>
        <div className={Styles.cityName}>
          <h1>{currentCity}</h1>
        </div>
      </div>
      <div></div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
};

export default Hero;
