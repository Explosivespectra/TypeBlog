import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Container, AppBar, Button, Grid, MenuItem, Popper, Toolbar, Typography, Paper, ButtonBase } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { HomePage } from "./pageComponents/HomePage";
import { MenuPage } from "./pageComponents/MenuPage";
import { OrderPage } from "./pageComponents/OrderPage";
import { AboutPage } from "./pageComponents/AboutPage";
import { ContactPage } from "./pageComponents/ContactPage";
import productData from "../mockData/products.json";

import { width } from "@material-ui/system";

const useStyles = makeStyles((theme: Theme) => createStyles({
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appbarlink: {
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    fontSize: "1rem",
  },
  popper: {
    zIndex: theme.zIndex.modal,
  },
  popperpaper: {
    backgroundColor: theme.palette.primary.main
  },
  navtext: {
    style: theme.typography.button,
    color: theme.palette.primary.contrastText,
  },
}));

const SiteCore: React.FC = () => {

  const [menuLoc, setMenu] = useState<HTMLElement | null>(null);

  const classes = useStyles();

  const simpleNavButtonGridItem = (linkTo: string, text: string) => {
    return (
      <ButtonBase className={classes.appbarlink} component={Link} to={linkTo}>{text}</ButtonBase>
    )
  }

  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Container maxWidth={false} style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "stretch", height: "100%" }}>
              {simpleNavButtonGridItem("/", "Home")}
              <ButtonBase className={classes.appbarlink} color="inherit" component={Link} to="/menu"
                onMouseOver={(event: React.MouseEvent<HTMLElement, MouseEvent>) => { if (menuLoc !== event.currentTarget) { setMenu(event.currentTarget) } }}
                onMouseLeave={() => { setMenu(null) }}>
                Menu
                <Popper
                  className={classes.popper}
                  keepMounted
                  open={Boolean(menuLoc)}
                  anchorEl={menuLoc}
                  placement="bottom">
                  <Paper className={classes.popperpaper}>
                    {productData.categories.map((category) => {
                      return (
                        <MenuItem key={category}>
                          <div className={classes.navtext}>{category}</div>
                        </MenuItem>
                      )
                    })}
                  </Paper>
                </Popper>
              </ButtonBase>
              {simpleNavButtonGridItem("/online-order", "Online Order")}
              {simpleNavButtonGridItem("/about-us", "About Us")}
              {simpleNavButtonGridItem("/contact-us", "Contact Us")}

            </div>
          </Container>
          {/* </Grid> */}
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/menu" render={() => <MenuPage products={productData.products} categories={productData.categories} />} />
          <Route path="/online-order" component={OrderPage} />
          <Route path="/about-us" component={AboutPage} />
          <Route path="/contact-us" component={ContactPage} />
        </Switch>
      </Container>
    </>
  );
}
export default SiteCore;