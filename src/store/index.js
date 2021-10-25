import Vue from 'vue';
import Vuex from 'vuex';

import Loading from './modules/loading';
import Snackbar from './modules/snackbar';
import Error from './modules/error';
import Session from './modules/session';
import User from './modules/user';
import Movie from './modules/movie';
import Favorite from './modules/favorite';
import WatchLater from './modules/watch_later';
import Watched from './modules/watched';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Loading,
    Snackbar,
    Error,
    Session,
    User,
    Movie,
    Favorite,
    WatchLater,
    Watched,
  },
});
