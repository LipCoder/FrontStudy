// finally
// catch든 then이든 Promise 작업이 모두 끝난 후 
// 무조건 실행된다.

const p1 = new Promise((resolve, reject) => {
    setTimeout(reject, 10000, "First");
})
    .then(value => console.log(value))
    .catch(e => console.log(`${e}X`))
    .finally(() => console.log("Im done"));
