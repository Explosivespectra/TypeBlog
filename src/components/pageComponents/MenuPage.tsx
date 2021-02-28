import { useState } from "react";
import { Typography, Grid, Drawer, Card, CardActionArea, CardMedia, CardContent, Button, IconButton, List, ListItem, ListItemText, Toolbar, Tooltip, Hidden, Container } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  navcontent: {
    color: "#ddbb61",
    fontFamily: "Genshin",
  },

  menuNav: {
    background:"#181729",
  },
  menuCard: {
    borderRadius: "8px",
  },
  cardcontent: {
    color: "#181729",
    fontFamily: "Genshin",
  }
}));

type ContentProps = { products: Array<object>, categories: Array<string> };
type DrawerProps = { chosenCategory: number, categories: Array<string>, sendChosen: CallableFunction};

const MenuCard: React.FC = () => {

  const classes = useStyles();

  return (
    <Card className={classes.menuCard}>
      <CardActionArea onClick={() => {}}>
        <CardMedia/>
        <CardContent>
          <Typography variant="subtitle1" className={classes.cardcontent}>Hello World</Typography>
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
        classes={{ paper: classes.menuNav}}
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
        classes={{ paper: classes.menuNav}}
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