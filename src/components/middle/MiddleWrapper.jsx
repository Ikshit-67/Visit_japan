import React, { useEffect, useState, useContext } from "react";
import Hero from "../Hero";
import Styles from "../../styles/middle/middleWrapper.module.scss";
import { aniData } from "../../utils/animationData";
import { StatesContext } from "../../App";

const MiddleWrapper = () => {
  const { offsetY } = useContext(StatesContext);
  const [animationData, setAnimationData] = useState({
    currentImgData: aniData[0],
  });

  let index = 0;

  function triggerAnimation() {
    setInterval(() => {
      index++;
      if (index > aniData.length - 1) {
        index = 0;
      }
      setAnimationData((prev) => ({ ...prev, currentImgData: aniData[index] }));
    }, 5000);
  }

  useEffect(() => {
    triggerAnimation();
  }, []);

  return (
    <section className={Styles.middle}>
      <div className={Styles.content}>
        {/* <h2>VISIT</h2>
        <div className={Styles.cityName}>
          <h1>{animationData.currentImgData.title}</h1>
        </div> */}
        <Hero currentCity={animationData.currentImgData} />
      </div>

      {aniData.map((ele, ind) => {
        return (
          <div
            key={ind}
            className={`${Styles.img} ${
              animationData.currentImgData.id === ind ? Styles.show : ""
            }`}
          >
            <img
              src={ele.img}
              alt=""
              style={{
                transform: `scale(1.25) translateY(${offsetY * 0.25}px)`,
              }}
            />
          </div>
        );
      })}
    </section>
  );
};

export default MiddleWrapper;
