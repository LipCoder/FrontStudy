const days = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];

// 겁나 구린방법
const mon = days[0];
const tue = days[1];
const wed = days[2];

console.log(mon, tue, wed);


// array destructuring
const [mon, tue, wed, thu = "Thu"] = days;

console.log(mon, tue, wed, thu);


// with function
const days = () => ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];

const [mon, tue, wed, thu] = days();

console.log(mon, tue, wed, thu);

