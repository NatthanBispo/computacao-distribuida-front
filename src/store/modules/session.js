import AuthStore from '../../common/auth.store';

const state = {
  email: null,
  token: null,
};

const getters = {
  hasSession($state) {
    return !!($state.email || AuthStore.getValueByKey('email'))
        && !!($state.token || AuthStore.getValueByKey('token'));
  },
  getEmail($state) {
    if ($state.email) {
      return $state.email;
    }
    return AuthStore.getValueByKey('email');
  },
  getToken($state) {
    if ($state.token) {
      return $state.token;
    }
    return AuthStore.getValueByKey('token');
  },
};

const actions = {
  createSession({ commit }, payload) {
    commit('setCredentials', payload);
  },

  refreshSession({ dispatch }, payload) {
    dispatch('destroySession');
    dispatch('createSession', payload);
  },

  destroySession({ commit }) {
    commit('destroyCredentials');
  },

  updateToken({ commit }, newToken) {
    commit('setCredentials', { email: AuthStore.getValueByKey('email'), token: newToken });
  },

  restoreSession({ commit }) {
    commit('retrieveSession');
  },
};

const mutations = {
  setCredentials($state, payload) {
    const stateCopy = $state;
    if (payload) {
      if (payload.email && payload.token) {
        AuthStore.saveCredentials(payload);
        stateCopy.email = payload.email;
        stateCopy.token = payload.token;
      }
    }
  },

  retrieveSession($state) {
    const stateCopy = $state;
    const credentials = AuthStore.getCredentials();
    if (credentials) {
      stateCopy.email = credentials.email;
      stateCopy.token = credentials.token;
    }
  },

  destroyCredentials($state) {
    const stateCopy = $state;
    AuthStore.destroyCredentials();
    stateCopy.email = null;
    stateCopy.token = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
