if(true) {
    const hello0 = "hi";
    let hello = "hi";
    var hello_var = "hi";
}
console.log(hello0);    // 밖에서 사용불가
console.log(hello);     // 밖에서 사용불가
console.log(hello_var);     // 사용가능!!
//#endregion

function a () {
    var hello = "hi";
    console.log(hello); // 안에서는 접근 가능
}
console.log(hello);  // 밖에서 접근 불가 
//#endregion

let hello;
if(true) {
    hello = "lalalala_hi";
}
console.log(hello);