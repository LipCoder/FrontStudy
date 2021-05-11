// fetch => 누군가 만들어놓은 promise이다.

fetch("https://google.com")
    .then(response => console.log(response))
    .catch(e => console.log(`X ${e}`));


fetch("https://127.0.0.1:8080/")
    .then(response => response.text)
    .then(text => console.log(text))
    .catch(e => console.log(`X ${e}`));


fetch("https://yts.am/api/v2/list_movies.json/")
    .then(response =>{
        console.log(response);
        return response.json();
    })
    .then(json => console.log(json))
    .catch(e => console.log(`X ${e}`));