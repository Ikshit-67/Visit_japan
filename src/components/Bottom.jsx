import React from 'react'
import Styles from "../styles/Bottom.module.scss"
import { bottomData } from "../utils/bottomData"

const Bottom = () => {
  return (
    <div className={Styles.bottom}>
        <div className={Styles.infoContainer}>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, consequatur?</h3>
            <div className={Styles.learnMoreAndArrow}>
              <p>learn more</p>
              <img src={bottomData.arrowIcon} alt="" />
            </div>
        </div>
        <div className={Styles.infoContainer}>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, consequatur?</h3>
            <div className={Styles.learnMoreAndArrow}>
              <p>learn more</p>
              <img src={bottomData.arrowIcon} alt="" />
            </div>
        </div>
        <div className={Styles.infoContainer}>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, consequatur?</h3>
            <div className={Styles.learnMoreAndArrow}>
              <p>learn more</p>
              <img src={bottomData.arrowIcon} alt="" />
            </div>
        </div>
    </div>
  );
};

export default Bottom;