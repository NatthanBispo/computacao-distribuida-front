import ApiService from '../api.service';

const WatchedsResource = {
  handle: (params) => ApiService.put(`v1/watcheds/handle/${params}`),
  index: () => ApiService.get('v1/watcheds'),
};

export default WatchedsResource;
