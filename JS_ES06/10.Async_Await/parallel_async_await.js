const getMoviesPromise = () => {
    fetch("https://yts.am/api/v2/list_movies.json")
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => console.log(json))
        .catch(e => console.log(`❌ ${e}`));
};


// Async parallel를 사용하기 위해서는 
// async 함수 내에 존재해야 한다.
// Promise.all
const getMoviesAsync = async() => {

    try {
        const [moviesResponse, responseResponse] = await Promise.all([
            fetch("https://yts.am/api/v2/list_movies.json"),
            fetch("https://yts.am/api/v2/moview_suggestions.json?movie_id=100")
        ]);
        const [movies, suggestions] = await Promise.all([
            moviesResponse.json(), 
            responseResponse.json()
        ]);
        console.log(movies, suggestions);  
    } catch (e) {
        console.log(`❌ ${e}`);
    } finally { 
        console.log("We are done!"); 
    }

    
};

getMoviesAsync();
