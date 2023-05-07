import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {

    const darkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");


    useEffect(() => {

        const mediaQuery = window.matchMedia(darkQuery);
        const usePref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if (usePref) {
                let check = usePref === "dark" ? "dark" : "light";
                setMode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                window.localStorage.setItemt(
                    "theme",
                    check
                );
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        handleChange();
        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)

    }, [])

    useEffect(()=>{

        if(mode === "dark"){
            window.localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark")
        }else{
            window.localStorage.setItem("theme","light");
            document.documentElement.classList.remove("dark")
        }

    }, [mode])

    return [mode, setMode]
}
export default useThemeSwitcher