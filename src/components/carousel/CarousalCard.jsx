import React, { useContext } from "react";
import Styles from "../../styles/carousal/carousalCard.module.scss";
import { StatesContext } from "../../App";
import { transform } from "framer-motion";

const CarousalCard = ({ card }) => {
  const { offsetY } = useContext(StatesContext);
  return (
    <div className={Styles.carousalCard}>
      <div className={Styles.imgWrapper}>
        <img
          src={card.img}
          alt=""
          style={{ transform: `scale(${1 + offsetY * 0.0005})` }}
        />
      </div>

      <div className={Styles.content}>
        <h2>{card.title}</h2>
        <p>{card.desc}</p>
      </div>
    </div>
  );
};

export default CarousalCard;
