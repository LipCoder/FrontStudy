// 앞서 살펴본 then, catch와 같은 것들은 구식이다.
// 많은 사람들이 then을 사용하는 것에 문제가 있다.
// then을 많이 쓰면 좋은 코드로 보이지 않는다.

// 결국 async, await와 같은 것들은 Promise를 더 잘 사용할 수 있게 해준다.
// await은 then의 역할을 대신해준다.
const getMoviesPromise = () => {
    fetch("https://yts.am/api/v2/list_movies.json")
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => console.log(json))
        .catch(e => console.log(`❌ ${e}`));
};

// async : await를 쓰기 전에 꼭 해줘야한다.
// await : promise가 끝날때까지 기다려준다.
const getMoviesAsync = async() => {
    const response = await fetch("https://yts.am/api/v2/list_movies.json");
    const json = await response.json();
    console.log(response);
    console.log(json);
};

getMoviesAsync();



