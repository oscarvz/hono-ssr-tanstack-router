import { Hono } from "hono";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { renderer } from "./renderer";
import { routeTree } from "./routeTree.gen";

const app = new Hono();

app.use(renderer);

// Create router for SSR
const router = createRouter({ routeTree });

app.get("*", (c) => c.render(<RouterProvider router={router} />));

export default app;
