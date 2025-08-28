import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

// First Header component we are designing
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn((prev) => !prev);
  };
  // Here useEffect is rendered for every time header component is rendered.
  // To handle that useEffect we need to use dependency array
  useEffect(() => {
    console.log("Component Rendered");
  }, []);

  // Here also we are console logging to check which will render first
  console.log("Header Rendered");

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="This is company's logo" />
      </div>
      <div className="nav-items">
        <ul className="menu-bar">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button className="login-button" onClick={handleLogin}>
              {loggedIn ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
