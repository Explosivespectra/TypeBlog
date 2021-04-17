import { useState } from "react";
import { MenuContent } from "./ChildComponents/MenuContent";
import { MenuDrawer } from "./ChildComponents/MenuDrawer";
import { Grid, Toolbar, Hidden, Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      [theme.breakpoints.up("lg")]: {
        paddingLeft: "274px",
      },
    },
  })
);

const MenuPage: React.FC = () => {
  const classes = useStyles();
  const [chosenRegion, setRegion] = useState<string>("All");
  return (
    <>
      <MenuDrawer />
      <Container className={classes.content} maxWidth={false}>
        <Hidden mdDown>
          <Toolbar />
        </Hidden>
        <Grid container justify="center">
          <MenuContent />
        </Grid>
        <Toolbar />
      </Container>
    </>
  );
};

export { MenuPage };
