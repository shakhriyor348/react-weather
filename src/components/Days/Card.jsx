import React from 'react'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

import classes from './Days.module.scss'

const Card = ({ day }) => {
  return (
    <div className={classes['card']}>
        <div className={classes['card__day']}>{day.day}</div>
        <div className={classes['card__date']}>{day.day_info}</div>
        <div className={classes['card__img']}>
            <GlobalSvgSelector id={day.icon_id}/>
        </div>
        <div className={classes['card__temp']}>{day.temp_day}</div>
        <div className={classes['card__tempNight']}>{day.temp_night}</div>
        <div className={classes['card__info']}>{day.info}</div>
    </div>
  )
}

export default Card