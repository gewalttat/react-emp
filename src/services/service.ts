import axios from "axios";
import { MovieData, ResponseMoviesType } from "../components/movies-container/MoviesContainer";

class DataService {
    async getAllMovies() {
      const res = await axios.get<ResponseMoviesType>(`http://localhost:4000/movies`);
      return res.data.data;
    }
  
    getMoiveById(id: number) {
        return axios.get(`http://localhost:4000/movies/${id}`);
    }

    async createMovie(movie: MovieData | undefined) {
      return axios.post("http://localhost:4000/movies", movie);
    }

    async updateMovie(movie: MovieData | undefined) {
      return axios.put(`http://localhost:4000/movies`, movie);
    }

    async deleteMovie(id: number | undefined) {
      return axios.delete(`http://localhost:4000/movies/${id}`);
    }

    async filterMovies(filter: string) {
      const res = await axios.get<ResponseMoviesType>(`http://localhost:4000/movies?filter=${filter}`);
      return res.data.data;
    }

    async sortMovies(sortBy: string) {
      const res = await axios.get<ResponseMoviesType>(`http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc`);
      return res.data.data;
    }

    async sortAndFilterMovies(sortBy: string, filter: string) {
      const res = await axios.get<ResponseMoviesType>(`http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&filter=${filter}`);
      return res.data.data;
    }
   }
  
  export default new DataService();