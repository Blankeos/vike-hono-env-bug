import { Hono } from "hono";

const app = new Hono();

export const appRouter = app
  .get("/", (c) => {
    return c.json({ status: "Alive" });
  })
  .get("/test", (c) => {
    return c.json({ test: true });
  });
