<template>
  <v-app>
    <v-main>
      <Router-View />
    </v-main>
    <Loading />
    <Snackbar />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Loading: () => import('@/components/feedbacks/Loading.vue'),
    Snackbar: () => import('@/components/feedbacks/Snackbar.vue'),
  },
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
