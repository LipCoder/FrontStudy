const amISexy = new Promise((resolve, reject) => {
    resolve(2);
});

// Chaining 
// then을 여러개 두어 연속으로 처리 할 수 있다.
amISexy.then(number => {
    console.log(2 * 2); // 2 * 2 = 4
    return number * 2;
})
.then(otherNumber => {
    console.log(otherNumber * 2); // 4 * 2 = 8
});


const timesTwo = (number) => number * 2;
// Arrow function을 사용하면 바로 리턴해 줄 수 있다.
amISexy
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(() => {
        throw Error("Something is wrong");
    })
    .then(lastNumber => console.log(lastNumber))
    .catch(error => console.log(error););
