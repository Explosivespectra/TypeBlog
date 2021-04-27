import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import { RESTAURANTS_FOR_REGION_QUERY } from "../../../queries.js";
import { checkLocation } from "../../../HelperFunctions";

import {
  Typography,
  CircularProgress,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navcontent: {
      color: "#ddbb61",
      fontFamily: "Genshin",
      fontSize: "1.25rem",
    },
  })
);

export interface MenuDrawerSubListProps {
  region: string;
}

const MenuDrawerSubList: React.FC<MenuDrawerSubListProps> = ({ region }) => {
  const location = useLocation();

  const pathVals = location.pathname.split(`/`);

  const { loading, error, data } = useQuery(RESTAURANTS_FOR_REGION_QUERY, {
    variables: { region: region },
  });

  const classes = useStyles();

  if (error) return <Typography variant="subtitle1">Error</Typography>;
  if (loading) return <CircularProgress />;

  const restaurants = data.restaurantsByRegion;
  return (
    <>
      {restaurants.map((restaurant: { name: string; id: number }) => {
        return (
          <ListItem
            key={restaurant.name}
            component={Link}
            to={`/menu/${region}/${restaurant.id}`}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              checkLocation(event, pathVals, `${restaurant.id}`, 3);
            }}
          >
            <ListItemIcon classes={{ root: classes.navcontent }}>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography className={classes.navcontent}>
                  {restaurant.name}
                </Typography>
              }
            />
          </ListItem>
        );
      })}
      ;
    </>
  );
};

export { MenuDrawerSubList };
