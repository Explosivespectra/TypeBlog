import React, { useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import myImg0 from "../../assets/home-titler.png";
import myImg1 from "../../assets/foods-lineup.png";
import myImg2 from "./../../assets/customer-bg.jpg";
import myImg3 from "./../../assets/quote-marks.png";
import myImg4 from "./../../assets/lumine-with-mask-aka-enimul.png";
import Carousel from "react-material-ui-carousel";

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
  carouselBloatieFloatie: {
    marginTop: "2rem",
  },
  customerName: {
    fontSize: "2rem",
    fontWeight: 700,
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
    <section className={classes.customerSection}>
      <div className={classes.customerBgColorOverlay}>
        <div className={classes.paddedSection}>
          <Container>
            <Typography variant="h2" className={classes.homeH2}>What our customers say about us:</Typography>
            {/* I want this to have this have a shadow, but I don't know how to get it to work with this carousel... */}
            {/* <div style={{ position: "absolute", width: "100%", height: "5000px", boxShadow: "0 0 7.5rem #555555" }}></div> */}
            <Carousel className={classes.carouselBloatieFloatie} indicators={true} autoPlay={false}>
              <div style={{ backgroundColor: "white" }}>
                <Grid container>
                  <Grid item sm={12} md={4}>
                    <img src={myImg4} style={{ width: "100%", maxWidth: "100%", display: "block" }} />
                  </Grid>
                  <Grid item sm={12} md={8}>
                    <img src={myImg3} style={{ position: "absolute", marginTop: "1rem", marginLeft: "1rem", width: "15%", display: "block", opacity: 0.1 }} />
                    <div style={{ padding: "3rem 4rem" }}>
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
              <div></div>
            </Carousel>
          </Container>
        </div>
      </div>
    </section>
  </>);
};

export { HomePage };
