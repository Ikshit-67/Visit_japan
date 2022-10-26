import React, { useEffect, useRef, createContext, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MiddleWrapper from "./components/middle/MiddleWrapper.jsx";
import Styles from "./App.module.scss";
import Bottom from "./components/Bottom.jsx";
import Carousal from "./components/carousel/Carousal";
import Last from "./components/last/Last.jsx";

export const StatesContext = createContext({});

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const mouseFollower = useRef();
  const mouseFollowerMini = useRef();
  const handleScroll = () => {
    console.log(window.scrollY);
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    const mouseFollowerDom = document.querySelector(".mouseFollower");
    const mouseFollowerMiniDom = document.querySelector(".mouseFollowerMini");
    document.addEventListener("mousemove", (e) => {
      mouseFollower.current.style.left = `${e.clientX}px`;
      mouseFollower.current.style.top = `${e.clientY}px`;
      mouseFollowerMini.current.style.left = `${e.clientX}px`;
      mouseFollowerMini.current.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll(".links").forEach((link, ind) => {
      link.addEventListener("mouseover", (e) => {
        mouseFollowerDom.classList.add("mouseFollowerHover");
        mouseFollowerMiniDom.classList.add("mouseFollowerMiniHover");
      });
      link.addEventListener("mouseout", (e) => {
        mouseFollowerDom.classList.remove("mouseFollowerHover");
        mouseFollowerMiniDom.classList.remove("mouseFollowerMiniHover");
      });
    });
    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", () => {});
      document.querySelectorAll(".links").forEach((link, ind) => {
        link.removeEventListener("mouseover", (e) => {});
        link.removeEventListener("mouseout", (e) => {});
      });
    };
  }, []);

  return (
    <StatesContext.Provider value={{ offsetY }}>
      <main className={Styles.main}>
        <div className={Styles.wrapper}>
          <Header />
          {/* <Hero /> */}
          <MiddleWrapper />
          <Bottom />
        </div>
        <Carousal />
        {/* <Last /> */}
        <div
          ref={mouseFollower}
          className={`${Styles.mouseFollower} mouseFollower`}
        ></div>
        <div
          ref={mouseFollowerMini}
          className={`${Styles.mouseFollowerMini} mouseFollowerMini`}
        ></div>
      </main>
    </StatesContext.Provider>
  );
};

export default App;
