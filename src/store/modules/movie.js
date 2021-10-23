import Movies from '@/api/resources/movies';

const state = {
  movies: [],
  hasMoviesLists: {},
};

const getters = {
  getMovies: () => (state.movies),
  getHasMoviesLists: () => (state.hasMoviesLists),
};

const actions = {
  fetchPopular({ commit, dispatch }) {
    Movies.fetchPopular().then((response) => {
      commit('setMovies', response);
      dispatch('removeLoading');
    });
  },

  fetchHasLists({ commit, dispatch }, payload) {
    Movies.myLists(payload).then((response) => {
      commit('setHasMoviesLists', response);
      dispatch('removeLoading');
    });
  },
};

const mutations = {
  setMovies($state, payload) {
    const stateCopy = $state;
    stateCopy.movies = payload;
  },
  setHasMoviesLists($state, payload) {
    const stateCopy = $state;
    stateCopy.hasMoviesLists = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
