import React, { useEffect, useState } from "react";

export const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const tick = () => {
    setCount(count + 1);
  };
  return <div>{count}</div>;
};
