import React from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../store/hooks/useTheme';

const ThemeToggler: React.FC = () => {  
    const themeStore = useTheme(); 
    const dispatch = useDispatch(); 

    function toogleTheme () {
        dispatch( { type: 'TOGGLE_THEME' } );        
    }
    return (
        <div>
            <button onClick={toogleTheme}>Is dark mode: {themeStore.darkMode.toString()}</button>
        </div>
    )
}

export default ThemeToggler
