import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage(darkMode, value);
    if (darkMode){
        document.body.classList.add('dark-mode');
    }
    else{
        document.body.classList.remove('dark-mode');
    }
    
return [darkMode, setDarkMode];
}


















