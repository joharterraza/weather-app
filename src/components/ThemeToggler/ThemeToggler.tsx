import React from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../store/hooks/useTheme';
import styles from './ThemeToggler.module.css'

const ThemeToggler: React.FC = () => {  
    const themeStore = useTheme(); 
    const dispatch = useDispatch(); 

    function toogleTheme () {
        dispatch( { type: 'TOGGLE_THEME' } );        
    }
    return (
        <div>
            <div className={`${styles.toggler_icon} ${themeStore.darkMode ? styles.dark : styles.light}`} onClick={toogleTheme}></div>            
        </div>
    )
}

export default ThemeToggler
