import {useTheme} from "styled-components";

function Header({ isDarkMode, onDarkModeChanged }: { isDarkMode: boolean, onDarkModeChanged: (isDarkMode: boolean) => void }) {
    const theme = useTheme();

    return (
        <header
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: theme.padding.medium,
                backgroundColor: theme.color.backgroundContainer,
                color: theme.color.onBackgroundContainer,
            }}
        >
            <p
                style={{
                    fontSize: theme.font.large,
                }}
            >
                jtaeyeon05.github.io
            </p>
            <div style={{ flex: 1 }}/>
            <button onClick={ () => onDarkModeChanged(!isDarkMode) }>{ isDarkMode ? "DarkMode" : "LightMode" }</button>
        </header>
    );
}

export default Header
