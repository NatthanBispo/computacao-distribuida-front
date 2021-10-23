<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar> -->

    <v-main>
      <Router-View />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'hasSession',
    ]),
  },
  watch: {
    hasSession(hasSession) {
      if (!hasSession) {
        this.$router.push('/login');
      } else {
        this.$router.push('/home');
      }
    },
  },
};
</script>
