import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from './Button.module.css';

export function Button () {
    const { systemTheme, theme: nextTheme, setTheme } = useTheme();
    const [theme, setLocalTheme] = useState(nextTheme);
  
    useEffect(() => {
      setLocalTheme(nextTheme);
    }, [nextTheme]);
  
    const handleClick = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
  

    return (
        <>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
                    className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'
                />
                <span className={styles.slider} />
            </label>
            {theme === 'dark' ? (
                <img
                className="pl-5 w-12"
                src="sun.svg"
                alt="Theme Light"
                />
                ) : (
                <img
                  className="pl-5 w-12"
                  src="moon.svg"
                  alt="Theme Dark"
                />
            )}
        </>
    )
}