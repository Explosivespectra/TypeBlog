import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart, selectCart } from "./cartSlice";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import Clear from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  listItem: {
    "&:hover + $closeIcon": {
      display: "block",
    },
  },
  closeIcon: {
    display: "none",
    "&:hover": {
      display: "block",
    },
  },
});

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectCart);
  const classes = useStyles();
  console.log(products);
  return (
    <List>
      {products.map((product: any, index: number) => {
        return (
          <ListItem className={classes.listItem} key={product.id}>
            {product.name}
            <ListItemSecondaryAction
              className={classes.closeIcon}
              onClick={() => {
                dispatch(removeFromCart(index));
              }}
            >
              <IconButton>
                <Clear />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export { Cart };
