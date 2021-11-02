import ApiService from '../api.service';

const UsersResource = {
  login: (params) => ApiService.post('v1/users/sign_in', params),
  register: (params) => ApiService.post('v1/users', params)
};

export default UsersResource;
