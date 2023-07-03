import React, { FC } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#D33852",
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif"
        // style h1, h2.... body etc font family
    },
    components: {

    }
});


export const MuiTheme: FC<{ children: JSX.Element }> = ({ children }) => {
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
}