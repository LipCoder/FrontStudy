// map
// set과 비슷하지만, 중복 value를 허용하며 key값이 존재한다.

const map = new Map();

map.set("age", 18);
map.entries();
map.has("age");
map.get("age");


// weakmap 또한 weakset처럼 참조하지 않는다면 Garbage Collector에서 가져갈 것이다.