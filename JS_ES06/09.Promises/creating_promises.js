// promise는 아직 모르는 value와 함께 작업할 수 있게 해준다.

const amISexy = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Yes you are");
});

// Promise에서 resolve(성공)나 reject(실패)가 리턴될때까지 기다린다.
// (pending)
console.log(amISexy);

setInterval(console.log, 1000, amISexy);