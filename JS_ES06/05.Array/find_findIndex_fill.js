const friends = [
    "nico@gmail.com",
    "lynn@naver.com",
    "dal@yahoo.com",
    "mark@hotmail.com",
    "flynn@korea.com"
];


// find 
const target = friends.find(friends => friends.includes("@korea.com"));
console.log(target);

// findIndex
const target = friends.findIndex(friends => friends.includes("@korea.com"));
console.log(target);

const check = () => friends.findIndex(friends => friends.includes("@korea.com"));
let target = check();
console.log(target);

// fill
// 1 위치를 "*****"로 채우겠다.
friends.fill("*".repeat("5"), 1);

// 1에서 3전까지 "*****"로 채우겠다.
friends.fill("*".repeat("5"), 1, 3);

// 모든 위치를 "*****"로 채우겠다.
friends.fill("*".repeat("5"));


// includes
const result = friends.includes("nico@gmail.com");
console.log(result);