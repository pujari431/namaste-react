import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//React Element is object initially but when we render this to DOM this is become HTML element.

// Here we are making a style component that can be used as inline CSS.

// This data I have got from Swiggy API

// This is our Main App Layout Component
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
