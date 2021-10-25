import ApiService from '../api.service';

const MoviesResource = {
  fetchPopular: () => ApiService.get('v1/movies/fetch_popular'),
  fetchByName: (params) => ApiService.query('v1/movies/fetch_by_name', params),
  myLists: (params) => ApiService.query('v1/movies/my_lists', params),
};

export default MoviesResource;
