import React, {useState} from "react";
import {Switch, Route, Link} from "react-router-dom";
import {Container, AppBar, Button, Grid, MenuItem, Popper, Toolbar, Typography, Paper} from "@material-ui/core";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import {HomePage} from "./pageComponents/HomePage";
import {MenuPage} from "./pageComponents/MenuPage";
import {OrderPage} from "./pageComponents/OrderPage";
import {AboutPage} from "./pageComponents/AboutPage";
import {ContactPage} from "./pageComponents/ContactPage";
import productData from "../mockData/products.json";

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

  const simpleNavButtonGridItem = (linkTo: string, text: string) => {
    return (<Grid item>
      <Button color="inherit" component={Link} to={linkTo}>
        <Typography variant="h6">{text}</Typography>
      </Button>
    </Grid>)
  }

  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Grid container spacing={2} justify="center" alignItems="center">
            {simpleNavButtonGridItem("/", "Home")}
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
                  placement="bottom">
                    <Paper>
                      {productData.categories.map((category) => {
                        return (
                          <MenuItem>
                            <Typography className={classes.navtext} variant="subtitle1">{category}</Typography>
                          </MenuItem>
                      )})}
                    </Paper>
                </Popper>
              </Button>
            </Grid>
            {simpleNavButtonGridItem("/online-order", "Online Order")}
            {simpleNavButtonGridItem("/about-us", "About Us")}
            {simpleNavButtonGridItem("/contact-us", "Contact Us")}
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/menu" render={() => <MenuPage products={productData.products} categories={productData.categories}/>}/>
          <Route path="/online-order" component={OrderPage}/>
          <Route path="/about-us" component={AboutPage}/>
          <Route path="/contact-us" component={ContactPage}/>
        </Switch>
      </Container>
    </>
  );
}
export default SiteCore;