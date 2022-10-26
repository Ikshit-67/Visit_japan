import React from "react";
import Styles from "../../styles/carousal/carousal.module.scss";
import { carousalData } from "../../utils/carousalData";
import CarousalCard from "./CarousalCard";
import { Button } from "@mui/material";

const Carousal = () => {
  return (
    <section className={Styles.carousal}>
      <h1>Feel at Peace.</h1>
      <p>Places that make you fell alive!</p>
      <div className={Styles.carousalWrapper}>
        {carousalData.map((card, index) => {
          return <CarousalCard key={index} card={card} />;
        })}
      </div>
      <Button>See Available Packages...</Button>
    </section>
  );
};

export default Carousal;
