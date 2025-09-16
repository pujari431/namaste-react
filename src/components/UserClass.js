import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // Here props is object
    console.log(props);
    // this is how we declare state variable in class based components
    this.state = {
      count: 0,
    };
    //console.log(this.props.name + "Cons is Rendered");
  }
  componentDidMount() {
    //console.log(this.props.name + "Child did mount");
  }

  render() {
    // Here we can destructure the props
    const { name, location } = this.props;
    const { count } = this.state;
    console.log(this.props.name + "Render is rendered");
    return (
      <div>
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <h4>Name : {name}</h4>
        <h4>Place : {location}</h4>
        <h4>Contact: +91 9440732720</h4>
      </div>
    );
  }
}

export default UserClass;
