// spread => 뭔가를 풀어 해지는 기능
// 앞에 ...을 붙여서 사용한다.

// Array
const friend = [1, 2, 3, 4];
const family = ["a", "b", "c"];

console.log(friend);
console.log(...friend);

console.log([...friend, ...family]);

// Object
const sexy = {
    name: "nico",
    age: 24
};

const hello = {
    sexy: true,
    hello: "hello"
};

console.log({...sexy, ...hello})