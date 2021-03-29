import {
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      "&:hover": {
        textDecoration: "underline",
      },
    },
    footerCopySection: {
      color: "#676767",
      backgroundColor: "#080808",
      padding: "0.5rem 0",
      marginTop: "2rem",
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footerSection}>
      <Container>
        <p>Social Links</p>
        <div className={classes.hr} />
        <Grid container>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6">Link Group</Typography>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to somn</p>
            </a>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to somn else</p>
            </a>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to somwea</p>
            </a>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to somn</p>
            </a>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to som doo</p>
            </a>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6">Link Group</Typography>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to somn</p>
            </a>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to somn else</p>
            </a>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to somwea</p>
            </a>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to somn</p>
            </a>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to som doo</p>
            </a>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6">Link Group</Typography>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to somn</p>
            </a>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to somn else</p>
            </a>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to somwea</p>
            </a>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to somn</p>
            </a>
            <a href="#" className={classes.linkGroupLink}>
              <p>Link to som doo</p>
            </a>
          </Grid>
          <Grid item sm={12} md={6}>
            <h1
              style={{
                height: "100%",
                textAlign: "center",
                borderLeft: "solid 1px white",
                margin: 0,
              }}
            >
              BEEG
              <br />
              DEVS
            </h1>
          </Grid>
        </Grid>
      </Container>
      <section className={classes.footerCopySection}>
        <Container>
          <p>
            Privacy Policy, Terms and Conditions, Copyrights, and other
            credits and legal docs nobody reads. Also, I can steal your
            information.
          </p>
        </Container>
      </section>
    </footer>
  )
}

export { Footer };