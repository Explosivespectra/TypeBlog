import { useQuery } from "@apollo/client";
import {
  ALL_PRODUCTS_QUERY,
  PRODUCTS_BY_REGION_QUERY,
  RESTAURANT_AND_PRODUCTS_QUERY,
} from "../../../queries.js";
import { useLocation } from "react-router-dom";
import { MenuCard, MenuCardProps } from "./MenuCard";
import RestaurantBanner from "./RestaurantBanner";
import { Typography, Grid, CircularProgress } from "@material-ui/core";

const generateQueryParameters = (nav: string[]) => {
  switch (nav.length) {
    case 2:
      return { query: ALL_PRODUCTS_QUERY, variables: {} };
    case 3:
      return {
        query: PRODUCTS_BY_REGION_QUERY,
        variables: { region: nav[2] },
      };
  }
  return {
    query: RESTAURANT_AND_PRODUCTS_QUERY,
    variables: { id: parseInt(nav[3]) },
  };
};

const MenuContent: React.FC = () => {
  const location = useLocation();
  const pathVals = location.pathname.split(`/`);
  const queryParameters = generateQueryParameters(pathVals);
  const { loading, error, data } = useQuery(queryParameters.query, {
    variables: queryParameters.variables,
  });

  if (error) return <Typography variant="subtitle1">Error</Typography>;
  if (loading) return <CircularProgress />;
  const products =
    pathVals.length === 2
      ? data.products
      : pathVals.length === 3
      ? data.productsByRegion
      : data.restaurant.products;
  const bannerInfo = {
    region: pathVals.length <= 2 ? "All Foods" : pathVals[2],
    restaurant:
      pathVals.length <= 3
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
