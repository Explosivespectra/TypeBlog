import React, {useState} from 'react';
import {Switch, Route, Link} from "react-router-dom";
import {Container, AppBar, Button, Grid, MenuItem, Popper, Toolbar, Typography, Paper} from '@material-ui/core';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {HomePage} from "./pageComponents/HomePage";
import {MenuPage} from "./pageComponents/MenuPage";
import {OrderPage} from "./pageComponents/OrderPage";
import {AboutPage} from "./pageComponents/AboutPage";
import {ContactPage} from "./pageComponents/ContactPage";

const useStyles = makeStyles((theme: Theme) => createStyles({
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  popper: {
    zIndex: theme.zIndex.modal,
  },
  navtext: {
    textTransform: "uppercase",
    style: theme.typography.button,
    color: theme.palette.text.secondary,
  }
}));

const SiteCore: React.FC = () => {

    const [menuLoc, setMenu] = useState<HTMLElement | null>(null);

    const classes = useStyles();

    return (
        <>
          <AppBar position="relative" className={classes.appbar}>
            <Toolbar>
              <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item>
                  <Button color="inherit" component={Link} to="/">
                    <Typography variant="h6">Home</Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="inherit" component={Link} to="/menu" 
                    onMouseOver={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {if (menuLoc !== event.currentTarget) {setMenu(event.currentTarget)}}}
                    onMouseLeave={() => {setMenu(null)}}>
                    <Typography variant="h6">Menu</Typography>
                    <Popper
                      className={classes.popper}
                      keepMounted 
                      open={Boolean(menuLoc)} 
                      anchorEl={menuLoc} 
                      placement='bottom'>    
                        <Paper>           
                          <MenuItem>
                            <Typography className={classes.navtext} variant="subtitle1">Hello There!</Typography>
                          </MenuItem>
                        </Paper>
                    </Popper>
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="inherit" component={Link} to="/online-order">
                    <Typography variant="h6">Online Order</Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="inherit" component={Link} to="/about-us">
                    <Typography variant="h6">About Us</Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="inherit" component={Link} to="/contact-us">
                    <Typography variant="h6">Contact Us</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Toolbar/>
          <Container>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/menu" component={MenuPage}/>
            <Route path="/online-order" component={OrderPage}/>
            <Route path="/about-us" component={AboutPage}/>
             <Route path="/contact-us" component={ContactPage}/>
          </Switch>
          </Container>
        </>
    );
}
export default SiteCore;