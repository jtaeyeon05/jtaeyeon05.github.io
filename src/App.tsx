import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle.ts";
import { lightTheme, darkTheme } from "./styles/theme.ts";
import Header from "./Header.tsx";
import Content from "./Content.tsx";
import Footer from "./Footer.tsx";

function App() {
    const [isDarkMode, setDarkMode] = useState<boolean>(false);
    const theme = isDarkMode ? darkTheme : lightTheme;

    useEffect(() => {
        const darkModeMql = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")
        if (darkModeMql) {
            const listener = (event: MediaQueryListEvent) => {
                setDarkMode(event.matches)
            }

            setDarkMode(darkModeMql.matches);
            darkModeMql.addEventListener("change", listener);

            return () => darkModeMql.removeEventListener("change", listener);
        }
    }, [setDarkMode]);

    useEffect(() => {
        let metaThemeColor = document.querySelector("meta[name=\"theme-color\"]");
        if (!metaThemeColor) {
            metaThemeColor = document.createElement("meta");
            metaThemeColor.setAttribute("name", "theme-color");
            document.head.appendChild(metaThemeColor);
        }

        const color = theme.color.backgroundContainer;
        metaThemeColor.setAttribute("content", color);
    }, [isDarkMode]);

    return (
        <ThemeProvider theme={ theme }>
            <GlobalStyle />
            <Header
                isDarkMode={ isDarkMode }
                onDarkModeChanged={ isDarkMode => setDarkMode(isDarkMode) }
            />
            <main
                style={{
                    flex: 1,
                    padding: theme.padding.medium,
                    backgroundColor: theme.color.background,
                    color: theme.color.onBackground,
                }}
            >
                <Content isDarkMode={ isDarkMode }/>
            </main>
            <Footer />
        </ThemeProvider>
    );
}

export default App
