import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import { REGIONS_QUERY } from "../../../queries.js";
import { MenuDrawerSubList } from "./MenuDrawerSubList";

import {
  Typography,
  CircularProgress,
  Collapse,
  List,
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
      fontSize: "1.5rem",
    },
  })
);

const MenuDrawerList: React.FC = ({}) => {
  const classes = useStyles();

  const location = useLocation();

  const pathVals = location.pathname.split(`/`);

  const { loading, error, data } = useQuery(REGIONS_QUERY);

  if (error)
    return (
      <Typography variant="subtitle1" className={classes.navcontent}>
        Error
      </Typography>
    );
  if (loading) return <CircularProgress />;

  const regions = ["All Foods"].concat(data.regions);
  return (
    <List>
      {regions.map((name: string) => {
        return (
          <>
            <ListItem
              key={name}
              component={Link}
              to={`/menu${name === "All Foods" ? "" : `/${name}`}`}
            >
              <ListItemIcon classes={{ root: classes.navcontent }}>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography className={classes.navcontent}>{name}</Typography>
                }
              />
            </ListItem>
            {name !== "All Foods" && (
              <Collapse in={pathVals.length > 2 && pathVals[2] === name}>
                <MenuDrawerSubList region={name} />
              </Collapse>
            )}
          </>
        );
      })}
    </List>
  );
};

export { MenuDrawerList };
