import ApiService from '../api.service';

const MoviesResource = {
  fetch_popular: () => ApiService.get('v1/movies/fetch_popular'),
};

export default MoviesResource;
