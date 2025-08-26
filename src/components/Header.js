import { useState } from "react";
import logo from "../../assets/logo.png";

// First Header component we are designing
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn((prev) => !prev);
  };
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
