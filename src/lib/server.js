const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

require("./models/graphql.js")(app);

app.listen(3008, () => {
  console.log("Connection established");
  console.log(process.env.PORT);
});
