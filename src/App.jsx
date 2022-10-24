import React, { useEffect, useRef } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MiddleWrapper from "./components/middle/MiddleWrapper.jsx";
import Styles from "./App.module.scss";
import Bottom from "./components/Bottom.jsx";

const App = () => {
  const mouseFollower = useRef();
  const mouseFollowerMini = useRef();
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      mouseFollower.current.style.left = `${e.clientX}px`;
      mouseFollower.current.style.top = `${e.clientY}px`;
      mouseFollowerMini.current.style.left = `${e.clientX}px`;
      mouseFollowerMini.current.style.top = `${e.clientY}px`;
    });
    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <>
      <div className={Styles.wrapper}>
        <Header />
        {/* <Hero /> */}
        <MiddleWrapper />
        <Bottom />
      </div>
      <div
        ref={mouseFollower}
        className={`${Styles.mouseFollower} mouseFollower`}
      ></div>
      <div ref={mouseFollowerMini} className={Styles.mouseFollowerMini}></div>
    </>
  );
};

export default App;
