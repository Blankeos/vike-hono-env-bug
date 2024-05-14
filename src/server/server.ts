// How to serve Vike (SSR middleware) via a Hono server.
// https://github.com/phonzammi/vike-hono-example/blob/main/server/index.ts

import { config } from "@/config";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { renderPage } from "vike/server";
import { appRouter } from "./_app";

const app = new Hono();

// For the Backend APIs
app.route("/api", appRouter); // Not done for this example :)

// For static files in production
if (config.NODE_ENV === "production") {
  app.use(
    "/*",
    serveStatic({
      root: `./dist/client/`,
    })
  );
}

// For the Frontend + SSR
app.get("*", async (c, next) => {
  const pageContextInit = {
    urlOriginal: c.req.url,
    request: c.req,
    response: c.res,
  };
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;
  if (!httpResponse) {
    return next();
  } else {
    const { body, statusCode, headers } = httpResponse;
    headers.forEach(([name, value]) => c.header(name, value));
    c.status(statusCode);

    return c.body(body);
  }
});

app.onError((_, c) => {
  console.log(c.error);

  return c.text("", 500);
});

console.log("Running at http://localhost:" + config.PORT);

export default {
  port: config.PORT,
  fetch: app.fetch,
};