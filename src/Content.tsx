// import {useTheme} from "styled-components";

interface ProjectData {
    id: number,
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

function Content() {
    // const theme = useTheme();
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
        <div>
            {projectDataList.map((data) => (
                <ProjectItem key={data.id} {...data} />
            ))}
        </div>
    )
}

export default Content
