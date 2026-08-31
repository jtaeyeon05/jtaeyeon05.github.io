import { useTheme } from "styled-components";
import icGitHubBlack from "./assets/images/ic_github_black.svg";
import icGitHubWhite from "./assets/images/ic_github_white.svg";

interface ProjectData {
    id: number,
    name: string;
    url: string;
    sourceUrl: string | null;
}


function ProjectItem({ name, url, sourceUrl }: ProjectData) {
    const theme = useTheme();
    const absoluteUrl = new URL(url, window.location.origin).href;

    return (
        <div
            className={ "clickable" }
            onClick={ () => { window.open(url, "_blank") } }
            style={{
                display: "flex",
                alignItems: "center",

                width: `calc(100% - 2 * ${theme.padding.innerMedium})`,
                padding: theme.padding.innerMedium,

                backgroundColor: theme.color.backgroundContainer,
                color: theme.color.onBackgroundContainer,
                textDecoration: "none",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <p>{ name }</p>
                <p style={{ fontSize: theme.font.small, color: theme.color.onBackgroundContainerDim }}>{ absoluteUrl }</p>
            </div>
            <div style={{ flex: 1, minWidth: theme.padding.innerSmall }}/>
            {sourceUrl && (
                <img
                    src={ theme.color.isDarkMode ? icGitHubWhite : icGitHubBlack }
                    alt={ "GitHub" }
                    className={ "clickable" }
                    onClick={ () => window.open(sourceUrl, "_blank") }
                    style={{
                        alignSelf: "center",
                        width: theme.component.imageMedium,
                        height: theme.component.imageMedium,
                    }}
                />
            )}
        </div>
    );
}

function Content() {
    const theme = useTheme();
    const projectDataList: ProjectData[] = [
        { id: 0, name: "kmp-mnist", url: "https://kmp-mnist.xodus.lol/", sourceUrl: "https://github.com/jtaeyeon05/kmp-mnist" },
        { id: 1, name: "why-web", url: "https://why.xodus.lol/", sourceUrl: "https://github.com/jtaeyeon05/why-web" },
        { id: 2, name: "xodus.lol", url: "https://xodus.lol/", sourceUrl: "https://github.com/jtaeyeon05/xodus.lol" },
        { id: 3, name: "SpotlightPlayer", url: "/SpotlightPlayer/", sourceUrl: "https://github.com/jtaeyeon05/MiniProjects/tree/main/spotlight_player" },
        { id: 4, name: "flutter2048", url: "/flutter2048/", sourceUrl: "https://github.com/jtaeyeon05/MiniProjects/tree/main/flutter2048" },
        { id: 5, name: "flutterLearn", url: "/flutterLearn/", sourceUrl: null },
        { id: 6, name: "getCOOL", url: "/getCOOL/", sourceUrl: "https://github.com/jtaeyeon05/MiniProjects/tree/main/GetCOOL" },
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <p style={{ textIndent: theme.font.medium }}>
                A collection of web demonstration of web projects or multiplatform projects that support web.
            </p>
            <p style={{ textIndent: theme.font.medium }}>
                You can find more of my projects on <a href={ "https://github.com/jtaeyeon05/" }>GitHub</a>.
            </p>
            <div style={{ height: theme.padding.innerLarge }}/>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(auto-fit, minmax(${theme.component.gridMaxWidth}, 1fr))`,
                    justifyItems: "stretch",
                    gap: theme.padding.innerLarge,

                    width: "100%",
                }}
            >
                {projectDataList.map((data) => (
                    <ProjectItem key={ data.id } { ...data } />
                ))}
            </div>
        </div>
    )
}

export default Content
