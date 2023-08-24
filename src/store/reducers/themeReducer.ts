export interface ThemeState {
    darkMode: boolean;
}

const initialState: ThemeState = {
    darkMode: false,
};

//Init default theme
function initTheme() {
    let theme = 'dark';
    const html = document.querySelector("html");
    const colorModeValue = localStorage.getItem("colorMode");
  
    if (html) {
      if (!colorModeValue) {
        localStorage.setItem("colorMode", "dark");
        html.dataset.colorMode = 'dark';
      } else {
        html.dataset.colorMode = colorModeValue;
        theme = colorModeValue;
      }
    }

    return theme
}

//Set color mode attribute to html tag
function changeTheme() {    
    const html = document.querySelector("html");
    let theme = 'dark';
    if ( html ) {        
        if (html?.dataset.colorMode === "light") {
            html.dataset.colorMode = "dark";        
            localStorage.setItem("colorMode", 'dark');            
        } else {
            html.dataset.colorMode = "light";   
            localStorage.setItem("colorMode", "light");
            theme = 'light'
        }   
    }

    return theme
}  
    
//Change state depending on actions
const themeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'TOGGLE_THEME':                  
            return {
                ...state,
                darkMode: changeTheme() === 'dark',
            };
        case 'INIT_THEME':            
            return {
                ...state,
                darkMode: initTheme() === 'dark',
            };
        default:
            return state;
    }
};

export default themeReducer;