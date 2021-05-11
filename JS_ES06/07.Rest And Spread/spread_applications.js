// 1. 합치기

// array
const friends = ["nico", "lynn"];
const newFriends = [...friends, "dal"];
console.log(newFriends);

// object
const nico = {
    username: "nico"
};

// sread
console.log({...nico, password: 1234});

// #
const first = ["mon", "tue", "wed"];
const weekend = ["sat", "sun"];
const fullWeek = [...first, "thu", "fri", ...weekend];

console.log(fullWeek);

// #
const lastName = prompt("Last name");

const user = {
    username: "nico",
    age: 24,
    lastName: lastName !== "" ? lastName : undefined
};

console.log(user);
// => 이렇게 말고, lastName이 아예 없으면, 그냥 lastName 자체를 없애고 싶다.
//    그런 경우 쓸 수 있는것이 바로 spread

const user = {
    username: "nico",
    age: 24,
    ...(lastName !== "" && {lastName}/*shorthand property*/)
    // spread를 쓰려면 object여야 하므로 중괄호로 묶어줘야 함
};

