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
                    minWidth: theme.padding.medium,
                    color: theme.color.onBackgroundContainerDim
                }}
            >
                <p>jtaeyeon05.github.io</p>
                <p>&copy; jtaeyeon05 | 2026 | email@xodus.lol</p>
            </div>
            <div style={{ flex: 1 }}/>
            <img
                src={icApp}
                alt={"App Icon"}
                style={{
                    display: "inline-block",
                    alignSelf: "flex-end",
                    width: theme.component.image,
                    height: theme.component.image,
                }}
            />
        </footer>
    );
}

export default Footer;
