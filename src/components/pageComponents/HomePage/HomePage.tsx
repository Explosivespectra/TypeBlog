import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

import CarouselItem from "./ChildComponents/CarouselItem";

import myImg0 from "../../../assets/home-titler.png";
import myImg1 from "../../../assets/foods-lineup.png";
import myImg10 from "../../../assets/covid-bg.png";
import myImg2 from "../../../assets/come-to-the-wanmin-sticky.png";
import myImg20 from "../../../assets/welcome-bg.png";
import myImg3 from "../../../assets/customer-bg.jpg";

import enimulImg from "../../../assets/lumine-with-mask-aka-enimul.png";
import jackImg from "../../../assets/just-manly-jack.png";
import classes from "*.module.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

    xianglingSticky: {
      position: "absolute",
      right: "10%",
      width: "80%",
      maxWidth: "20rem",
      transform: "translateY(-55%)",
      "& img:hover": {
        transform: "scale(1.1, 1.1)",
      }
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
      backgroundColor: "#171728DD",
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
  })
);

// TODO: move things out to components
const HomePage: React.FC = () => {
  const classes = useStyles();

  const carouselData = [
    {
      name: "enimul",
      text:
        "they prey chill i think. except that smiley guy. he succ. he always tell me to giit outta da kitchen.",
      img: enimulImg,
    },
    {
      name: "Manly Jack",
      text:
        "i love skwewers brodda. gimme dem skewers. they so tasty and i eat them all in one bit because im so manly.",
      img: jackImg,
    },
  ];

  return (
    <>
      {/* TODO: What should be the background? */}
      <section className={classes.landingSection}>
        <div className={classes.landingSectionInner}>
          <img src={myImg0} />
          <img src={myImg1} style={{ maxWidth: "90%" }} />
        </div>
      </section>
      <section className={`${classes.paddedSection} ${classes.covidSection}`}>
        <Container>
          <Typography variant="h1" className={classes.homeH1}>
            Teyvat has moved!
          </Typography>
          <p className={classes.homeP}>
            bcuz the corona be like that. we doin what we do but now we doin it
            online. Buy our food or we all will go out of business and you will
            never see a restraunt again. and you will starve.
          </p>
        </Container>
      </section>
      <XianglingSticky />
      <section className={`${classes.paddedSection} ${classes.welcomeSection}`}>
        <Container>
          <Typography variant="h1" className={classes.homeH1}>
            Welcome to The Foods of Teyvat
          </Typography>
          <p className={classes.homeP}>
            here at the foods of teyvat, we care about your money, so we make
            foods so you can buy them so we make money. Here you can browse the
            food and look at people that make the food.
          </p>
        </Container>
      </section>
      <section className={classes.customerSection}>
        <div className={classes.customerBgColorOverlay}>
          <div className={classes.paddedSection}>
            <Container>
              <Typography variant="h2" className={classes.homeH2}>
                What our customers say about us:
              </Typography>
              {/* I want this to have this have a shadow, but I don't know how to do that with this premade carousel... */}
              <Carousel
                className={classes.carouselBloatieFloatie}
                indicators={true}
                autoPlay={false}
              >
                {carouselData.map((data, index) => {
                  return <CarouselItem key={index} data={data} />;
                })}
              </Carousel>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

export { HomePage };


const XianglingSticky = () => {
  const classes = useStyles();
  return <a
    href="lezgo-chingling-bby"
    className={classes.xianglingSticky}
  >
    <img src={myImg2} />
  </a >;
}

