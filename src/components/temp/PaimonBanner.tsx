import { makeStyles, createStyles, Theme, Typography } from "@material-ui/core";
import myImg from "./assets/GoodHunter (11).png";
import myImg2 from "./assets/Paimon.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // content: {
    //   [theme.breakpoints.up("lg")]: {
    //     paddingLeft: "250px",
    //   },
    // },
    // menuNav: {
    //   width: "250px",
    //   "&::before": {
    //     position: "absolute",
    //   },
    // },

    bannerWrap: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      marginBottom: "-16rem",
      [theme.breakpoints.up("md")]: {
        marginBottom: "-14rem",
      }
    },
    background: {
      position: "absolute",
      zIndex: -100,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundImage: `url('${myImg}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      WebkitMaskImage: "-webkit-linear-gradient(top, rgba(0,0,0,1) 65%, rgba(0,0,0,0))",
    },
    contentWrap: {
      position: "relative",
      maxWidth: "85rem",
      padding: "7rem 0 21rem 0",
    },
    restrauntInfoWrap: {
      textAlign: "center",
      [theme.breakpoints.up("sm")]: {
        margin: "0 3rem 0 3rem",
      },
      [theme.breakpoints.up("md")]: {
        margin: "0 6rem 0 25%",
      },
    },
    restrauntName: {
      fontFamily: "Genshin",
      fontSize: "4rem",
      color: "white",
      marginBottom: "1rem",
      textShadow: "0 0 50px black",
    },
    restrauntDesc: {
      fontSize: "2rem",
      color: "#495366",
      backgroundColor: "#ebe1d4",
      padding: "1.5rem 4rem",
      marginBottom: "1rem",
      boxShadow: "0 0 50px black",
    },
    charaPicWrap: {
      zIndex: -50,
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        padding: "0 30% 0 30%",
        "& img": {
          width: "100%",
          height: "auto",
        },
      },
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignSelf: "start",
        "& img": {
          width: "auto",
          height: "100%",
        },
      },
    },
  })
);

const PaimonBanner: React.FC = () => {
  const classes = useStyles();

  return <section>
    <div className={classes.bannerWrap}>
      <div className={classes.background}></div>
      <div className={classes.contentWrap}>
        <div className={classes.restrauntInfoWrap}>
          <Typography variant="h1" className={classes.restrauntName}>Good Hunter</Typography>
          <div className={classes.restrauntDesc}>
            We are the Good Hunt and we do good hunting to make that good food. We also make fisherman toast that Paimons likes
          </div>
        </div>
        <div className={classes.charaPicWrap}>
          <img src={myImg2} />
        </div>
      </div>
    </div>
  </section>
}

export default PaimonBanner;