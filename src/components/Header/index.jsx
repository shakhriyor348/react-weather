import React from 'react'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

import classes from './Header.module.scss'

const Header = () => {
    return (
        <header className={classes['header']}>
            <div className={classes['wrapper']}>
                <div className={classes['logo']}>
                    <GlobalSvgSelector id='headerLogo' />
                </div>
                <div className={classes['title']}>
                    React weather
                </div>
            </div>
            <div className={classes['wrapper']}>
                <div className={classes['change_theme']}>
                    <GlobalSvgSelector id='changeTheme' />
                </div>
                
            </div>
        </header>
    )
}

export default Header