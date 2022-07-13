import React from 'react'

import classes from './Days.module.scss'

const Tabs = () => {
    const tabs = [
        {
          value: 'На неделю',
        },
        {
          value: 'На 10 дней',
        },
        {
          value: 'На месяц',
        },
      ];
    return (
        <div className={classes['tabs']}>
            <div className={classes['tabs__wrapper']}>
                {
                    tabs.map((tab) => (
                        <div className={classes['tabs__tab']} key={tab.value}>{tab.value}</div>
                    ))
                }
            </div>
            <div className={classes['tabs__cancel']}>Отменить</div>
        </div>
    )
}

export default Tabs