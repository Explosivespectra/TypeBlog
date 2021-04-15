import gql from "graphql-tag";

const ALL_PRODUCTS_QUERY = gql`
  {
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
    name
    rarity
    imgFileName
    id
  }
`;

const RESTAURANTS_FOR_REGION_QUERY = gql`
  query restaurantsByRegion($region: String!) {
    name
    id
  }
`;

const RESTAURANT_AND_PRODUCTS_QUERY = gql`
  query restaurant($id: Int!) {
    name
    description
    products {
      name
      rarity
      imgFileName
      id
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
    id
    name
    description
    cost
    rarity
    imgFileName
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
