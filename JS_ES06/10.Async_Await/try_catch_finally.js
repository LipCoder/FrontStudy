const getMoviesPromise = () => {
    fetch("https://yts.am/api/v2/list_movies.json")
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => console.log(json))
        .catch(e => console.log(`❌ ${e}`));
};

// try catch 
// promise에서 error를 처리하는 catch역할을 한다.
const getMoviesAsync = async() => {

    try {
        const response = await fetch("https://yts.am/api/v2/list_movies.json");
        const json = await response.json();
        console.log(response);
        console.log(json);  
    } catch (e) {
        console.log(`❌ ${e}`);
    } finally { // finally도 가능
        console.log("We are done!"); 
    }

    
};

getMoviesAsync();
