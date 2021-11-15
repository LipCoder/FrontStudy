
// * var 사용
//var myName;  <== hoisting의 결과물(눈에 보이지는 않음) 
console.log(myName);  // 이론상 존재하지 않는 걸 출력 
var myName = "nico";


// * let 사용
// X  <== let은 hoisting 하지 않음
console.log(myName);  // 에러
let myName = "nico";