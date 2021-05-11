// JS의 비동기성과 동기성
// JS는 일을 동시에 처리할 수 있다.

// JS의 비동기성 예
const hello = fetch("http://google.com");
// 원래는 여기서 오류가 나고
// log가 출력되어야 하지만
// 먼저 log가 출력되고 오류 메시지가 나온다.
// 이것이 JS의 비동기성으로 프로그램의 실행을 멈추지 않는다.

// fetch중에 somthig을 출력하는 명령어가 실행되었고,
// 그 이후 fetch가 끝나 에러메시지를 내뱉음

console.log("something");
console.log(hello);