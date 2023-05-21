import { Component } from "react";
/* axios 설치 npm install --save axios */
import axios from "axios";

class ReactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ports: [],
    };
  }

  componentDidMount() {
    axios.get("spring/test").then((response) => {
      this.setState({ ports: response.data });
      // alert(response.data + typeof response.data);
    });
  }

  render() {
    return (
      <h1>
        {this.state.ports[0]} ::: {this.state.ports[1]}
      </h1>
    );
  }
}

export default ReactComponent;
