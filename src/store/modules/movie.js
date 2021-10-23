import Movies from '@/api/resources/movies';

const state = {
  movies: [],
};

const getters = {
  getMovies: () => (state.movies),
};

const actions = {
  fetchPopular({ commit, dispatch }) {
    Movies.fetch_popular().then((response) => {
      commit('setMovies', response);
      dispatch('removeLoading');
    });
  },

};

const mutations = {
  setMovies($state, payload) {
    const stateCopy = $state;
    stateCopy.movies = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
