import React from 'react'
import ThisDayItem from '../ThisDayInfo/ThisDayItem/ThisDayItem'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

import classes from './PopUp.module.scss';

const PopUp = () => {
    const items = [
        {
            icons_id: 'temp',
            name: 'Температура',
            value: '20° - ощущается как 17°'
        },
        {
            icons_id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное'
        },
        {
            icons_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков'
        },
        {
            icons_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер'
        },
    ];
    return (
        <>
            <div className={classes['blur']}></div>
            <div className={classes['popUp']}>
                <div className={classes['popUp__day']}>
                    <div className={classes['popUp__day-temp']}>
                        12°
                    </div>
                    <div className={classes['popUp__day-day']}>
                        Среда
                    </div>
                    <div className={classes['popUp__day-img']}>
                        <GlobalSvgSelector id={'mainly_cloudy'} />
                    </div>
                    <div className={classes['popUp__day-time']}>Время: <span>15:11</span></div>
                    <div className={classes['popUp__day-city']}>Город: <span>Санкт-Петербург</span></div>
                </div>
                <div className={classes['day__info-items']}>
                    {
                        items.map(item => {

                            return <ThisDayItem key={item.icons_id} item={item} />
                        })
                    }
                </div>
                <div className={classes['close']}>
                    <GlobalSvgSelector id={'close'} />
                </div>
            </div>
        </>
    )
}

export default PopUp