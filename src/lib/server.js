const express = require("express");

const app = express();

require("./models/graphql.js")(app);

app.listen(3008, () => {
  console.log("Connection established");
  console.log(process.env.PORT);
});
