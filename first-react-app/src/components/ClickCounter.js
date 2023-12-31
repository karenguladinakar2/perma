import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>clicked {count} times</button>
      </div>
    );
  }
}

export default withCounter`(ClickCounter);
