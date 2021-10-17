import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pt from 'vuetify/es5/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#13171F',
        secondary: '#010712',
        accent: '#24262D',
        error: '#961227',
      },
    },
  },
  options: {
    customProperties: true,
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
});
