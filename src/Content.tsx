import { useTheme } from "styled-components";
import styled from "styled-components";
import icGitHubBlack from "./assets/images/ic_github_black.svg";
import icGitHubWhite from "./assets/images/ic_github_white.svg";

interface ProjectData {
    id: number,
    name: string;
    url: string;
    sourceUrl: string | null;
}

const GitHubIcon = styled.img`
    align-self: center;
    width: ${props => props.theme.component.imageMedium};
    height: ${props => props.theme.component.imageMedium};
                    
    cursor: pointer;
                    
    &:hover {filter: brightness(1.1); } 
    &:active { filter: brightness(0.9); }
`;

function ProjectItem({ isDarkMode, name, url, sourceUrl }: { isDarkMode: boolean } & ProjectData) {
    const theme = useTheme();

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <a href={ url }>{ name }</a>
            <div style={{ width: theme.padding.innerSmall }}/>
            {sourceUrl && (
                <GitHubIcon
                    src={ isDarkMode ? icGitHubWhite : icGitHubBlack }
                    alt={ "GitHub" }
                    onClick={ () => window.open(sourceUrl, "_blank") }
                />
            )}
        </div>
    );
}

function Content({ isDarkMode }: { isDarkMode: boolean }) {
    const theme = useTheme();
    const projectDataList: ProjectData[] = [
        { id: 0, name: "kmp-mnist", url: "https://kmp-mnist.xodus.lol/", sourceUrl: "https://github.com/jtaeyeon05/kmp-mnist" },
        { id: 1, name: "why-web", url: "https://why.xodus.lol/", sourceUrl: "https://github.com/jtaeyeon05/why-web" },
        { id: 2, name: "xodus.lol", url: "https://xodus.lol/", sourceUrl: "https://github.com/jtaeyeon05/xodus.lol" },
        { id: 3, name: "SpotlightPlayer", url: "/SpotlightPlayer/", sourceUrl: "https://github.com/jtaeyeon05/MiniProjects/tree/main/spotlight_player" },
        { id: 4, name: "flutter2048", url: "/flutter2048/", sourceUrl: "https://github.com/jtaeyeon05/MiniProjects/tree/main/flutter2048" },
        { id: 5, name: "flutterLearn", url: "/SpotlightPlayer/", sourceUrl: null },
        { id: 6, name: "getCOOL", url: "/getCOOL/", sourceUrl: "https://github.com/jtaeyeon05/MiniProjects/tree/main/GetCOOL" },
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: theme.padding.innerMedium,
            }}
        >
            {projectDataList.map((data) => (
                <ProjectItem key={ data.id } isDarkMode={ isDarkMode } { ...data } />
            ))}
        </div>
    )
}

export default Content
