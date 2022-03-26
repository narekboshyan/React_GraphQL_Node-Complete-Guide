import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/index.js";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening on PORT 4000");
});
