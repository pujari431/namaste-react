import logo from "../../assets/logo.png";

// First Header component we are designing
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="This is company's logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
