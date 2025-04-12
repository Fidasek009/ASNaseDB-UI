import { createTheme, ThemeOptions, responsiveFontSizes } from "@mui/material";

const themeOptions: ThemeOptions = {
    palette: {
        mode: "dark",
        primary: {
            main: "#12905a",
        },
        secondary: {
            main: "#4a5053",
        },
        error: {
            main: "#f44336",
        },
        warning: {
            main: "#ff9800",
        },
        info: {
            main: "#2196f3",
        },
        success: {
            main: "#4caf50",
        },
        background: {
            default: "#1b1e1f",
            paper: "#181a1b",
        },
    },
    typography: {
        fontFamily: `"Source Sans Pro", sans-serif`,
        h1: {
            fontSize: "40px",
            fontWeight: "bold",
            padding: "25px 0px",
        },
        h2: {
            fontSize: "36px",
            fontWeight: "bold",
            padding: "10px 0px",
        },
        h3: {
            fontSize: "30px",
            fontWeight: "bold",
            padding: "10px 0px",
        },
        h4: {
            fontSize: "24px",
            fontWeight: "bold",
            padding: "10px 0px",
        },
    },
};

const baseTheme = createTheme(themeOptions);
export const theme = responsiveFontSizes(baseTheme);
