import { MenuContent } from "./ChildComponents/MenuContent";
import { MenuDrawer } from "./ChildComponents/MenuDrawer";
import { Cart } from "../../features/cart/Cart";
import { Toolbar } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
  return (
    <>
      <MenuDrawer />
      <div className={classes.content}>
        <MenuContent />
        <Toolbar />
      </div>
    </>
  );
};

export { MenuPage };
