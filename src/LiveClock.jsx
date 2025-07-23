import React, { useEffect, useState } from 'react'

const LiveClock = () => {

 const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // update every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Current Time:</h1>
      <h2>{time}</h2>
    </div>
  );
};

export default LiveClock
