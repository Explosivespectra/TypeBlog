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
      product(id: Int!): Product!
      regions: [String]!
      restaurantsByRegion(region: String): [Restaurant]!
      productsByRegion(region: String): [Product]!
      restaurant(id: Int!): Restaurant!
    }
  `);

  const root = {
    products: async () => {
      return sql
        .promise()
        .query("SELECT * FROM products")
        .then(([products, fields]) => {
          products = products.map((product) => {
            return { ...product };
          });
          console.log(products);
          return products;
        });
    },
    productsByRegion: async ({ region }) => {
      return sql
        .promise()
        .query(`SELECT * FROM products WHERE region = ${region}`)
        .then(([products, fields]) => {
          products = products.map((product) => {
            return { ...product };
          });
          console.log(products);
          return products;
        });
    },
    product: async ({ id }) => {
      return sql
        .promise()
        .query(`SELECT * FROM products WHERE id = ${id}`)
        .then(([products, fields]) => {
          return { ...products[0] };
        });
    },
    regions: () => {
      return ["Mondstadt", "Liyue"];
    },
    restaurant: async ({ id }) => {
      console.log(id);
      let ret = {};
      let firstQuery = sql
        .promise()
        .query(`SELECT * FROM restaurants WHERE id = ${id}`);
      let secondQuery = sql
        .promise()
        .query(`SELECT * FROM products WHERE restaurantId = ${id}`);
      return Promise.all([firstQuery, secondQuery]).then((results) => {
        retDummy = results[0][0];
        console.log(retDummy);
        ret = { ...retDummy[0] };
        ret.products = results[1][0].map((product) => {
          return { ...product };
        });
        console.log(ret);
        return ret;
      });
    },
    restaurantsByRegion: async ({ region }) => {
      region = region.replace(/"/g, "'");
      let ret = [];
      return sql
        .promise()
        .execute("SELECT id FROM restaurants WHERE region = ?", [region])
        .then(async ([restaurantIds, fields]) => {
          ret = restaurantIds.map((restaurant) => {
            return { ...restaurant };
          });
          for (let i = 0; i < ret.length; ++i) {
            ret[i] = await root.restaurant({ id: ret[i].id });
          }
          return ret;
        });
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
