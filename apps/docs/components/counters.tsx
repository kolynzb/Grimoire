// Example from https://beta.reactjs.org/learn

import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="rounded-md px-2 py-6   border-2  mt-9 border-white "
      >
        Clicked {count} times
      </button>
    </div>
  );
}

export default function MyApp() {
  return <MyButton />;
}
