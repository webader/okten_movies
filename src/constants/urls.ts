const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres ='/genre/movie/list';

const urls = {
    movies:{
        movies,
        //byId()
        // зробити метод по виводу фільмів byPage:(id:number):string => `${movies/}`
    },
    genres:{
        genres
    }
}
//https://api.themoviedb.org/3/discover/movie
//https://api.themoviedb.org/3/genre/movie/list


// curl --request GET \
//      --url https://api.themoviedb.org/3/authentication \
//     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDVkYWExOTZiNzIyZDM5YTZjYzk2MzNhZGE4MWYwZiIsInN1YiI6IjY0NjFlZmJjYTY3MjU0MDBlM2QyNjZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.epII4GHzCM8Mk0j3B322ZSZGBoJm7nrUiLRmUo8yrR0' \
//      --header 'accept: application/json'

export {
    baseURL,
    urls
}