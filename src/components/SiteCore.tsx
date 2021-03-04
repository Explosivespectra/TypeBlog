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

const useStyles = makeStyles((theme: Theme) => createStyles({
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
    backgroundColor: theme.palette.primary.main
  },
  navtext: {
    style: theme.typography.button,
    color: theme.palette.primary.contrastText,
  },
  footerSection: {
    color: "#999999",
    backgroundColor: "#131313",
    paddingTop: "0.5rem",
    "& h6": {
      fontSize: "1rem",
      fontWeight: "bold",
    },
  },
  hr: {
    backgroundColor: "#676767",
    height: "1px",
    margin: "1rem 0",
    padding: 0,
  },
  linkGroupLink: {
    textDecoration: "none",
    color: "#999999",
    "& p": {
      margin: 0,
    },
    '&:hover': {
      textDecoration: "underline",
    },
  },
  footerCopySection: {
    color: "#676767",
    backgroundColor: "#080808",
    padding: "0.5rem 0",
    marginTop: "2rem",
  }
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
              <Typography variant={"h3"} color="inherit" className={classes.title} component={Link} to={"/"}>FoT</Typography>
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
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" render={() => <MenuPage products={productData.products} categories={productData.categories} />} />
        <Route path="/online-order" component={OrderPage} />
        <Route path="/about-us" component={AboutPage} />
        <Route path="/contact-us" component={ContactPage} />
      </Switch>
      <footer className={classes.footerSection}>
        <Container>
          <p>Social Links</p>
          <div className={classes.hr} />
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Link Group</Typography>
              <a href="#" className={classes.linkGroupLink}><p>Link to somn</p></a>
              <a href="#" className={classes.linkGroupLink}><p>Link to somn else</p></a>
              <a href="#" className={classes.linkGroupLink}><p>Link to somwea</p></a>
              <a href="#" className={classes.linkGroupLink}><p>Link to somn</p></a>
              <a href="#" className={classes.linkGroupLink}><p>Link to som doo</p></a>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Link Group</Typography>
              <a href="#" className={classes.linkGroupLink}><p>Link to somn</p></a>
              <a href="#" className={classes.linkGroupLink}><p>Link to somn else</p></a>
              <a href="#" className={classes.linkGroupLink}><p>Link to somwea</p></a>
              <a href="#" className={classes.linkGroupLink}><p>Link to somn</p></a>
              <a href="#" className={classes.linkGroupLink}><p>Link to som doo</p></a>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Link Group</Typography>
              <a href="#" className={classes.linkGroupLink}><p>Link to somn</p></a>
              <a href="#" className={classes.linkGroupLink}><p>Link to somn else</p></a>
              <a href="#" className={classes.linkGroupLink}><p>Link to somwea</p></a>
              <a href="#" className={classes.linkGroupLink}><p>Link to somn</p></a>
              <a href="#" className={classes.linkGroupLink}><p>Link to som doo</p></a>
            </Grid>
          </Grid>
        </Container>
        <section className={classes.footerCopySection}>
          <Container>
            <p>
              Privacy Policy, Terms and Conditions, Copyrights, and other credits and legal docs nobody reads. Also, I can steal your information.
            </p>
          </Container>
        </section>
      </footer>
    </>
  );
}
export default SiteCore;