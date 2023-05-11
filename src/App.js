import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
    </div>
  );
};

export default App;
