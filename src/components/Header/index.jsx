import React from 'react'
import Select from 'react-select'
import { Link } from "react-router-dom";
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

import classes from './Header.module.scss'
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';


const Header = () => {
    const theme = useTheme()

    const options = [
        { value: 'Tashkent', label: 'Ташкент' },
        { value: 'Samarkand', label: 'Самарканд' },
        { value: 'Buxara', label: 'Бухара' }
    ]
    const colorStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2);',
            borderRadius: '10px',
            border: 'none',
            width: '194px',
            height: '37px',
            zIndex: '100',
            outLine: 'none',
            boxShadow: 'none',
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#fff' : '#000'
        })
    }
    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
        
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
                <div className={classes['change_theme']} onClick={changeTheme}>
                    <GlobalSvgSelector id='changeTheme' />
                </div>
                <Select options={options} styles={colorStyles} defaultValue={options[0]} />
            </div>
        </header>
    )
}

export default Header