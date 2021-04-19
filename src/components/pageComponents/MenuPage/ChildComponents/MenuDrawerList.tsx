import { useState } from "react";
import { useQuery } from "@apollo/client";
import { REGIONS_QUERY } from "../../../queries.js";
import { MenuDrawerSubList, MenuDrawerSubListProps } from "./MenuDrawerSubList";

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

export interface DrawerListProps {
  chosenCategory: number;
  sendChosenRegion: CallableFunction;
  sendChosenRest: CallableFunction;
}

const MenuDrawerList: React.FC<DrawerListProps> = ({
  chosenCategory,
  sendChosenRegion,
  sendChosenRest,
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

  const regions = ["All Foods"].concat(data.regions);
  return (
    <List>
      {regions.map((name: string, ind: number) => {
        return (
          <>
            <ListItem
              key={name}
              button
              onClick={() => {
                sendChosenRegion(ind, name);
              }}
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
              <Collapse in={chosenCategory === ind}>
                <MenuDrawerSubList
                  region={name}
                  sendChosenRest={(id: number) => {
                    sendChosenRest(id);
                  }}
                />
              </Collapse>
            )}
          </>
        );
      })}
    </List>
  );
};

export { MenuDrawerList };
