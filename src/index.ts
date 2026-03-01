import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema.js";

const yoga = createYoga({ schema, graphiql: true });

const app = new Hono();

app.use("/graphql", cors());

app.on(["GET", "POST"], "/graphql", async (c) => {
  const response = await yoga.handle(c.req.raw);
  return response;
});

app.get("/", (c) => {
  return c.json({ status: "ok", graphql: "/graphql" });
});

const port = Number(process.env.PORT) || 4000;

serve({ fetch: app.fetch, port }, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`GraphiQL at http://localhost:${port}/graphql`);
});
