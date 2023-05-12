import { Component } from "react";

import axios from "axios";
/*
    npm install --save axios
*/

class AxiosGet extends Component {
  componentDidMount() {
    axios.get("http://date.jsontest.com/").then((response) => {
      alert("axios Get " + response.data.date);
    });

    /*
      get() : get방식으로 http호출 url호출이 완료되면 then()함수가 실행됨
      then() : 호출결과로 response 데이터가 반환되며 response와 변수명 사이에 data를 붙이면 변수사용 가능
    */
  }

  render() {
    return <h1>Axios Get</h1>;
  }
}

class AxiosPost extends Component {
  componentDidMount() {
    console.log(this);
    axios
      .post("http://date.jsontest.com/", {
        a: 1,
        b: 2,
      })
      .then((response) => {
        alert("axios Post " + response.data.date);
      });
  }
  /*
    post("호출url", json데이터) : get()과 사용방법이 거의 비슷하며 json데이터는 body영역에 담겨서 전송된다
  */

  render() {
    return <h1>Axios Post</h1>;
  }
}

export { AxiosGet, AxiosPost };
