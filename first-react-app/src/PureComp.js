import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  render() {
    console.log("-----------purecom--rend----");
    return <div>PureComp -- {this.props.name}</div>;
  }
}
