import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  Container,
  AppBar,
  IconButton,
  Hidden,
  Drawer,
  List,
  ListItem,
  MenuItem,
  Popper,
  Toolbar,
  Typography,
  Paper,
  ButtonBase,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { HomePage } from "./pageComponents/HomePage/HomePage";
import { MenuPage } from "./pageComponents/MenuPage/MenuPage";
import { OrderPage } from "./pageComponents/OrderPage/OrderPage";
import { AboutPage } from "./pageComponents/AboutPage/AboutPage";
import { ContactPage } from "./pageComponents/ContactPage/ContactPage";
import { Footer } from "./SiteCoreChildren/Footer";
import productData from "../mockData/products.json";

import PaimonSite from "./temp/PaimonSite";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      marginRight: theme.spacing(4),
      fontFamily: "Genshin",
      textDecoration: "none",
      position: "relative",
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
      backgroundColor: theme.palette.primary.main,
    },
    navtext: {
      style: theme.typography.button,
      color: theme.palette.primary.contrastText,
    },
  })
);

const SiteCore: React.FC = () => {
  const [menuLoc, setMenu] = useState<HTMLElement | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false);

  const classes = useStyles();

  const simpleNavButtonGridItem = (linkTo: string, text: string) => {
    return (
      <ButtonBase className={classes.appbarlink} component={Link} to={linkTo}>
        {text}
      </ButtonBase>
    );
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Container
            maxWidth={false}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
                height: "100%",
              }}
            >
              <Typography
                variant={"h3"}
                color="inherit"
                className={classes.title}
                component={Link}
                to={"/"}
              >
                FoT
              </Typography>
              <Hidden smDown>
                {simpleNavButtonGridItem("/", "Home")}
                <ButtonBase
                  className={classes.appbarlink}
                  color="inherit"
                  component={Link}
                  to="/menu"
                  onMouseOver={(
                    event: React.MouseEvent<HTMLElement, MouseEvent>
                  ) => {
                    if (menuLoc !== event.currentTarget) {
                      setMenu(event.currentTarget);
                    }
                  }}
                  onMouseLeave={() => {
                    setMenu(null);
                  }}
                >
                  Menu
                  <Popper
                    className={classes.popper}
                    keepMounted
                    open={Boolean(menuLoc)}
                    anchorEl={menuLoc}
                    placement="bottom"
                  >
                    <Paper className={classes.popperpaper}>
                      {productData.categories.map((category) => {
                        return (
                          <MenuItem key={category}>
                            <div className={classes.navtext}>{category}</div>
                          </MenuItem>
                        );
                      })}
                    </Paper>
                  </Popper>
                </ButtonBase>
                {simpleNavButtonGridItem("/online-order", "Online Order")}
                {simpleNavButtonGridItem("/about-us", "About Us")}
                {simpleNavButtonGridItem("/contact-us", "Contact Us")}
              </Hidden>
              <Hidden mdUp>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    setExpanded(true);
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  open={expanded}
                  anchor="top"
                  onClose={() => {
                    setExpanded(false);
                  }}
                >
                  <List>
                    <ListItem>{simpleNavButtonGridItem("/", "Home")}</ListItem>
                    <ListItem>
                      {simpleNavButtonGridItem("/menu", "Menu")}
                    </ListItem>
                    <ListItem>
                      {simpleNavButtonGridItem("/online-order", "Online Order")}
                    </ListItem>
                    <ListItem>
                      {simpleNavButtonGridItem("/about-us", "About Us")}
                    </ListItem>
                    <ListItem>
                      {simpleNavButtonGridItem("/contact-us", "Contact Us")}
                    </ListItem>
                  </List>
                </Drawer>
              </Hidden>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/menu"
          render={() => (
            <MenuPage
            />
          )}
        />
        <Route path="/online-order" component={OrderPage} />
        <Route path="/about-us" component={AboutPage} />
        <Route path="/contact-us" component={ContactPage} />
        <Route
          path="/lezgo-chingling-bby"
          component={() => (
            <div>
              <h1>Itz chingling's site baby</h1>
              <p>
                LETS GO. ITS THE CHINGLING SITE. TIME TO EAT WANMIN FOOOOOOOOD
              </p>
            </div>
          )}
        />
        <Route path="/temp-paimon" component={PaimonSite} />
      </Switch>
      <Footer />
    </>
  );
};

export default SiteCore;
