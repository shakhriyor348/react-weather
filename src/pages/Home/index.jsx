import React from 'react'
import Days from '../../components/Days';
import ThisDay from '../../components/ThisDay';
import ThisDayInfo from '../../components/ThisDayInfo';


import classes from "./Home.module.scss";


const Home = () => {
  return (
    <div className={classes['home']}>
      <div className={classes['home__wrapper']}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}

export default Home