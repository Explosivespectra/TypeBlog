import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import myImg from "../../assets/foods-lineup.png";

const useStyles = makeStyles((theme: Theme) => createStyles({
  paddedSection: {
    padding: "4rem 0",
  },
  homeH1: {
    fontFamily: "Genshin",
    fontSize: "4.5rem",
  },

  landingSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "aqua",
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
    backgroundColor: "red",
  }
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (<>
    <section className={classes.paddedSection}>
      <Container>
        <div className={classes.landingSection}>
          <Typography variant="h2" className={classes.landingH2}>Welcome to</Typography>
          <Typography variant="h1" className={classes.landingH1}>The <span className={classes.landingFoods}>FOODS</span> of</Typography>
          <Typography variant="h1" className={`${classes.landingH1} ${classes.landingTeyvat}`}>TEYVAT</Typography>
          <img src={myImg} style={{ maxWidth: "100%", display: "block" }} />
        </div>
      </Container>
    </section>
    <section className={classes.paddedSection}>
      <Container>
        <div className={classes.covidSection}>
          <Typography variant="h1" className={classes.homeH1}>Teyvat has moved!</Typography>
          <p>bcuz the corona be like that. we doin what we do but now we doin it online. Buy our food or we all will go out of business and you will never see a restraunt again. and you will starve.</p>
        </div>
      </Container>
    </section>
  </>);
};

export { HomePage };
