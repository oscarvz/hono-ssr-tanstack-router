import { useState } from "react";

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
