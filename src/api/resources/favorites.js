import ApiService from '../api.service';

const FavoritesResource = {
  handle: (params) => ApiService.put(`v1/favorites/handle/${params}`),
  index: () => ApiService.get('v1/favorites'),
};

export default FavoritesResource;
