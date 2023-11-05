const express = require("express");
require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const schema = require("./schema/schema");
//Graphql
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

const app = express();
//Connect to DB
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development" ? true : false,
  })
);

app.listen(port, console.log("Server running on PORT", port));
