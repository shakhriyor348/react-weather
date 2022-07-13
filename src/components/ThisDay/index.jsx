import React from 'react'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';


import classes from './ThisDay.module.scss';



const ThisDay = () => {
    return (
        <div className={classes['this__day']}>
            <div className={classes['this__day-top']}>
                <div className={classes['this__day-wrapper']}>
                    <div className={classes['this__day-temp']}>
                        20°
                    </div>
                    <span className={classes['this__day-day']}>Сегодня</span>
                </div>
                <GlobalSvgSelector  id={'sun'}/>
            </div>
            <div className={classes['this__day-bottom']}>
                <div className={classes['this__day-time']}>Время: <span>15:11</span></div>
                <div className={classes['this__day-city']}>Город: <span>Санкт-Петербург</span></div>
            </div>
        </div>
    )
}

export default ThisDay