import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import myImg0 from "../../assets/home-titler.png";
import myImg1 from "../../assets/foods-lineup.png";
import myImg2 from "./../../assets/customer-bg.jpg";
import myImg3 from "./../../assets/lumine-with-mask-aka-enimul.png";

const useStyles = makeStyles((theme: Theme) => createStyles({
  paddedSection: {
    padding: "10rem 0",
  },
  homeH1: {
    fontFamily: "Genshin",
    fontSize: "4rem",
  },
  homeH2: {
    fontFamily: "Genshin",
    fontSize: "3rem",
  },
  homeP: {
    fontSize: "2rem",
  },

  landingSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "7rem 0",
  },
  landingSectionInner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50rem",
  },
  landingH2: {
    fontFamily: "Helvetica",
    fontWeight: 300,
    fontSize: "2.75rem",
    lineHeight: "3rem",
  },
  landingH1: {
    fontFamily: "Genshin",
    fontSize: "5rem",
  },
  landingFoods: {
    fontSize: "9rem",
    lineHeight: "9rem",
  },
  landingTeyvat: {
    fontSize: "12.5rem",
    lineHeight: "12rem",
  },

  covidSection: {
    color: "#FFFFFF",
    backgroundColor: "#171728",
  },

  customerSection: {
    backgroundImage: `url(${myImg2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  customerBgColorOverlay: {
    minHeight: "100%",
    minWidth: "100%",
    backgroundColor: "#FFFB",
  },
  carouselArrows: {
    width: "3.75rem",
    height: "3.75rem",
    textAlign: "center",
    color: "white",
    backgroundColor: "#2d2f33",
    borderRadius: "50%",
    "& span": {
      lineHeight: "3.75rem",
    },
    "& div": {
      display: "inline-block",
      verticalAlign: "middle",
    },
  },
  carouselBloatieFloatie: {
    backgroundColor: "white",
    boxShadow: "0 0 7.5rem #555555",
    marginTop: "2rem",
    marginBottom: "1rem",
  },
  customerName: {
    fontSize: "2rem",
    fontWeight: 700,
  },
  carouselDots: {
    textAlign: "center",
    padding: 0,
    margin: 0,
    "& div": {
      display: "inline-block",
      borderRadius: "50%",
      backgroundColor: "#2d2f3366",
      width: "1.25rem",
      height: "1.25rem",
      margin: "0 0.6rem",
    },
    "& div:nth-child(3)": {
      backgroundColor: "#2d2f33",
    },
  },
}));

{/* TODO: Look at Material UI built in animation */ }
const HomePage: React.FC = () => {
  const classes = useStyles();
  return (<>
    {/* TODO: What should be the background? */}
    <section className={classes.landingSection}>
      <div className={classes.landingSectionInner}>
        {/* TODO: is there global overrides? */}
        <img src={myImg0} style={{ maxWidth: "100%", display: "block" }} />
        <img src={myImg1} style={{ maxWidth: "90%", display: "block" }} />
      </div>
    </section>
    {/* TODO: Add minimal designs to the background like -> https://www.hoyolab.com/genshin/ */}
    <section className={`${classes.paddedSection} ${classes.covidSection}`}>
      <Container>
        <Typography variant="h1" className={classes.homeH1}>Teyvat has moved!</Typography>
        <p className={classes.homeP}>
          bcuz the corona be like that. we doin what we do but now we doin it online. Buy our food or we all will go
          out of business and you will never see a restraunt again. and you will starve.
        </p>
      </Container>
    </section>
    {/* TODO: Add the Xiangling sticky */}
    {/* TODO: Add minimal designs to the background like -> https://www.hoyolab.com/genshin/ */}
    <section className={classes.paddedSection}>
      <Container>
        <Typography variant="h1" className={classes.homeH1}>Welcome to The Foods of Teyvat</Typography>
        <p className={classes.homeP}>
          here at the foods of teyvat, we care about your money, so we make foods so you can buy them so we make money.
          Here you can browse the food and look at people that make the food.
        </p>
      </Container>
    </section>
    {/* TODO: get a customer service background */}
    {/* TODO: I want the image to be a little shorter, but idk how to do it and keep height when it is alone in row in small viewport */}
    {/* TODO: Add a quote symbol to the background */}
    <section className={classes.customerSection}>
      <div className={classes.customerBgColorOverlay}>
        <div className={classes.paddedSection}>
          {/* <div style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "center", alignItems: "center" }}>
            <div className={classes.carouselArrows}><span></span><div>{"<"}</div></div>
            <Container style={{ margin: "0" }}>
              <Typography variant="h2" className={classes.homeH2}>What our customers say about us:</Typography>
              <div className={classes.carouselBloatieFloatie}>
                <Grid container>
                  <Grid item sm={12} md={4}>
                    <img src={myImg3} style={{ width: "100%", maxWidth: "100%", display: "block" }} />
                  </Grid>
                  <Grid item sm={12} md={8}>
                    <div style={{ padding: "1rem 3rem" }}>
                      <p className={classes.homeP}>
                        they prey chill i think. except that smiley guy. he succ. he always tell me to giit outta da kitchen
                    </p>
                      <hr />
                      <p className={classes.customerName}>
                        enimuL
                    </p>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.carouselDots}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Container>
            <div className={classes.carouselArrows}><span></span><div>{">"}</div></div>
          </div> */}
        </div>
      </div>
    </section>
  </>);
};

export { HomePage };
