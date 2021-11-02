import Movies from '@/api/resources/movies';

const state = {
  movies: [],
  moviesByName: [],
  hasMoviesLists: {},
};

const getters = {
  getMovies: () => (state.movies),
  getMoviesByName: () => (state.moviesByName),
  getHasMoviesLists: () => (state.hasMoviesLists),
};

const actions = {
  fetchPopular({ commit, dispatch }) {
    Movies.fetchPopular().then((response) => {
      commit('setMovies', response);
      dispatch('removeLoading');
    });
  },
  fetchByName({ commit, dispatch }, payload) {
    Movies.fetchByName(payload).then((response) => {
      commit('setMoviesByName', response);
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
  setMoviesByName($state, payload) {
    const stateCopy = $state;
    stateCopy.moviesByName = payload;
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
