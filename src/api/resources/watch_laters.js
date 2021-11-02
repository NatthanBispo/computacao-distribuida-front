import ApiService from '../api.service';

const WatchLatersResource = {
  handle: (params) => ApiService.put(`v1/watch_laters/handle/${params}`),
  index: () => ApiService.get('v1/watch_laters'),
};

export default WatchLatersResource;
