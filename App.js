const parent = React.createElement(
  "div",
  { id: "parent" },[React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Hello From React!"),
    React.createElement(
      "h2",
      { id: "heading2" },
      "Hello From React- heading2!"
    ),
  ]),[React.createElement("div",{id:"child2"},[
    React.createElement("h1", { id: "heading" }, "Hello From React!"),
    React.createElement(
      "h2",
      { id: "heading2" },
      "Hello From React- heading2!"
    )

  ])]]
  
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);
// Now parent and child1 divs has been created with message from child1.

// const heading = React.createElement("h1",{id:"heading"},"Hello World from React!") // Finally it is an object.
// console.log(heading) //  This returns a object not an h1 tag
// // creating a root to render the elements.
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
