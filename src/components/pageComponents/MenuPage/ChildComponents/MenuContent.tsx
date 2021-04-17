import { useQuery } from "@apollo/client";
import {
  ALL_PRODUCTS_QUERY,
  PRODUCTS_BY_REGION_QUERY,
  RESTAURANTS_FOR_REGION_QUERY,
  RESTAURANT_AND_PRODUCTS_QUERY,
  REGIONS_QUERY,
  PRODUCT_DETAIL_QUERY,
} from "../../../queries.js";

import { MenuCard } from "./MenuCard";
import { Typography, Grid, CircularProgress } from "@material-ui/core";

type MenuCardProps = {
  name: string;
  rarity: number;
  imgFileName: string;
  id: number;
};

const MenuContent: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY);

  if (error) return <Typography variant="subtitle1">Error</Typography>;
  if (loading) return <CircularProgress />;

  const products = data.products;

  return (
    <Grid item container spacing={2} xs={12}>
      {products.map((product: MenuCardProps) => {
        return (
          <Grid item xs={6} md={4} lg={3}>
            <MenuCard {...product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export { MenuContent };
