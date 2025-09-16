import { useEffect, useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);

  // Here we are using UseEffect for API Calls

  useEffect(() => {}, []);
  return (
    <div className="user-card">
      <h1>Count :{count}</h1>
      <h4>Name : Balaji Pujari</h4>
      <h4>Place : Bangalore</h4>
      <h4>Contact: +91 9440732720</h4>
    </div>
  );
};

export default User;
