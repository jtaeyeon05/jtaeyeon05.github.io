// Theme Types
interface ColorTheme {
    primary: string,
    onPrimary: string,
    onPrimaryDim: string,
    primaryContainer: string,
    onPrimaryContainer: string,
    onPrimaryContainerDim: string,

    url: string,
    urlVisited: string,

    background: string,
    onBackground: string,
    onBackgroundDim: string,
    backgroundContainer: string,
    onBackgroundContainer: string,
    onBackgroundContainerDim: string,
}

interface FontTheme {
    small: string,
    medium: string,
    large: string,
}

interface PaddingTheme {
    none: string,
    innerSmall: string,
    innerMedium: string,
    innerLarge: string,
    small: string,
    medium: string,
    large: string,
}

export interface Theme {
    color: ColorTheme,
    font: FontTheme,
    padding: PaddingTheme,
}

// Theme Constants
const commonTheme = {
    font: {
        small: "16px",
        medium: "24px",
        large: "32px",
    },
    padding: {
        none: "0px",
        innerSmall: "8px",
        innerMedium: "12px",
        innerLarge: "16px",
        small: "16px",
        medium: "24px",
        large: "32px",
    },
}

export const lightTheme: Theme = {
    color: {
        primary: "#5b5891",
        onPrimary: "#ffffff",
        onPrimaryDim: "#7b79a7",
        primaryContainer: "#e3dfff",
        onPrimaryContainer: "#434078",
        onPrimaryContainerDim: "#c3bfe4",

        url: "#405f91",
        urlVisited: "#874b6c",

        background: "#fef7ff",
        onBackground: "#1b1b1f",
        onBackgroundDim: "#d0cbd2",
        backgroundContainer: "#f3edf7",
        onBackgroundContainer: "#1b1b1f",
        onBackgroundContainerDim: "#c7c3cb",
    },
    font: commonTheme.font,
    padding: commonTheme.padding,
};

export const darkTheme: Theme = {
    color: {
        primary: "#c4c0ff",
        onPrimary: "#2c2960",
        onPrimaryDim: "#a5a1df",
        primaryContainer: "#434078",
        onPrimaryContainer: "#e3dfff",
        onPrimaryContainerDim: "#635f93",

        url: "#aac7ff",
        urlVisited: "#fcb0d7",

        background: "#1b1b1f",
        onBackground: "#e3e1e6",
        onBackgroundDim: "#434246",
        backgroundContainer: "#2b2930",
        onBackgroundContainer: "#e3e1e6",
        onBackgroundContainerDim: "#4f4d54",
    },
    font: commonTheme.font,
    padding: commonTheme.padding,
};
