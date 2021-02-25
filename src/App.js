import {CssBaseline} from '@material-ui/core';
import {grey} from '@material-ui/core/colors';
import {ThemeProvider, Theme, createMuiTheme} from '@material-ui/core/styles';
import {BrowserRouter as Router} from "react-router-dom";
import SiteCore from './components/SiteCore'

// ADD DA GANCHAN FONT
import Genshin from "./fonts/ja-jp.ttf";
const genshinFont = {
  fontFamily: 'Genshin',
  fontStyle: 'bold',
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
        contrastText:"#ffffff"
    },
    text: {
        primary: "#2d2f33",
        secondary:"#2d2f33"
    },
  },
  typography: {
    fontFamily: "Helvetica, Roboto, Arial, sans-serif",
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': genshinFont,
        html: {
          overflowY: "scroll",
        }, 
      },
    },
  }
}

const App = () => {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline/>
      <Router>
        <SiteCore/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
