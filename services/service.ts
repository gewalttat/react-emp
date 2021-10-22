import axios from "axios";
import { MovieData } from "../components/movies-container/MoviesContainer";

class TutorialDataService {
    getAllMovies() {
      return axios.get("http://localhost:4000/movies");
    }
  
    getMoiveById(id: number) {
        return axios.get(`http://localhost:4000/movies/${id}`);
    }

    createMovie(movie: MovieData) {
      return axios.post("http://localhost:4000/movies", movie);
    }

    updateMovie(movie: MovieData) {
      return axios.put("http://localhost:4000/movies", movie);
    }

    deleteMovie(id: number) {
      return axios.delete(`http://localhost:4000/movies/${id}`);
    }


  
    // create(data) {
    //   return http.post("/tutorials", data);
    // }
  
    // update(id, data) {
    //   return http.put(`/tutorials/${id}`, data);
    // }
  
    // delete(id) {
    //   return http.delete(`/tutorials/${id}`);
    // }
  
    // deleteAll() {
    //   return http.delete(`/tutorials`);
    // }
  
    // findByTitle(title) {
    //   return http.get(`/tutorials?title=${title}`);
    // }
  }
  
  export default new TutorialDataService();