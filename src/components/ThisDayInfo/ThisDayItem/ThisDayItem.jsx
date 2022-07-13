import React from 'react'
import IndicatorSvgSelector from '../../../assets/icons/Indicators/IndicatorSvgSelector';


import classes from '../ThisDayInfo.module.scss'

const ThisDayItem = ({ item }) => {
    const {icons_id, name, value} = item;
    return (
        <div className={classes['item']}>
            <div className={classes['item__indicator']}>
                <IndicatorSvgSelector id={icons_id} />
            </div>
            <div className={classes['item__indicator-name']}>{name}</div>
            <div className={classes['item__indicator-value']}>{value}</div>
        </div>
    )
}

export default ThisDayItem