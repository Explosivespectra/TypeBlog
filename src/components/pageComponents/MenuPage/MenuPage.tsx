import { useState } from "react";
import { MenuContent } from "./ChildComponents/MenuContent";
import { MenuDrawer } from "./ChildComponents/MenuDrawer";
import { Grid, Toolbar, Hidden, Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import RestaurantBanner from "./ChildComponents/RestaurantBanner";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      [theme.breakpoints.up("lg")]: {
        paddingLeft: "250px",
      },
    },
  })
);

export interface RegionRestParameters {
  region: string;
  rest: number | null;
}

const MenuPage: React.FC = () => {
  const classes = useStyles();
  const [chosenRegionRest, setRegionRest] = useState<RegionRestParameters>({
    region: "All Foods",
    rest: null,
  });

  return (
    <>
      <MenuDrawer
        sendRegionName={(name: string) => {
          setRegionRest({ region: name, rest: null });
        }}
        sendRestID={(id: number) => {
          setRegionRest({ region: chosenRegionRest.region, rest: id });
        }}
      />
      <div className={classes.content}>
        <MenuContent {...chosenRegionRest} />
        <Toolbar />
      </div>
    </>
  );
};

export { MenuPage };
