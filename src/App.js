import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MiddleWrapper from "./components/middle/MiddleWrapper.jsx";
import Styles from "./App.module.scss";

const App = () => {
  return (
    <>
      <div className={Styles.wrapper}>
        <Header />
        {/* <Hero /> */}
        <MiddleWrapper />
      </div>
    </>
  );
};

export default App;
