import React from 'react'
import Styles from "../../styles/carousel/Card.module.scss"


const Card = ({info, index}) => {
  return (
    <div className={Styles.cardMain}>
      <div className={Styles.imgWrapper}>
        <img src={info.img_url} alt="lol" />
      </div>
      <div className={Styles.text}>
        <p>{info.main_text}</p>
        <p>{info.sub_text}</p>
      </div>
    </div>
  )
}

export default Card;
