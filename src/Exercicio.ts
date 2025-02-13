import { useState, useEffect } from "react";

const Timer = () => {
  const[timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <p>Timer: {timer}</p>
    </div>
  );
}

export default Timer;