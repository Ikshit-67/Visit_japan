import { Button } from "@mui/material";
import React from "react";
import Styles from "../../styles/last/last.module.scss";

const Last = () => {
  return (
    <div className={Styles.last}>
      <h1>Make Oyur Dream Come True.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
        error, et recusandae a dicta iure labore quis nesciunt sint!
      </p>
      <Button className={`links`}>See Available Packages...</Button>
    </div>
  );
};

export default Last;
