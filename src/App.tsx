import "./App.css"
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle.ts";
import { lightTheme, darkTheme } from "./styles/theme.ts";
import icApp from "./assets/images/ic_app.png";

interface ProjectData {
    name: string;
    url: string;
    sourceUrl: string | null;
}

function ProjectItem({ name, url, sourceUrl }: ProjectData) {
    return (
        <p>
            <a href={url}>{name}</a>
            {sourceUrl && (
                <a href={sourceUrl} style={{ marginLeft: "8px" }}>link</a>
            )}
        </p>
    );
}

function App() {
    const projectDataList: ProjectData[] = [
        { name: "kmp-mnist", url: "https://kmp-mnist.xodus.lol/", sourceUrl: "https://github.com/jtaeyeon05/kmp-mnist" },
        { name: "why-web", url: "https://why.xodus.lol/", sourceUrl: "https://github.com/jtaeyeon05/why-web" },
        { name: "xodus.lol", url: "https://xodus.lol/", sourceUrl: "https://github.com/jtaeyeon05/xodus.lol" },
        { name: "SpotlightPlayer", url: "/SpotlightPlayer/", sourceUrl: "https://github.com/jtaeyeon05/MiniProjects/tree/main/spotlight_player" },
        { name: "flutter2048", url: "/flutter2048/", sourceUrl: "https://github.com/jtaeyeon05/MiniProjects/tree/main/flutter2048" },
        { name: "flutterLearn", url: "/SpotlightPlayer/", sourceUrl: null },
        { name: "getCOOL", url: "/getCOOL/", sourceUrl: "https://github.com/jtaeyeon05/MiniProjects/tree/main/GetCOOL" },
    ];

    const [isDarkMode, setDarkMode] = useState(false);
    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={ theme }>
            <GlobalStyle />
            {projectDataList.map((data) => (
                <ProjectItem name={data.name} url={data.url} sourceUrl={data.sourceUrl} />
            ))}
            <button onClick={ () => setDarkMode(!isDarkMode) }>DarkMode</button>
            <footer>
                <img
                    src={icApp}
                    alt={"App Icon"}
                    style={{
                        imageRendering: "pixelated",
                        width: "64px",
                        height: "64px",
                    }}
                />
                <p>jtaeyeon05.github.io</p>
                <p>&copy; jtaeyeon05 | 2026 | email@xodus.lol</p>
            </footer>
        </ThemeProvider>
    );
}

export default App
