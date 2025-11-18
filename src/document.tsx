import type { PropsWithChildren } from "react";
import { Script, ViteClient } from "vite-ssr-components/react";

export function Document({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <ViteClient />
        <Script src="/src/client.tsx" />
      </head>
      <body>{children}</body>
    </html>
  );
}
