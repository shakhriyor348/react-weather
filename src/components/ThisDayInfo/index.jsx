import React from 'react'

import cloud from '../../assets/images/cloud.png'
import classes from './ThisDayInfo.module.scss';
import ThisDayItem from './ThisDayItem/ThisDayItem';

const ThisDayInfo = () => {
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
  ]

  
  return (
    <div className={classes['day__info']}>
      <div className={classes['day__info-items']}>
        {
          items.map(item => {
            
            return <ThisDayItem key={item.icons_id} item={item} />
          })
        }
      </div>
      <img src={cloud} alt="cloud" className={classes['day__info-cloud']}/>
    </div>
  )
}

export default ThisDayInfo