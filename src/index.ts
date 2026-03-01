import { Hono } from "hono";
import { cors } from "hono/cors";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema.js";
import { graphiqlHtml } from "./graphiql.js";
import type { GraphQLContext } from "./types.js";

type Bindings = {
  API_KEYS: string;
};

const yoga = createYoga({
  schema,
  graphiql: false,
  context: ({ request, apiKeys }: { request: Request; apiKeys: Set<string> }) => {
    const auth = request.headers.get("authorization");
    const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
    return { authenticated: token !== null && apiKeys.has(token) } satisfies GraphQLContext;
  },
});

const app = new Hono<{ Bindings: Bindings }>();

app.use("/graphql", cors());

app.get("/graphql", (c) => {
  return c.html(graphiqlHtml);
});

app.post("/graphql", async (c) => {
  const apiKeys = new Set(
    (c.env.API_KEYS ?? "").split(",").filter(Boolean)
  );
  const response = await yoga.handle(c.req.raw, { apiKeys });
  return response;
});

app.get("/", (c) => {
  return c.json({ status: "ok", graphql: "/graphql" });
});

export default app;
