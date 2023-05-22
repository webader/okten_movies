import {IRes} from "../types/axiosRes.type";
import {IMovie} from "../interfaces/user.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const movieService = {
    getAll:():IRes<IMovie[]> => axiosService.get(urls.movies.movies)
    getById:(id:number):IRes<IMovie> =>axiosService.get(urls.byId(id))
}