import Vue from 'vue';
import Vuex from 'vuex';

import Loading from './modules/loading';
import Session from './modules/session';
import User from './modules/user';
import Movie from './modules/movie';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Loading,
    Session,
    User,
    Movie,
  },
});
