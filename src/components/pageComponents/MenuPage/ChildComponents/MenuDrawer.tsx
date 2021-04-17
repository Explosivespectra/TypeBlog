import { useState } from "react";
import { MenuDrawerList } from "./MenuDrawerList";
import {
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuNav: {
      width: "250px",
      background: "#181729",
      "&::before": {
        position: "absolute",
        top: "0px",
        left: "27.5px",
        display: "block",
        content: "''",
        width: "1px",
        height: "100%",
        background: "#ddbb61",
      },
    },
  })
);

const MenuDrawer: React.FC = () => {
  const classes = useStyles();

  const [openDrawer, setDrawer] = useState<boolean>(false);
  const [currentSelected, setSelected] = useState<number>(0);
  return (
    <>
      <Hidden lgUp>
        <Drawer
          classes={{ paper: classes.menuNav }}
          open={openDrawer}
          variant="temporary"
          onClose={() => {
            setDrawer(false);
          }}
        >
          <Toolbar />
          <MenuDrawerList
            chosenCategory={currentSelected}
            sendChosen={(ind: number, name: string) => {
              setSelected(ind);
            }}
          />
        </Drawer>
      </Hidden>
      <Hidden lgUp>
        <Tooltip title="Menu Navigation">
          <IconButton
            onClick={() => {
              setDrawer(true);
            }}
          >
            <MenuIcon color="primary" />
          </IconButton>
        </Tooltip>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          classes={{ paper: classes.menuNav }}
          open={true}
          variant="permanent"
        >
          <Toolbar />
          <MenuDrawerList
            chosenCategory={currentSelected}
            sendChosen={(ind: number, name: string) => {
              setSelected(ind);
            }}
          />
        </Drawer>
      </Hidden>
    </>
  );
};

export { MenuDrawer };
