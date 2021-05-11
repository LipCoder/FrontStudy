const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Second");
});

const p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "Third");
});

// promise.all과 다르게 
// 어떤 것이라도 먼저 실행된 Promise 결과를 보여준다.
// 기다리지 않음..
// 여러개가 잘 되는지 확인하는게 보통이기 때문에
// race는 대체로 잘 사용하지 않는다.
const motherPromise = Promise.race([p1, p2, p3]);

motherPromise
    .then(values => console.log(values))
    .catch(err => console.log(err));
