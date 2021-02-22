import {Container, CssBaseline} from '@material-ui/core';
import {grey} from '@material-ui/core/colors';
import {ThemeProvider, Theme, createMuiTheme} from '@material-ui/core/styles';
import {BrowserRouter as Router} from "react-router-dom";
import SiteCore from './components/SiteCore'

const theme = {
  palette: {
    background: {
        default: grey[900],
        paper: "#e2b714",
    },
    primary: {
        main: "#e2b714",
        contrastText:"#212121"
    },
    text: {
        primary: "#e2b714",
        secondary:"#212121"
    },
  },
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
