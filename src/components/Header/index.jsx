import React from 'react'
import Select from 'react-select'
import { Link } from "react-router-dom";
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

import classes from './Header.module.scss'

const Header = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <header className={classes['header']}>
            <Link to={'/'} className={classes['wrapper']}>
                <div className={classes['logo']}>
                    <GlobalSvgSelector id='headerLogo' />
                </div>
                <div className={classes['title']}>
                    React weather
                </div>
            </Link>
            <div className={classes['wrapper']}>
                <div className={classes['change_theme']}>
                    <GlobalSvgSelector id='changeTheme' />
                    <Select options={options} />
                </div>
            </div>
        </header>
    )
}

export default Header