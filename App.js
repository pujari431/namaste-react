import React from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", { id: "child1" }, [
  React.createElement(
    "h1",
    { id: "heading1" }, // First h1
    "This is heading 1 from Child1"
  ),
  React.createElement(
    "h1",
    { id: "heading2" }, // Second h1
    "This is heading 2 from Child2"
  ),
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

// Now parent and child1 divs has been created with message from child1.

// const heading = React.createElement("h1",{id:"heading"},"Hello World from React!") // Finally it is an object.
// console.log(heading) //  This returns a object not an h1 tag
// // creating a root to render the elements.
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
