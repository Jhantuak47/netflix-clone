const key = "f8f4019565ed37827443152eedaef11c";

const endPoints = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTopTrending: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    // requestHorror: `https://api.themoviedb.org/3/movie?api_key=${key}&language=en-US&page=1&query=horror`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestConfiguration: `https://api.themoviedb.org/3/configuration?api_key=${key}`,
}

export default endPoints;