import { gql } from "@apollo/client";

const ALL_PRODUCTS_QUERY = gql`
  query products {
    products {
      name
      rarity
      imgFileName
      id
    }
  }
`;

const PRODUCTS_BY_REGION_QUERY = gql`
  query productsByRegion($region: String!) {
    productsByRegion(region: $region) {
      name
      rarity
      imgFileName
      id
    }
  }
`;

const RESTAURANTS_FOR_REGION_QUERY = gql`
  query restaurantsByRegion($region: String!) {
    restaurantsByRegion(region: $region) {
      name
      id
    }
  }
`;

const RESTAURANT_AND_PRODUCTS_QUERY = gql`
  query restaurantAndProductsQuery($id: Int!) {
    restaurant(id: $id) {
      name
      description
      products {
        name
        rarity
        imgFileName
        id
      }
    }
  }
`;

const REGIONS_QUERY = gql`
  {
    regions
  }
`;

const PRODUCT_DETAIL_QUERY = gql`
  query product($id: Int!) {
    product(id: $id) {
      id
      name
      description
      cost
      rarity
      imgFileName
    }
  }
`;
export {
  ALL_PRODUCTS_QUERY,
  PRODUCTS_BY_REGION_QUERY,
  RESTAURANTS_FOR_REGION_QUERY,
  RESTAURANT_AND_PRODUCTS_QUERY,
  REGIONS_QUERY,
  PRODUCT_DETAIL_QUERY,
};
