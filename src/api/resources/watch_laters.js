import ApiService from '../api.service';

const WatchLatersResource = {
  handle: (params) => ApiService.put(`v1/watch_laters/handle/${params}`),
};

export default WatchLatersResource;
