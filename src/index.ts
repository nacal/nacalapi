import { createYoga } from "graphql-yoga"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { graphiqlHtml } from "./graphiql.js"
import { schema } from "./schema.js"

const yoga = createYoga({
  schema,
  graphiql: false
})

const app = new Hono()

app.use("/graphql", cors())

app.get("/graphql", c => {
  return c.html(graphiqlHtml)
})

app.post("/graphql", async c => {
  const response = await yoga.handle(c.req.raw)
  return response
})

app.get("/", c => {
  return c.redirect("/graphql")
})

export default app
