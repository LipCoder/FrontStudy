// Symbols
// Description을 넣을 수 있음
// 같은 Description을 가지고 있어도 서로 같지 않음
const hello = Symbol("hello");
const bye = Symbol("hello");


// Symbol은 어떻게 보면 라이브러리 제작자들을 위해 있는것이라고 할 수 있다.
const superBig = {
    [Symbol("nico")]: {
        age: 12
    },
    [Symbol("nico")]: {
        age: 12
    },
    hello: "bye"
};

