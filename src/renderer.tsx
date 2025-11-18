import { reactRenderer } from "@hono/react-renderer";
import { Document } from "./document";

export const renderer = reactRenderer(Document);
