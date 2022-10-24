import React from 'react'
import Card from './Card'
import Styles from "../../styles/carousel/Carousel.module.scss"
import { carouselData } from "../../utils/carouselData"

const Carousel = () => {
  return (
  <div className={Styles.main}>
    <h1> Visit japan lolm</h1>
    <div className={Styles.carouselWrapper}>
      <div className={Styles.carousel}>
        {carouselData.map((e, i) =>{
          return(
            <Card key={i} index={i} info={e}/>
                );
            })};
       </div>
    </div>
  </div>
  )
}

export default Carousel;
