import { useState } from "react";
import {
  Typography,
  Grid,
  Drawer,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  SvgIcon,
  SvgIconProps,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Hidden,
  Collapse,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import zhonglisoup from "../../mockData/productImages/temp-adeptustemptation.png";
import PaimonBanner from "./PaimonBanner"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      [theme.breakpoints.up("lg")]: {
        paddingLeft: "274px",
      },
    },

    navcontent: {
      color: "#ddbb61",
      fontFamily: "Genshin",
      fontSize: "1.5rem",
    },

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
    menuCard: {
      display: "flex",
      flexDirection: "column",
      boxShadow: theme.shadows[6],
      borderRadius: "8px",
      width: "100%",
      height: "auto",
    },
    cardcontent: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column",
      alignItems: "stretch",
      flexGrow: 1,
      padding: "max(.2rem , 5%) .1rem max(.2rem, 5%) .1rem",
      width: "100%",
      overflow: "hidden",
    },
    cardtext: {
      color: "#181729",
      fontFamily: "Genshin",
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
    },
    cardmediaback: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      flexGrow: 4.4945,
      background: "#ddbb61",
    },
    cardmediasrc: {
      maxWidth: "95%",
    },
  })
);

const GenshinMenuPrimaryIcon: React.FC = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path />
    </SvgIcon>
  );
};

type ContentProps = { products: Array<object>; categories: Array<string> };
type DrawerProps = {
  chosenCategory: number;
  categories: Array<string>;
  sendChosen: CallableFunction;
};

const MenuCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.menuCard}>
      <CardActionArea onClick={() => { }}>
        <CardMedia className={classes.cardmediaback}>
          <img src={zhonglisoup} className={classes.cardmediasrc}></img>
        </CardMedia>
        <CardContent className={classes.cardcontent}>
          <Typography variant="subtitle1" className={classes.cardtext}>
            Slow-cooked Bamboo Shoot Soup
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const SelectedItem: React.FC = () => {
  return (
    <>
      <Hidden lgUp>
        <></>
      </Hidden>
      <Hidden mdDown>
        <></>
      </Hidden>
    </>
  );
};

const DrawerContent: React.FC<DrawerProps> = ({
  chosenCategory,
  categories,
  sendChosen,
}) => {
  const classes = useStyles();

  return (
    <List>
      {categories.map((category, ind) => {
        return (
          <ListItem
            key={category}
            button
            onClick={() => {
              sendChosen(ind);
            }}
          >
            <ListItemIcon classes={{ root: classes.navcontent }}>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle1" className={classes.navcontent}>
                  {category}
                </Typography>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

const CategoryDrawer: React.FC<ContentProps> = ({ products, categories }) => {
  const classes = useStyles();

  const [openDrawer, setDrawer] = useState<boolean>(false);
  const [currentCategory, setCategory] = useState<number>(0);
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
          <DrawerContent
            chosenCategory={currentCategory}
            categories={categories}
            sendChosen={(ind: number) => {
              setCategory(ind);
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
          <DrawerContent
            chosenCategory={currentCategory}
            categories={categories}
            sendChosen={(ind: number) => {
              setCategory(ind);
            }}
          />
        </Drawer>
      </Hidden>
    </>
  );
};

const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const MenuContent: React.FC<ContentProps> = ({ products, categories }) => {
  return (
    <Grid item container spacing={2} xs={12}>
      {list.map((category) => {
        return (
          <Grid item xs={6} md={4} lg={3} xl={2}>
            <MenuCard />
          </Grid>
        );
      })}
    </Grid>
  );
};

const PaimonSite: React.FC<ContentProps> = ({ products, categories = ["All Foods", "Mondstadt", "Liyue Harbor", "Homeless Foods"] }) => {
  const classes = useStyles();

  return (
    <>
      <CategoryDrawer products={products} categories={categories} />
      <Container className={classes.content} maxWidth={false}>
        <PaimonBanner />
        <Hidden mdDown>
          <Toolbar />
        </Hidden>
        <Grid container justify="center">
          <MenuContent products={products} categories={categories} />
          <SelectedItem />
        </Grid>
        <Toolbar />
      </Container>
    </>
  );
};

export default PaimonSite;