import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  homeH1: {
    fontFamily: "Genshin",
  }
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h1" className={classes.homeH1}>Genshin Impact Menu</Typography>
      <Typography variant="h2">We have the meats.</Typography>
    </Container>
  );
};

export { HomePage };
