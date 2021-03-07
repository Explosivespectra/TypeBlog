import React, { useState } from "react";
import { Container, Grid, Hidden, Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

import myImg0 from "../../assets/home-titler.png";
import myImg1 from "../../assets/foods-lineup.png";
import myImg10 from "../../assets/covid-bg.png";
import myImg2 from "../../assets/come-to-the-wanmin-sticky.png";
import myImg20 from "../../assets/welcome-bg.png";
import myImg3 from "./../../assets/customer-bg.jpg";

import "./animTest.css";

import quoteImg from "./../../assets/quote-marks.png";
import enimulImg from "./../../assets/lumine-with-mask-aka-enimul.png";
import jackImg from "./../../assets/just-manly-jack.png";

const useStyles = makeStyles((theme: Theme) => createStyles({
  paddedSection: {
    padding: "10rem 0",
  },
  homeH1: {
    fontFamily: "Genshin",
    fontSize: "4rem",
  },
  homeH2: {
    color: "white",
    fontFamily: "Genshin",
    fontSize: "3rem",
    textShadow: "0 0 5rem #000",
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
    maxWidth: "60rem",
    margin: "0 1rem",
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
    backgroundImage: `url(${myImg10})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  welcomeSection: {
    backgroundImage: `url(${myImg20})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  customerSection: {
    backgroundImage: `url(${myImg3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  customerBgColorOverlay: {
    minHeight: "100%",
    minWidth: "100%",
    backgroundColor: "#444D",
  },
  carouselBloatieFloatie: {
    marginTop: "2rem",
  },
  customerPictureDiv: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  customerName: {
    fontSize: "2rem",
    fontWeight: 700,
  },
}));



{/* TODO: Look at Material UI built in animation */ }
{/* TODO: move things out to components */ }
const HomePage: React.FC = () => {
  const classes = useStyles();

  const carouselData = [
    {
      name: "enimul",
      text: "they prey chill i think. except that smiley guy. he succ. he always tell me to giit outta da kitchen.",
      img: enimulImg
    },
    {
      name: "Manly Jack",
      text: "i love skwewers brodda. gimme dem skewers. they so tasty and i eat them all in one bit because im so manly.",
      img: jackImg
    },
    // {
    //   name: "A sticky",
    //   text: "was good iz chingling. Have you gone to the Wanmin yet?",
    //   img: myImg2
    // },
  ]

  return (<>
    {/* TODO: What should be the background? */}
    <section className={classes.landingSection}>
      <div className={`${classes.landingSectionInner} toto`}>
        <img src={myImg0} />
        <img src={myImg1} style={{ maxWidth: "90%" }} />
      </div>
    </section>
    <section className={`${classes.paddedSection} ${classes.covidSection}`}>
      <Container>
        <Typography variant="h1" className={classes.homeH1}>Teyvat has moved!</Typography>
        <p className={classes.homeP}>
          bcuz the corona be like that. we doin what we do but now we doin it online. Buy our food or we all will go
          out of business and you will never see a restraunt again. and you will starve.
        </p>
      </Container>
    </section>
    <a href="lezgo-chingling-bby" style={{ position: "absolute", right: "10%", width: "80%", maxWidth: "20rem", transform: "translateY(-55%)" }}>
      <img src={myImg2} />
    </a>
    <section className={`${classes.paddedSection} ${classes.welcomeSection}`}>
      <Container>
        <Typography variant="h1" className={classes.homeH1}>Welcome to The Foods of Teyvat</Typography>
        <p className={classes.homeP}>
          here at the foods of teyvat, we care about your money, so we make foods so you can buy them so we make money.
          Here you can browse the food and look at people that make the food.
        </p>
      </Container>
    </section>
    <section className={classes.customerSection}>
      <div className={classes.customerBgColorOverlay}>
        <div className={classes.paddedSection}>
          <Container>
            <Typography variant="h2" className={classes.homeH2}>What our customers say about us:</Typography>
            {/* I want this to have this have a shadow, but I don't know how to do that with this premade carousel... */}
            <Carousel className={classes.carouselBloatieFloatie} indicators={true} autoPlay={false}>
              {carouselData.map((data, index) => {
                return <CarouselItem key={index} data={data} />
              })}
            </Carousel>
          </Container>
        </div>
      </div>
    </section>
  </>);
};

export { HomePage };

const useStyles2 = makeStyles((theme: Theme) => createStyles({
  customerPictureDiv: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  customerMsg: {
    fontSize: "2rem",
  },
  customerName: {
    fontSize: "2rem",
    fontWeight: 700,
  },
}));

type CarouselItemProps = {
  data: {
    name: string,
    text: string,
    img: string
  }
}
const CarouselItem: React.FC<CarouselItemProps> = ({ data }) => {
  const classes = useStyles2();

  return (<Paper elevation={3}>
    <Grid container style={{ backgroundColor: "white" }}>
      <Grid item sm={12} md={4}>
        <Hidden mdUp>
          <img src={data.img} />
        </Hidden>
        <Hidden smDown>
          <div
            className={classes.customerPictureDiv}
            style={{ backgroundImage: `url(${data.img})` }}>
          </div>
        </Hidden>
      </Grid>
      <Grid item sm={12} md={8}>
        {/* Quote Img in BG */}
        <img
          src={quoteImg}
          style={{
            position: "absolute",
            width: "15%",
            opacity: 0.1,
            marginTop: "1rem",
            marginLeft: "1rem",
          }} />
        <div style={{ padding: "3rem 4rem" }}>
          <p className={classes.customerMsg}>{data.text}</p>
          <hr />
          <p className={classes.customerName}>{data.name}</p>
        </div>
      </Grid>
    </Grid>
  </Paper>
  )
}
