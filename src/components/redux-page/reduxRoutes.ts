import { getMovies } from '../../redux/moviesReducer';

export default [{ path: '/search', fetch: (dispatch: any) => dispatch(getMovies())}];