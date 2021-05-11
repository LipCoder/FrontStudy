// rest parameter
// rest => 모든 값을 하나의 변수로 축소(contract) 시켜주는 것!
//         rest는 array를 만든다.
// 끝도 없는 parameter를 전달받는 함수에 쓰일 수 있음

const infiniteArgs = (...kimchi) => console.log(kimchi);

infiniteArgs("1", 2, true, "lalala", [1, 2, 3, 4]);


// #
const bestFriendMaker = (firstOne, ...rest) => {
    console.log(`My best friend is ${firstOne}`);
    console.log(rest);
};

bestFriendMaker("nico", "lynn", "dall", "japan guy");
