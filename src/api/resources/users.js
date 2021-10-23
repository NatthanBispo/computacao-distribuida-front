import ApiService from '../api.service';

const UsersResource = {
  login: (params) => ApiService.post('v1/users/sign_in', params)
};

export default UsersResource;
