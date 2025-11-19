import {
  createRequestHandler,
  defaultRenderHandler,
} from "@tanstack/react-router/ssr/server";
import { Hono } from "hono";
import { createRouter } from "./router";

const app = new Hono();

app.get("*", async (c) => {
  const handler = createRequestHandler({
    request: c.req.raw,
    createRouter,
  });

  return await handler(defaultRenderHandler);
});

export default app;
