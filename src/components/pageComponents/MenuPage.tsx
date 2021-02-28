import { useState } from "react";
import { Typography, Grid, Drawer, Card, Button, IconButton, List, ListItem, ListItemText, Toolbar, Tooltip, Hidden, Container } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  navcontent: {
    textTransform: "uppercase",
    style: theme.typography.button,
    color: theme.palette.text.secondary,
  },

  mobileNav: {

  },

  desktopNav: {

  },

  menuCards: {

  },

}));

type ContentProps = { products: Array<object>, categories: Array<string> };

const DrawerContent: React.FC<ContentProps> = ({ products, categories }) => {

  const [expandedCategories, setCategories] = useState<Array<Boolean>>(categories.map((category) => { return false }));

  const classes = useStyles();

  return (
    <List>
      {categories.map((category, ind) => {
        return (
          <ListItem button className={classes.navcontent} onClick={() => { expandedCategories[ind] = !expandedCategories[ind]; setCategories([...expandedCategories]) }}>
            <ListItemText primary={<>{category}</>} />
            {expandedCategories[ind] ? <ExpandLess color="inherit" /> : <ExpandMore color="inherit" />}
          </ListItem>
        )
      })}
    </List>
  )
}

const CategoryDrawer: React.FC<ContentProps> = ({ products, categories }) => {

  const [openDrawer, setDrawer] = useState<boolean>(false);

  return (<nav>
    <Hidden xlUp>
      <Drawer
        open={openDrawer}
        variant="temporary"
        onClose={() => { setDrawer(false) }}>
        <Toolbar />
        <DrawerContent products={products} categories={categories} />
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
        variant="persistent" open={true}>
        <Toolbar />
        <DrawerContent products={products} categories={categories} />
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
        </Grid>
      </Container>
    </>
  );
}

export { MenuPage };