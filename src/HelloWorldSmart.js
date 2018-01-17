import React, { Component } from "react";
import update from "immutability-helper";

class HelloWorld extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "Arun",
      lastName: "Sood"
    }
  }

  componentDidMount() {
    // alert("Component mounted!");
  }

  handleClick() {
    // alert("Clicked!");
    this.setState({
      greeting: "Goodbye Arun!"
    });
  }

  handleChange(event) {
    // this.setState({
    //   greeting: `Hello ${event.target.value}!`
    // });
    this.setState(update(this.state, {
      $merge: {
        [event.target.name]: event.target.value
      }
    }));
  }

  render() {
    return (
      <div>
        <div>Hello {this.state.firstName} {this.state.lastName}!</div>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>

        <form>
          <div>
            <input name="firstName" onChange={this.handleChange.bind(this)} type="text" placeholder="First Name" />
          </div>
          <div>
            <input name="lastName" onChange={this.handleChange.bind(this)} type="text" placeholder="Last Name" />
          </div>
        </form>
      </div>
    );
  }
}

export default HelloWorld;
