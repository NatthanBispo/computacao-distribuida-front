import Vue from 'vue';
import Vuex from 'vuex';

import Loading from './modules/loading';
import Session from './modules/session';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Loading,
    Session,
  },
});
