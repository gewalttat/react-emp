import { getMovies, searchMovie } from '../../redux/moviesReducer';
import { StaticRouter } from 'react-router-dom';

export default [
    { path: '/search', fetch: (dispatch: any) => dispatch(getMovies())},
    // { path: `/search/?${}`, fetch: (dispatch: any) => dispatch(searchMovie(search))},
];