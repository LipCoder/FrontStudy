const p1 = new Promise((resolve) => {
    setTimeout(resolve, 5000, "First");
});

const p2 = new Promise(resolve => {
    setTimeout(resolve, 1000, "Second");
});

const p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "Third");
});

// promise all은 promise들을 리턴값으로 준다.
// 모든 promise가 전부 resolve 되고 나면 
// 마지막 promise를 리턴값으로 준다.
const motherPromise = Promise.all([p1, p2, p3]);
motherPromise.then(values => console.log(values));


// 만약 promise중 하나라도 reject 되었다면
// promise.all도 reject 된다.
const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Second");
});

const motherPromise = Promise.all([p1, p2, p3]);
motherPromise
    .then(values => console.log(values))
    .catch(err => console.log(err));
