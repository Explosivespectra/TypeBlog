import { useState } from "react";
import { Typography, Grid, Drawer, Card, CardActionArea, CardMedia, CardContent, Button, SvgIcon, SvgIconProps, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Tooltip, Hidden, Collapse, Container } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import zhonglisoup from '../../mockData/productImages/temp-zhonglisoup.png';
const useStyles = makeStyles((theme: Theme) => createStyles({
  navcontent: {
    color: "#ddbb61",
    fontFamily: "Genshin",
  },

  menuNav: {
    background:"#181729",
    "&::before": {
      position: "absolute",
      top: "0px",
      left: "27.5px",
      display: "block",
      content: "''",
      width: "1px",
      height: "100%",
      background: "#ddbb61"
    },
  },
  menuCard: {
    boxShadow: theme.shadows[6],
    borderRadius: "8px",
  },
  cardcontent: {
    textAlign: "center",
    padding: "4px 2px 2px 4px",
  },
  cardtext: {
    color: "#181729",
    fontFamily: "Genshin",
  },
  cardmediaback: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "135px",
    background: "#ddbb61",
  },
  cardmediasrc: {
    maxWidth: "95%",
    height: "auto",
  },
}));

const GenshinMenuPrimaryIcon:React.FC = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path />
    </SvgIcon>
  )
}

type ContentProps = { products: Array<object>, categories: Array<string> };
type DrawerProps = { chosenCategory: number, categories: Array<string>, sendChosen: CallableFunction};


const MenuCard: React.FC = () => {

  const classes = useStyles();

  return (
    <Card className={classes.menuCard}>
      <CardActionArea onClick={() => {}}>
        <CardMedia
          className={classes.cardmediaback}
        >
          <img src={zhonglisoup} className={classes.cardmediasrc}></img>
        </CardMedia>
        <CardContent className={classes.cardcontent}>
          <Typography variant="subtitle1" className={classes.cardtext}>Hello World</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const DrawerContent: React.FC<DrawerProps> = ({ chosenCategory, categories, sendChosen }) => {

  const classes = useStyles();

  return (
    <List>
      {categories.map((category, ind) => {
        return (
          <ListItem key={category} button onClick={() => { sendChosen(ind)}}>
            <ListItemIcon classes={{root: classes.navcontent}}><FiberManualRecordIcon/></ListItemIcon>
            <ListItemText primary={<Typography variant="subtitle1" className={classes.navcontent}>{category}</Typography>}/>
          </ListItem>
        )
      })}
    </List>
  )
}

const CategoryDrawer: React.FC<ContentProps> = ({ products, categories }) => {

  const classes = useStyles();

  const [openDrawer, setDrawer] = useState<boolean>(false);
  const [currentCategory, setCategory] = useState<number>(0);
  return (<nav>
    <Hidden xlUp>
      <Drawer
        classes={{ paper: classes.menuNav }}
        open={openDrawer}
        variant="temporary"
        onClose={() => { setDrawer(false) }}>
        <Toolbar />
        <DrawerContent chosenCategory={currentCategory} categories={categories} sendChosen={(ind: number) => {setCategory(ind)}} />
      </Drawer>
    </Hidden>
    <Hidden xlUp>
      <Tooltip title="Menu Navigation">
        <IconButton onClick={() => { setDrawer(true) }}>
          <MenuIcon color="primary" />
        </IconButton>
      </Tooltip>
    </Hidden>
    <Hidden lgDown>
      <Drawer
        classes={{ paper: classes.menuNav }}
        open={true}
        variant="persistent">
        <Toolbar />
        <DrawerContent chosenCategory={currentCategory} categories={categories} sendChosen={(ind: number) => {setCategory(ind)}} />
      </Drawer>
    </Hidden>
  </nav>)
}

const MenuContent: React.FC<ContentProps> = ({ products, categories }) => {
  return (
  <>
    {categories.map( (category) => { 
      return (
      <Grid item container>
        <Grid item>
          <Typography variant="h2">{category}</Typography>
        </Grid>
      </Grid>
      )
    })}
  </>
  )
}

const MenuPage: React.FC<ContentProps> = ({ products, categories }) => {
  const classes = useStyles();

  return (
    <>
      <CategoryDrawer products={products} categories={categories} />
      <Container>
        <Typography variant="h1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, tempora!</Typography>
        <Grid container justify="center" alignItems="flex-start">
          <MenuContent products={products} categories={categories}/>
          <Button>I'm a button</Button>
          <MenuCard/>
        </Grid>
      </Container>
    </>
  );
}

export { MenuPage };