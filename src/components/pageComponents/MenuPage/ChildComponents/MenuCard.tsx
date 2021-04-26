import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { addToCart } from "../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      fontSize: "calc(.55rem + .45vw)",
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

export interface MenuCardProps {
  name: string;
  rarity: number;
  imgFileName: string;
  id: number;
}

const MenuCard: React.FC<MenuCardProps> = ({
  name,
  rarity,
  imgFileName,
  id,
}) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <Card className={classes.menuCard}>
      <CardActionArea
        onClick={() => {
          dispatch(addToCart({ name: name, id: id }));
        }}
      >
        <CardMedia className={classes.cardmediaback}>
          <img
            src={`${process.env.PUBLIC_URL}/foodAssets/${imgFileName}`}
            className={classes.cardmediasrc}
          ></img>
        </CardMedia>
        <CardContent className={classes.cardcontent}>
          <Typography variant="subtitle1" className={classes.cardtext}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { MenuCard };
