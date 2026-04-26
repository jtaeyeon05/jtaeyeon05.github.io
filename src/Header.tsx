import styled, { useTheme } from "styled-components";

function Header({ onDarkModeChanged }: { onDarkModeChanged: (isDarkMode: boolean) => void }) {
    const theme = useTheme();

    const ThemeSvg = styled.svg`
        align-self: center;
        width: ${props => props.theme.component.imageLarge};
        height: ${props => props.theme.component.imageLarge};
        
        fill: ${props => props.theme.color.onBackgroundContainer};
        
        cursor: pointer;

        &:hover {filter: brightness(1.1); }
        &:active { filter: brightness(0.9); }
    `;

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
            <div style={{ flex: 1, minWidth: theme.padding.medium, }}/>
            {theme.color.isDarkMode ? (
                <ThemeSvg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={ () => onDarkModeChanged(!theme.color.isDarkMode) }
                >
                    <path opacity="255" d="M11 1H13V2H14V3H15V5H16V11H15V13H14V14H13V15H11V16H5V15H3V14H2V13H1V11H0V8H1V10H2V11H3V12H5V13H8V12H10V11H11V10H12V8H13V5H12V3H11V2H10V1H8V0H11V1Z" fill="currentColor"/>
                </ThemeSvg>
            ) : (
                <ThemeSvg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={ () => onDarkModeChanged(!theme.color.isDarkMode) }
                >
                    <path opacity="255" d="M9 2H7V0H9V2Z" fill="currentColor"/>
                    <path opacity="255" d="M2 3H1V2H2V1H3V2H4V3H3V4H2V3Z" fill="currentColor"/>
                    <path opacity="255" d="M13 3H12V2H13V1H14V2H15V3H14V4H13V3Z" fill="currentColor"/>
                    <path opacity="255" d="M2 9H0V7H2V9Z" fill="currentColor"/>
                    <path opacity="255" d="M16 9H14V7H16V9Z" fill="currentColor"/>
                    <path opacity="255" d="M2 14H1V13H2V12H3V13H4V14H3V15H2V14Z" fill="currentColor"/>
                    <path opacity="255" d="M13 14H12V13H13V12H14V13H15V14H14V15H13V14Z" fill="currentColor"/>
                    <path opacity="255" d="M9 16H7V14H9V16Z" fill="currentColor"/>
                    <path opacity="255" d="M9 4H11V5H12V7H13V9H12V11H11V12H9V13H7V12H5V11H4V9H3V7H4V5H5V4H7V3H9V4Z" fill="currentColor"/>
                </ThemeSvg>
            )}
        </header>
    );
}

export default Header
