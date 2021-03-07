import { CssBaseline } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { ThemeProvider, Theme, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import SiteCore from "./components/SiteCore";

// ADD DA GANCHAN FONT
import Genshin from "./fonts/ja-jp.ttf";
const genshinFont = {
  fontFamily: "Genshin",
  fontStyle: "bold",
  fontWeight: 900,
  src: `url(${Genshin}) format('truetype')`,
};

const theme = {
  palette: {
    background: {
      default: "#f0f1f5",
      paper: "#ffffff",
    },
    primary: {
      main: "#2d2f33",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#2d2f33",
      secondary: "#2d2f33",
    },
  },
  typography: {
    fontFamily: "Helvetica, Roboto, Arial, sans-serif",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": genshinFont,
        html: {
          overflowY: "scroll",
        },
        img: {
          display: "block",
          width: "100%",
          maxWidth: "100%",
        },
      },
    },
    MuiButton: {
      root: {
        fontFamily: "Genshin",
        backgroundColor: "#ebe1d4",
        color: "#495366",
        borderRadius: "100px 100px 100px 100px",
        textTransform: "none",
      },
    },
  },
};

const App = () => {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <Router>
        <SiteCore />
      </Router>
    </ThemeProvider>
  );
};

export default App;
