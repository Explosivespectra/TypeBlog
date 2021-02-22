import { useState } from 'react';
import { Grid, Drawer, Button, IconButton, List, ListItem, ListItemText, Toolbar, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  navtext: {
    textTransform: "uppercase",
    style: theme.typography.button,
    color: theme.palette.text.secondary,
  }
}));

const DrawerContent: React.FC = () => {
  return (
    <></>
  )
}

const MenuContent: React.FC = () => {
  return (
    <></>
  )
}

const MenuPage: React.FC = () => {

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
            <List>
              <ListItem>
                <ListItemText className={classes.navtext} primary={<>Wow</>}/>
              </ListItem>
            </List>
        </Drawer>
      </Hidden>
      <Hidden mdUp>
            <IconButton onClick={() => {setDrawer(true)}}>
              <MenuIcon color="primary"/>
            </IconButton>
      </Hidden>
      <Grid container justify="center" alignItems="flex-start">
        <Grid item>
          <Hidden smDown>
            <Drawer
              variant="permanent">
                <Toolbar/>
                <List>
                  <ListItem>
                    <ListItemText className={classes.navtext} primary={<>Wow</>}/>
                  </ListItem>
                </List>
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