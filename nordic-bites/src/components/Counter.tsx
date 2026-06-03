import { useEffect, useState } from "react";

type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
};

function Counter({
  end,
  suffix = "",
  duration = 1200,
  decimals = 0,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    function animateCounter(timestamp: number) {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = progress * end;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    }

    requestAnimationFrame(animateCounter);
  }, [end, duration]);

  return (
    <>
      {count.toFixed(decimals)}
      {suffix}
    </>
  );
}

export default Counter;
