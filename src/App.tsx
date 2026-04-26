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
                }}
            >
                <Content />
            </main>
            <Footer />
        </ThemeProvider>
    );
}

export default App
