import React from "react";
import { createStyles, Grid, Hidden, makeStyles, Paper, Theme } from "@material-ui/core";

import quoteImg from "../../../../assets/quote-marks.png";

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

type CarouselItemProps = {
  data: {
    name: string;
    text: string;
    img: string;
  };
};
const CarouselItem: React.FC<CarouselItemProps> = ({ data }) => {
  const classes = useStyles2();

  return (
    <Paper elevation={10}>
      <Grid container style={{ backgroundColor: "white" }}>
        <Grid item sm={12} md={4}>
          <Hidden mdUp>
            <img src={data.img} />
          </Hidden>
          <Hidden smDown>
            <div
              className={classes.customerPictureDiv}
              style={{ backgroundImage: `url(${data.img})` }}
            ></div>
          </Hidden>
        </Grid>
        <Grid item sm={12} md={8}>
          <img
            src={quoteImg}
            style={{
              position: "absolute",
              width: "15%",
              opacity: 0.1,
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          />
          <div style={{ padding: "3rem 4rem" }}>
            <p className={classes.customerMsg}>{data.text}</p>
            <hr />
            <p className={classes.customerName}>{data.name}</p>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CarouselItem;