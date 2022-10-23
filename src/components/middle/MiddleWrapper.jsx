import React, { useEffect, useState } from "react";
import Hero from "../Hero";
import Styles from "../../styles/middle/middleWrapper.module.scss";
import img1 from "../../assets/japan1ls.jpeg";
import img2 from "../../assets/japan2ls.jpeg";
import img3 from "../../assets/japan3ls.jpeg";
import img4 from "../../assets/japan4ls.jpeg";

const data = [
  {
    id: 0,
    img: img1,
    title: "Tokyo",
  },
  {
    id: 1,
    img: img2,
    title: "Kyoto",
  },
  {
    id: 2,
    img: img3,
    title: "Osaka",
  },
  {
    id: 3,
    img: img4,
    title: "Nara",
  },
];

const MiddleWrapper = () => {
  const [animationData, setAnimationData] = useState({
    currentImgData: data[0],
  });

  let index = 0;

  function triggerAnimation() {
    setInterval(() => {
      index++;
      if (index > data.length - 1) {
        index = 0;
      }
      setAnimationData((prev) => ({ ...prev, currentImgData: data[index] }));
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
        <Hero currentCity={animationData.currentImgData.title} />
      </div>
      <div className={Styles.wrapper}></div>
      {data.map((ele, ind) => {
        return (
          <div
            key={ind}
            className={`${Styles.img} ${
              animationData.currentImgData.id === ind ? Styles.show : ""
            }`}
          >
            <img src={ele.img} alt="" />
          </div>
        );
      })}
    </section>
  );
};

export default MiddleWrapper;
