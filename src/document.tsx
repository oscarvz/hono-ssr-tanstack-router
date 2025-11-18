import type { PropsWithChildren } from "react";
import { Link, Script, ViteClient } from "vite-ssr-components/react";

export function Document({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <Link rel="stylesheet" href="/src/style.css" />
      </head>
      <body>
        {children}
        <ViteClient />
        <Script src="/src/client.tsx" />
      </body>
    </html>
  );
}
