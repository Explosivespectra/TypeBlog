import { useState } from "react";
import { Grid, Drawer, Collapse, IconButton, List, ListItem, ListItemText, Toolbar, Tooltip, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  navcontent: {
    textTransform: "uppercase",
    style: theme.typography.button,
    color: theme.palette.text.secondary,
  },

  mobileNav: {

  },

  desktopNav: {

  }
}));

type ContentProps = {products: Array<Object>, categories: Array<String>};

const DrawerContent: React.FC<ContentProps> = ({products, categories}) => {

  const [expandedCategories, setCategories] = useState<Array<Boolean>>(categories.map((category) => {return false}));

  const classes = useStyles();

  return (
    <List>
      {categories.map((category, ind) => {
        return (
          <ListItem button className={classes.navcontent} onClick={() => {expandedCategories[ind] = !expandedCategories[ind]; setCategories([...expandedCategories])}}>
            <ListItemText primary={<>{category}</>}/>
            {expandedCategories[ind] ? <ExpandLess color="inherit"/> : <ExpandMore color="inherit"/>}
          </ListItem>
        )
      })}
    </List>
  )
}

const MenuContent: React.FC<ContentProps> = ({products, categories}) => {
  return (
    <></>
  )
}

const MenuPage: React.FC<ContentProps> = ({products, categories}) => {

  const [openDrawer, setDrawer] = useState<boolean>(false);

  const classes = useStyles();

  return (
    <>
      <Hidden mdUp>
        <Drawer
          open={openDrawer}
          variant="temporary"
          onClose={() => {setDrawer(false)}}>
            <Toolbar/>
            <DrawerContent products={products} categories={categories}/>
        </Drawer>
      </Hidden>
      <Hidden mdUp>
          <Tooltip title="Menu Navigation">
            <IconButton onClick={() => {setDrawer(true)}}>
              <MenuIcon color="primary"/>
            </IconButton>
          </Tooltip>
      </Hidden>
      <Grid container justify="center" alignItems="flex-start">
        <Grid item>
          <Hidden smDown>
            <Drawer
              variant="permanent">
                <Toolbar/>
                <DrawerContent products={products} categories={categories}/>
            </Drawer>
          </Hidden>
        </Grid>
        <Grid item>
          Hello
        </Grid>
      </Grid>
    </>
  );
}

export { MenuPage };