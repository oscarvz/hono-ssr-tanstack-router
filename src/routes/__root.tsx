import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
  scripts: () => [
    {
      src: "/src/client.tsx",
      type: "module",
    },
  ],
  head: () => ({
    links: [{ rel: "stylesheet", href: "/src/style.css" }],
  }),
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
