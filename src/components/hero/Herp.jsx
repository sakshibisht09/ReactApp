import { useEffect, useState } from "react";

function Hero() {
  const [count, setCount] = useState(0);

  // Mounting
  useEffect(() => {
    console.log("Hero Mounted");

    // Unmounting
    return () => {
      console.log("Hero Unmounted");
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);

  return (
    <div>
      <h1>Hero Component</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Hero;