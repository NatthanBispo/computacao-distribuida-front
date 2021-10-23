import WatchLater from '@/api/resources/watch_laters';

const state = {
  watchLaters: [],
};

const getters = {
  getWatchLater: () => (state.watchLater),
};

const actions = {
  handleWatchLater({ commit }, payload) {
    WatchLater.handle(payload).then((response) => {
      commit('setWatchLater', response);
    });
  },
};

const mutations = {
  setWatchLater($state, payload) {
    const stateCopy = $state;
    stateCopy.watchLaters = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
