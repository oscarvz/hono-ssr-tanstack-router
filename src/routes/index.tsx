import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Home {count}
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
