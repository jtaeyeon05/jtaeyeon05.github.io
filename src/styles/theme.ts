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
    lineHeight: string,
}

interface ComponentTheme {
    image: string,
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
    component: ComponentTheme,
    padding: PaddingTheme,
}

// Theme Constants
const commonTheme = {
    font: {
        small: "0.50rem",
        medium: "1.00rem",
        large: "1.50rem",
        lineHeight: "1.25",
    },
    component: {
        image: "2.40rem",
    },
    padding: {
        none: "0.00rem",
        innerSmall: "0.50rem",
        innerMedium: "0.75rem",
        innerLarge: "1.00rem",
        small: "1.00rem",
        medium: "1.50rem",
        large: "2.00rem",
    },
}

export const lightTheme: Theme = {
    color: {
        primary: "#5b5891",
        onPrimary: "#ffffff",
        onPrimaryDim: "#d6d5e3",
        primaryContainer: "#e3dfff",
        onPrimaryContainer: "#434078",
        onPrimaryContainerDim: "#6b6799",

        url: "#405f91",
        urlVisited: "#874b6c",

        background: "#fef7ff",
        onBackground: "#1b1b1f",
        onBackgroundDim: "#535257",
        backgroundContainer: "#f3edf7",
        onBackgroundContainer: "#1b1b1f",
        onBackgroundContainerDim: "#514f55",
    },
    font: commonTheme.font,
    component: commonTheme.component,
    padding: commonTheme.padding,
};

export const darkTheme: Theme = {
    color: {
        primary: "#c4c0ff",
        onPrimary: "#2c2960",
        onPrimaryDim: "#524e87",
        primaryContainer: "#434078",
        onPrimaryContainer: "#e3dfff",
        onPrimaryContainerDim: "#bbb7dd",

        url: "#aac7ff",
        urlVisited: "#fcb0d7",

        background: "#1b1b1f",
        onBackground: "#e3e1e6",
        onBackgroundDim: "#b1afb4",
        backgroundContainer: "#2b2930",
        onBackgroundContainer: "#e3e1e6",
        onBackgroundContainerDim: "#b5b3b8",
    },
    font: commonTheme.font,
    component: commonTheme.component,
    padding: commonTheme.padding,
};
