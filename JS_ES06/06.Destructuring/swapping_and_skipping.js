// 1. variable swapping
let mon = "Sat";
let sat = "Mon";

// array destructuring을 사용
[sat, mon] = [mon, sat];


// 2. skipping
const days = ["Mon", "Tue", "Web", "Thu", "Fri"];

// 월화수를 스킵하고 목금만 가져온다.
const [,,,thu, fri] = days;

console.log(thu, fri);