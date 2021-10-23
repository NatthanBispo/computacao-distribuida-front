import Favorite from '@/api/resources/favorites';

const state = {
  favorites: [],
};

const getters = {
  getFavorites: () => (state.favorites),
};

const actions = {
  handleFavorite({ commit }, payload) {
    Favorite.handle(payload).then((response) => {
      commit('setFavorites', response);
    });
  },
};

const mutations = {
  setFavorites($state, payload) {
    const stateCopy = $state;
    stateCopy.favorites = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
