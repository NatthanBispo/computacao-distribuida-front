import User from '@/api/resources/users';
import routes from '@/routes/appRoutes';

const state = {
  user: null,
};

const getters = {
  currentUser: () => (state.user),
};

const actions = {
  login({ commit, dispatch }, payload) {
    User.login(payload).then((response) => {
      dispatch('createSession', response);
      commit('setUser', response);
      dispatch('removeLoading');
    });
  },
  register({ dispatch }, payload) {
    User.register(payload).then(() => {
      dispatch('addSuccessMessage', 'Usuario criado com sucesso');
      routes.push('/login');
      dispatch('removeLoading');
    });
  },
};

const mutations = {
  setUser($state, payload) {
    const stateCopy = $state;
    stateCopy.user = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
