import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// Making this component a class
class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("About Cons");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        avatar: "https://avatars.githubusercontent.com/u/141556294?v=4",
      },
    };
  }
  // We know that API can be called inside this method only
  async componentDidMount() {
    //console.log("Component Did Mount");
    const data = await fetch("https://api.github.com/users/pujari431");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("Component Updated");
  }
  // This will happen only when UI is not present.
  componentWillUnmount() {
    console.log("Component Unmounted");
  }
  render() {
    console.log("About Cons Render");

    return (
      <div>
        <h1>This is about us page</h1>
        <img src={this.state.userInfo.avatar_url} />
        <UserClass
          name={this.state.userInfo.login}
          location={"Bangalore(class)"}
        />
      </div>
    );
  }
}
export default About;
