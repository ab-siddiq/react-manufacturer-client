import React, { useState } from "react";

const Home = () => {
  let i = 0;
  let j = 0;
  const [time, setTime] = useState({ i: 0, j: 0 });
  console.log(time.i);

  setInterval(() => {
    i = i + 1;
    j = j + 2;
    setTime({ ...time, i: i, j: j });
  }, 10);

  return <div>{time.i}</div>;
};

export default Home;
