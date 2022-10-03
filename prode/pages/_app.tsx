import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";


const basicTheme = createTheme({
  palette: {
    mode: "light",
    success: {
      main: "#008058",
    },
  },
  typography: {
    fontFamily: 'Monserrat',
  },
});




function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={basicTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp;
