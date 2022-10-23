import React from 'react'
import Styles from "../styles/Hero.module.scss"

const Hero = () => {
  return (
    <div className={Styles.heroWrapper}>
        <div className={Styles.headingWrapper}>
            <h1>VISIT</h1>
            <h1>JAPAN</h1>
        </div>
        <div></div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
  )
}

export default Hero