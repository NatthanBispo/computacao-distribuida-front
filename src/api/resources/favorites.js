import ApiService from '../api.service';

const FavoritesResource = {
  handle: (params) => ApiService.put(`v1/favorites/handle/${params}`),
};

export default FavoritesResource;
