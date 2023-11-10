import { createContext, useState } from 'react';

export const DarkModeContext = createContext();


// eslint-disable-next-line react/prop-types
export default function DarkModeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(false);
    
    const keyDarkMode = "Dark Mode";
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode
        localStorage.setItem(keyDarkMode, newDarkMode);
        console.log("toggleDarkMode from", darkMode, "to", newDarkMode);
        setDarkMode(newDarkMode);
        const html = document.querySelector("html");
        html.classList.toggle("dark", newDarkMode);
    };
    const initialDarkModeDedection = () => {
        const darkModeLocalData = localStorage.getItem(keyDarkMode);

        const html = document.querySelector("html");

        if (
            JSON.parse(darkModeLocalData) === true ||
            (darkModeLocalData === null &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setDarkMode(true);
            html.classList.add("dark");
        } else {
            setDarkMode(false);
            html.classList.remove("dark");
        }

        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches }) => {
                if (matches) {
                    setDarkMode(true);
                    html.classList.add("dark");
                } else {
                    setDarkMode(false);
                    html.classList.remove("dark");
                }
            });
    };
    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode, initialDarkModeDedection, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}
