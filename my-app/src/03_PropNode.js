import { Component } from "react";

class PropNode extends Component {
  render() {
    return (
      <div style={{ padding: "0px" }}>
        {console.log(this.props)}
        {this.props.children}
      </div>
    );
  }
}

export default PropNode;
