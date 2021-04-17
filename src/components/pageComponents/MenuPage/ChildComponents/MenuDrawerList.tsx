import { useQuery } from "@apollo/client";
import { REGIONS_QUERY } from "../../../queries.js";

import {
  Typography,
  CircularProgress,
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

type DrawerListProps = {
  chosenCategory: number;
  sendChosen: CallableFunction;
};

const MenuDrawerList: React.FC<DrawerListProps> = ({
  chosenCategory,
  sendChosen,
}) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(REGIONS_QUERY);

  if (error)
    return (
      <Typography variant="subtitle1" className={classes.navcontent}>
        Error
      </Typography>
    );
  if (loading) return <CircularProgress />;

  const regions = data.regions;

  return (
    <List>
      {regions.map((name: string, ind: number) => {
        return (
          <ListItem
            key={name}
            button
            onClick={() => {
              sendChosen(ind, name);
            }}
          >
            <ListItemIcon classes={{ root: classes.navcontent }}>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle1" className={classes.navcontent}>
                  {name}
                </Typography>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export { MenuDrawerList };
