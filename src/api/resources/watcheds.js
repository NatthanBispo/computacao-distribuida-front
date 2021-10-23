import ApiService from '../api.service';

const WatchedsResource = {
  handle: (params) => ApiService.put(`v1/watcheds/handle/${params}`),
};

export default WatchedsResource;
