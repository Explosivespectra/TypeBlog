const { ExploreOffRounded } = require("@material-ui/icons");

module.exports = (app) => {
  const sql = require("./db.js");
  const { buildSchema } = require("graphql");
  const { graphqlHTTP } = require("express-graphql");

  const schema = buildSchema(`

    type Product {
    id: Int!
    name: String!
    description: String!
    cost: Float!
    rarity: Int!
    restaurantId: Int
    region: String
    imgFileName: String!
    }

    type Restaurant {
    id: Int!
    name: String!
    description: String!
    region: String!
    products: [Product]!
    }

    type Query {
      products: [Product]!
      product(name: String!): Product!
      regions: [String]!
      restaurantsByRegion(region: String): [Restaurant]!
      productsByRegion(region: String): [Product]!
      restaurant(name: String!): Restaurant!
    }
    `);

  const root = {
    products: async () => {
      await sql.query("SELECT * FROM products", (err, res) => {
        console.log({ ...res[0] });
        if (err) {
          return [];
        }
        return res.map((product) => {
          return { ...product };
        });
      });
    },
    productsByRegion: async ({ region }) => {
      await sql.query(
        `SELECT * FROM products WHERE region = ${region}`,
        (err, res) => {
          if (err) {
            return {};
          }
          return res;
        }
      );
    },
    product: async ({ name }) => {
      await sql.query(
        `SELECT * FROM products WHERE name = ${name}`,
        (err, res) => {
          if (err) {
            return {};
          }
          return res[0];
        }
      );
    },
    regions: () => {
      return ["Mondstadt", "Liyue"];
    },
    restaurant: async ({ name }) => {
      let ret = {};
      let retID = -1;
      await sql.query(
        `SELECT * FROM restaurants WHERE name = ${name}`,
        (err, res) => {
          if (err) {
            return {};
          }
          ret = res[0];
          retID = res[0].id;
        }
      );
      await sql.query(
        `SELECT * FROM products WHERE restaurantId = ${retID}`,
        (err, res) => {
          if (err) {
            return {};
          }
          ret.products = res;
        }
      );
      return ret;
    },
    restaurantsByRegion: async ({ region }) => {
      await sql.query(
        `SELECT name FROM restaurants WHERE region = ${region}`,
        (err, res) => {
          if (err) {
            return [];
          }
          console.log(res);
          for (let i = 0; i < res.length; ++i) {
            res[i] = root.restaurant(res[i].name);
          }
          return res;
        }
      );
    },
  };

  app.use(
    "/getProducts",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    })
  );
};
