import React from 'react'
import Select from 'react-select'
import { Link } from "react-router-dom";
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

import classes from './Header.module.scss'

const Header = () => {
    const options = [
        { value: 'Tashkent', label: 'Ташкент' },
        { value: 'Samarkand', label: 'Самарканд' },
        { value: 'Buxara', label: 'Бухара' }
    ]
    const colorStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2);',
            borderRadius: '10px',
            border: 'none',
            width: '194px',
            height: '37px',
            zIndex: '100',
            outLine: 'none',
            boxShadow: 'none',
        })
    }
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
                </div>
                <Select options={options} styles={colorStyles} defaultValue={options[0]} />
            </div>
        </header>
    )
}

export default Header