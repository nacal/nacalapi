import { Hono } from "hono";
import { cors } from "hono/cors";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema.js";
import { graphiqlHtml } from "./graphiql.js";

const yoga = createYoga({
  schema,
  graphiql: false,
});

const app = new Hono();

app.use("/graphql", cors());

app.get("/graphql", (c) => {
  return c.html(graphiqlHtml);
});

app.post("/graphql", async (c) => {
  const response = await yoga.handle(c.req.raw);
  return response;
});

app.get("/", (c) => {
  return c.json({ status: "ok", graphql: "/graphql" });
});

export default app;
