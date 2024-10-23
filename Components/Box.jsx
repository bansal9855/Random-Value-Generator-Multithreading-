import React, { useState, useEffect } from 'react';

function Box({ value, lb, ub, refreshTime, bgColor }) {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = Math.floor(Math.random() * (ub - lb + 1)) + lb;
      setCurrentValue(newValue);
    }, refreshTime * 1000); 

    return () => clearInterval(interval);
  }, [lb, ub, refreshTime]);

  return (
    <div className={`w-72 h-48 flex flex-col items-center justify-center rounded shadow ${bgColor}`}>
      <p className="text-2xl font-bold">{currentValue}</p>
      <p className="text-sm">LB: {lb}</p>
      <p className="text-sm">UB: {ub}</p>
      <p className="text-sm">Refresh Time: {refreshTime} sec</p>
    </div>
  );
}

export default Box;
