import React from "react";
import Styles from "../styles/Bottom.module.scss";
import { bottomData } from "../utils/bottomData";
import { Button } from "@mui/material";

const Bottom = () => {
  return (
    <div className={Styles.bottom}>
      <div className={Styles.infoContainer}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          consequatur?
        </p>
        <Button className={Styles.learnMoreAndArrow}>
          <p>learn more</p>
          <img src={bottomData.arrowIcon} alt="" />
        </Button>
      </div>
      <div className={Styles.infoContainer}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          consequatur?
        </p>
        <Button className={Styles.learnMoreAndArrow}>
          <p>learn more</p>
          <img src={bottomData.arrowIcon} alt="" />
        </Button>
      </div>
      <div className={Styles.infoContainer}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          consequatur?
        </p>
        <Button className={Styles.learnMoreAndArrow}>
          <p>learn more</p>
          <img src={bottomData.arrowIcon} alt="" />
        </Button>
      </div>
    </div>
  );
};

export default Bottom;
