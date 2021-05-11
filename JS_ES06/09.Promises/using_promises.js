const amISexy = new Promise((resolve, reject) => {
    // resolve("Yes you are!");
    setTimeout(resolve, 3000, "Yes you are");
});

// then
// resolve에서 받은 값이 value로 온다.
// (Yes you are)
amISexy.then(value => console.log(value));
const thenFn = value => console.log(value);


// catch
// if error occur
const amISexy = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "You are ugly");
});

// then이 실행되면 catch는 실행되지 않고,
// catch가 실행되면 then은 실행되지 않는다.
amISexy
    .then(result => console.log(result))
    .catch(error => console.log(error));
