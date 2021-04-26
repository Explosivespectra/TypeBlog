import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { REGIONS_QUERY } from "./queries";
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
  CircularProgress,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { HomePage } from "./pageComponents/HomePage/HomePage";
import {
  MenuPage,
  RegionRestParameters,
} from "./pageComponents/MenuPage/MenuPage";
import { OrderPage } from "./pageComponents/OrderPage/OrderPage";
import { AboutPage } from "./pageComponents/AboutPage/AboutPage";
import { ContactPage } from "./pageComponents/ContactPage/ContactPage";
import { Footer } from "./SiteCoreChildren/Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    logoWrap: {
      color: "inherit",
      textDecoration: "none",
      marginRight: theme.spacing(4),
      fontFamily: "Genshin",
    },
    grow: {
      flexGrow: 1,
    },
    appbarLinksWrapper: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      top: 0,
      right: "24px",
      bottom: 0,
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

const AppBarMenuList: React.FC = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(REGIONS_QUERY);

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <Typography variant="subtitle1">Error</Typography>;
  }
  return (
    <>
      {data.regions.map((category: string) => {
        return (
          <MenuItem
            key={category}
            button
            component={Link}
            to={`/menu/${category}`}
          >
            <div className={classes.navtext}>{category}</div>
          </MenuItem>
        );
      })}
    </>
  );
};

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
          <Typography
            variant={"h3"}
            className={classes.logoWrap}
            component={Link}
            to={"/"}
          >
            FoT
          </Typography>
          <div className={classes.grow} />
          <Hidden smDown>
            <div className={classes.appbarLinksWrapper}>
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
                    <AppBarMenuList />
                  </Paper>
                </Popper>
              </ButtonBase>
              {simpleNavButtonGridItem("/online-order", "Online Order")}
              {simpleNavButtonGridItem("/about-us", "About Us")}
              {simpleNavButtonGridItem("/contact-us", "Contact Us")}
            </div>
          </Hidden>
          <Hidden mdUp>
            <IconButton color="inherit" onClick={() => setExpanded(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              open={expanded}
              anchor="top"
              onClose={() => setExpanded(false)}
            >
              <List>
                <ListItem>{simpleNavButtonGridItem("/", "Home")}</ListItem>
                <ListItem>{simpleNavButtonGridItem("/menu", "Menu")}</ListItem>
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
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/menu">
          <MenuPage />
        </Route>
        <Route path="/online-order">
          <OrderPage />
        </Route>
        <Route path="/about-us">
          <AboutPage />
        </Route>
        <Route path="/contact-us">
          <ContactPage />
        </Route>
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
      </Switch>
      <Footer />
    </>
  );
};

export default SiteCore;
