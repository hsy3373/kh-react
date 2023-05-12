import { Component } from "react";

/*
    Fetch?
    자바스크립트 내장함수로 비동기 통신을 구현할때 사용함
    * 비동기통신 -> 먼저 시작한 작업의 완료여부와 상관없이 다음작업을 실행하는것

    fetch함수를 이용하여 get/post방식으로 url호출하여 데이터를 가져옴

    -> 이걸 많이 사용하게 되진 않을것임

*/

class FetchGet extends Component {
  componentDidMount = async () => {
    const response = await fetch("http://date.jsontest.com?a=1");
    /*
      async ~ await : 비동기 함수를 동기적으로 처리해야할때 함수선언 위치에 async,
                      동기적으로 처리할 코드에 await을 붙이면 된다
    */

    // Get방식 요청은 별도의 메소드 사용하지 않고, url뒤에 내가 전달하고자 하는 값을 붙여서 전송함
    /*
      async ~ await 을 붙인 이유?
      fetch함수 같은 경우 비동기적으로 작동하기 때문에 url을 호출하고 데이터를 가져오기 전에 아래코드
      response.json()메서드가 실행되는 경우 에러가 발생할수 있다
      따라서 데이터를 전부 다 가져온 후에 아래 json()메서드가 호출되도록 동기적 흐름을 만들었다

      처리가 다 끝나기 전에는 Promise 객체가 들어가 있음 -> 그래서 null도 아닌 상태로 있게됨
      -> Promise : 미래의 어떤 시점에 결과를 제공하겠다는 '약속'(프로미스)
                  - 대기(pending): 이행하지도, 거부하지도 않은 초기 상태.
                  - 이행(fulfilled): 연산이 성공적으로 완료됨.
                  - 거부(rejected): 연산이 실패함.
      */
    const body = await response.json();
    // console.log(body);
    alert(body.date);
  };

  render() {
    return <h1>fetch get</h1>;
  }
}

class FetchPost extends Component {
  componentDidMount = async () => {
    /* fetch의 첫번째 파라미터에 url정보, 두번째 파라미터에 post요청시 필요한 정보를 추가 */

    const response = await fetch("http://date.jsontest.com", {
      method: "POST",
      header: {
        "Content-type": "application/json",
        // body안의 값이 json형태이다 라고 선언한것임
        // json형태의 데이터를 사용하기 위한 설정(form 태그 안의 enc-type과 같은 속성)
      },
      body: {
        // json형태의 데이터 선언
        a: "test",
        b: "test2",
        // 전달할 데이터를 body영역 안에 담아서 전달
      },
    });

    const body = await response.json();
    alert(body.time);
  };

  render() {
    return <h1>fetch Post</h1>;
  }
}

export { FetchGet, FetchPost };
