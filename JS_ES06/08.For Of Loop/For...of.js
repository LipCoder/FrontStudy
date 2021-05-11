// 1. forEach 
const friends = ["Nico", "Lynn", "ha", "hu"];

// 기존 방법
for(let i = 0; i < friends.length; i++){
    console.log(`${friends[i]} love Kimchi`);
}

// 새로운 방법
// c(current item) : 인덱스에 있는 값
// i(current index) : 인덱스 위치
// a(current array) : 
const addHeard = (c, i, a) => console.log(c, i, a);  
friends.forEach(addHeart);


// #
friends.forEach(friend => console.log(friend));


// 2. for of
// forEach와 다르게 
// 1) const로 선언할지, let으로 선언할지 선택할 수 있다.
// 2) string, iterables, nodelist, array 등에 사용할 수 있다.
// 3) loop를 멈추는 것도 가능하다.
for (const friend of friends) {
    console.log(friend);
}

for (const item of "Hello this is Booooooooooem!") {
    console.log(item);
}

for (const friend of friends) {
    if(friend === "ha") {
        break;
    } else {
        console.log(friend);
    }
}