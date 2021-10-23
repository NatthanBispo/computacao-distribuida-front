import User from '@/api/resources/users';

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

  register({ commit, dispatch }, payload) {
    User.register(payload).then((response) => {
      commit('setUser', response);
      dispatch('createSession', response);
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
