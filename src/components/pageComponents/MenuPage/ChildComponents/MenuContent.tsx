import { useQuery } from "@apollo/client";
import {
  ALL_PRODUCTS_QUERY,
  PRODUCTS_BY_REGION_QUERY,
  RESTAURANT_AND_PRODUCTS_QUERY,
} from "../../../queries.js";

import { MenuCard, MenuCardProps } from "./MenuCard";
import RestaurantBanner from "./RestaurantBanner";
import { Typography, Grid, CircularProgress } from "@material-ui/core";
import { RegionRestParameters } from "../MenuPage";

const generateQueryParameters = (regionName: string, restID: number | null) => {
  if (regionName !== "All Foods") {
    if (restID !== null) {
      return {
        query: RESTAURANT_AND_PRODUCTS_QUERY,
        variables: { id: restID },
      };
    }
    return {
      query: PRODUCTS_BY_REGION_QUERY,
      variables: { region: regionName },
    };
  }
  return { query: ALL_PRODUCTS_QUERY, variables: {} };
};

const MenuContent: React.FC<RegionRestParameters> = ({ region, rest }) => {
  const queryParameters = generateQueryParameters(region, rest);
  const { loading, error, data } = useQuery(queryParameters.query, {
    variables: queryParameters.variables,
  });

  if (error) return <Typography variant="subtitle1">Error</Typography>;
  if (loading) return <CircularProgress />;
  const products =
    region === "All Foods"
      ? data.products
      : rest === null
      ? data.productsByRegion
      : data.restaurant.products;
  const bannerInfo = {
    region: region,
    restaurant:
      rest === null
        ? null
        : {
            name: data.restaurant.name,
            description: data.restaurant.description,
          },
  };
  return (
    <>
      <RestaurantBanner {...bannerInfo} />
      <Grid container justify="center">
        <Grid item container spacing={2} xs={12}>
          {products.map((product: MenuCardProps) => {
            return (
              <Grid item xs={6} sm={4} md={3} lg={2}>
                <MenuCard {...product} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export { MenuContent };
