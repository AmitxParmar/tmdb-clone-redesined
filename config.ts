const API_URL: string = 'https://api.themoviedb.org/3/';
const NEXT_PUBLIC_API_KEY: string | undefined = process.env.NEXT_PUBLIC_API_KEY;

const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${NEXT_PUBLIC_API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${NEXT_PUBLIC_API_KEY}&language=en-US`;

// For single movie
const movieUrl = (id?: string) => `${API_URL}movie/${id}?api_key=${NEXT_PUBLIC_API_KEY}`;
const creditsUrl = (id?: string) => `${API_URL}movie/${id}/credits?api_key=${NEXT_PUBLIC_API_KEY}`;

const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780';

export {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    NEXT_PUBLIC_API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    movieUrl,
    creditsUrl
};
