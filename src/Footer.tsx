import { useTheme } from "styled-components";
import icApp from "./assets/images/ic_app.svg";

function Footer() {
    const theme = useTheme();

    return (
        <footer
            style={{
                display: "flex",
                flexDirection: "row",
                padding: theme.padding.medium,
                backgroundColor: theme.color.backgroundContainer,
                color: theme.color.onBackgroundContainer,
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    color: theme.color.onBackgroundContainerDim,
                }}
            >
                <p>jtaeyeon05.github.io</p>
                <p>&copy; jtaeyeon05 | 2026 | email@xodus.lol</p>
            </div>
            <div style={{ flex: 1, minWidth: theme.padding.medium, }}/>
            <img
                src={ icApp }
                alt={ "App Icon" }
                style={{
                    alignSelf: "flex-end",
                    width: theme.component.imageLarge,
                    height: theme.component.imageLarge,
                }}
            />
        </footer>
    );
}

export default Footer;
