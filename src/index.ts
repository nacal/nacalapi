import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema.js";
import { graphiqlHtml } from "./graphiql.js";
import type { GraphQLContext } from "./types.js";

const apiKeys = new Set(
  (process.env.API_KEYS ?? "").split(",").filter(Boolean)
);

const yoga = createYoga<{ request: Request }, GraphQLContext>({
  schema,
  graphiql: false,
  context: ({ request }) => {
    const auth = request.headers.get("authorization");
    const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
    return { authenticated: token !== null && apiKeys.has(token) };
  },
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

const port = Number(process.env.PORT) || 4000;

serve({ fetch: app.fetch, port }, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`GraphiQL at http://localhost:${port}/graphql`);
});
