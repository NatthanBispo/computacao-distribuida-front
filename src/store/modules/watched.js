import Watched from '@/api/resources/watcheds';

const state = {
  watcheds: [],
};

const getters = {
  getWatcheds: () => (state.watcheds),
};

const actions = {
  indexWatched({ commit }) {
    Watched.index().then((response) => {
      commit('setWatcheds', response);
    });
  },
  handleWatched({ commit }, payload) {
    Watched.handle(payload).then((response) => {
      commit('setWatcheds', response);
    });
  },
};

const mutations = {
  setWatcheds($state, payload) {
    const stateCopy = $state;
    stateCopy.watcheds = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
