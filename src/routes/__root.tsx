import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Document } from "../document";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
